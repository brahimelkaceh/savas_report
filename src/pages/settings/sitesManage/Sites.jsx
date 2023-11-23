import SitesTable from "./SitesTable";
import SitesManage from "./SitesManage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
let base_url = "https://farmdriver.savas.ma/api/";

import "./style.css";
function Sites() {
  let renderData = useSelector((state) => state.getSiteData.renderData);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSitesData = async () => {
    setLoading(true);

    try {
      const authTokens = JSON.parse(localStorage.getItem("authTokens"));
      if (!authTokens || !authTokens.access) {
        throw new Error("Access token not found");
      }

      const accessToken = authTokens.access;
      const response = await fetch(`${base_url}get-sites/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (data) {
        setData(data);
      }
    } catch (error) {
      console.error("Error fetching sites data:", error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSitesData();
  }, [renderData]);
  return (
    <div className="sites-settings">
      <SitesManage />
      <SitesTable data={data} loading={loading} />
    </div>
  );
}

export default Sites;
