import React, { useEffect } from "react";
import BatimentForm from "./BatimentForm";
import { useState } from "react";
import BatimentSelection from "./BatimentSelection";
import ProphylaxiForm from "./ProphylaxiForm";
import { useData } from "../../context/DataProvider";
import { Alert, Grid, LinearProgress } from "@mui/material";
import FormHeader from "../../../pages/reports/Components/FormHeader";
import api from "../../../api/api";

function Batiment({ batiments, siteId }) {
  const [batimentId, setBatimentId] = useState(null);
  const { dispatch } = useData();
  const [nextData, setNextData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNextSend = async (id) => {
    try {
      setLoading(true);
      const result = await api.getPoussNext(id);
      setNextData(result);
      setError("");
    } catch (error) {
      setError(
        "Échec de récupération des données. Veuillez vérifier votre connexion internet et réessayer ultérieurement."
      );
      setNextData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNextSend();
  }, [siteId]);
  useEffect(() => {
    if (nextData) {
      dispatch({ type: "SET_DATA", payload: nextData });
    }
  }, [nextData, dispatch]);
  return (
    <>
      <div className="batiment-category">
        {loading && <LinearProgress />}
        <BatimentSelection
          BatimentIdent={batiments}
          siteId={siteId}
          batimentId={batimentId}
          setBatimentId={setBatimentId}
          data={nextData}
          fetchNextSend={fetchNextSend}
        />
        <Grid container spacing={0} mb={0}>
          <Grid item xs={12}>
            {error && (
              <Alert variant="standard" severity="error">
                {error}
              </Alert>
            )}
          </Grid>
          {nextData?.length > 0 &&
            nextData?.map((nextSend, i) => {
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
          {nextData &&
            nextData?.map((nextSend) => {
              return (
                nextSend?.prophylaxie &&
                nextSend?.prophylaxie?.map((data, i) => (
                  <Grid key={i} item xl={6} md={12} sm={12}>
                    <ProphylaxiForm key={i} data={data} />
                  </Grid>
                ))
              );
            })}
        </Grid>
        <Grid container flexDirection="row" spacing={2} mb={4}>
          {nextData &&
            nextData?.map((nextSend) => {
              return (
                <Grid item xl={6} md={12} sm={12}>
                  <BatimentForm
                    siteId={siteId}
                    BatimentIdent={batiments}
                    batimentId={batimentId}
                    nextSend={nextSend}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default Batiment;
