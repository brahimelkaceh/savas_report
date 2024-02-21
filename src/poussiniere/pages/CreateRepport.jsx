import React, { useEffect } from "react";
import { useMemo } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import { useState } from "react";
import SitesBar from "../components/sitesBar/Index";
import Batiment from "../components/batsBar/Index";
import Navbar from "../components/navbar/Navbar";
import { DataProvider } from "../context/DataProvider";
import { LinearProgress } from "@mui/material";
let base_url = "https://farmdriver.savas.ma/api/";

const CreateRepport = () => {
  const [bats, setBats] = useState([]);
  const [siteId, setSiteId] = useState("");

  const SiteApiurl = useMemo(() => `${base_url}get-pouss-sites/`, [base_url]);
  const { data, loading, error } = UseFetchData(SiteApiurl, "GET");
  const BatsApiurl = useMemo(
    () => `${base_url}get-pouss-lots/?site=${siteId}`,
    [base_url, siteId]
  );
  const {
    data: batimentData,
    loading: loadingBatimentData,
    error: errorBatiment,
    refetchData,
  } = UseFetchData(BatsApiurl, "GET");
  useEffect(() => {
    refetchData();
  }, [siteId]);
  return (
    <DataProvider>
      <main className="page">
        <Navbar />
        <SitesBar sites={data} setSiteId={setSiteId} />
        {loading && <LinearProgress />}
        {batimentData && (
          <Batiment
            refetchData={refetchData}
            batiments={batimentData}
            siteId={siteId}
          />
        )}
      </main>
    </DataProvider>
  );
};

export default CreateRepport;
