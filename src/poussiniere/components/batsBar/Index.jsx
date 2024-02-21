import React, { useEffect, useMemo } from "react";

import BatimentForm from "./BatimentForm";
import { useState } from "react";
import BatimentSelection from "./BatimentSelection";
import ProphylaxiForm from "./ProphylaxiForm";
import { DataProvider, useData } from "../../context/DataProvider";
import { useSelector } from "react-redux";
import { Card, Grid, LinearProgress } from "@mui/material";
import FormHeader from "../../../pages/reports/Components/FormHeader";
import UseFetchData from "../../../hooks/UseFetchData";
let base_url = "https://farmdriver.savas.ma/api/";

function Batiment({ batiments, siteId }) {
  const [batimentId, setBatimentId] = useState(null);
  const [id, setId] = useState("");
  const { dispatch } = useData();
  const BatsApiurl = useMemo(
    () => `${base_url}get-pouss-next/?lotId=${id}`,
    [base_url, id]
  );
  const {
    data: batData,
    loading,
    error,
    refetchData,
  } = UseFetchData(BatsApiurl, "GET");
  console.log(batData);
  useEffect(() => {
    if (batData) {
      dispatch({ type: "SET_DATA", payload: batData });
    }
  }, [batData, dispatch]);
  useEffect(() => {
    refetchData();
    setId("");
  }, [siteId]);
  return (
    <>
      <div className="batiment-category">
        <BatimentSelection
          BatimentIdent={batiments}
          siteId={siteId}
          batimentId={batimentId}
          setBatimentId={setBatimentId}
          data={batData}
          setId={setId}
          loading={loading}
        />
        <Grid container spacing={0} mb={0}>
          {batData?.length > 0 &&
            id &&
            batData?.map((nextSend, i) => {
              return (
                <Grid item key={i} lg={6} md={12} sm={12}>
                  <FormHeader
                    nextReport={nextSend?.nextDate}
                    loading={loading}
                    lot_code={nextSend?.lot_code}
                    siteId={siteId}
                  />
                </Grid>
              );
            })}
        </Grid>
        <Grid container flexDirection="row" spacing={3} my={2} mt={0}>
          {batData &&
            id &&
            batData?.map((nextSend) => {
              return (
                nextSend?.prophylaxie &&
                nextSend?.prophylaxie?.map((data, i) => (
                  <Grid item xl={6} md={12} sm={12}>
                    <ProphylaxiForm key={i} data={data} setId={setId} />
                  </Grid>
                ))
              );
            })}
        </Grid>
        <Grid container flexDirection="row" spacing={2} mb={4}>
          {/* <ProphylaxiForm /> */}
          {batData &&
            id &&
            batData?.map((nextSend) => {
              return (
                <Grid item xl={6} md={12} sm={12}>
                  <BatimentForm
                    siteId={siteId}
                    BatimentIdent={batiments}
                    batimentId={batimentId}
                    setId={setId}
                    nextSend={nextSend}
                  />
                </Grid>
              );
            })}
        </Grid>

        {/* <LotCreation lotdata={batiments} /> */}
      </div>
    </>
  );
}

export default Batiment;
