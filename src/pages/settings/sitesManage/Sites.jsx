import SitesTable from "./SitesTable";
import SitesManage from "./SitesManage";
import "./style.css";
import BatsManage from "./BatsManage";

import { useState, useEffect } from "react";
let base_url = "https://pouliprod.savas.ma/api/";
function Sites() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const FetchSiteData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}update-user-site/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        // body: JSON.stringify({
        //   "lotId": 2,
        // }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        setData(JSON.parse(data));
        console.log(JSON.parse(data));
      } else {
        setLoading(false);
        setData([]);
      }
    } catch (error) {
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    FetchSiteData();
  }, []);
  return (
    <div className="sites-settings">
      <SitesManage />
      <BatsManage />
      <SitesTable />
    </div>
  );
}

export default Sites;
