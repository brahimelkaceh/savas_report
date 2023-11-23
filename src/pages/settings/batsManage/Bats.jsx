import BatsManage from "./BatsManage";
import BatsTable from "./BatsTable";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
let base_url = "https://farmdriver.savas.ma/api/";

function Bats({ siteName }) {
  let renderData = useSelector((state) => state.getSiteData.renderData);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBatsData = async () => {
    setLoading(true);

    try {
      const authTokens = JSON.parse(localStorage.getItem("authTokens"));
      if (!authTokens || !authTokens.access) {
        throw new Error("Access token not found");
      }

      const accessToken = authTokens.access;
      const response = await fetch(`${base_url}get-bats/`, {
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
    getBatsData();
  }, [renderData]);
  return (
    <div className="manage-bats slit-in-horizontal">
      <BatsManage siteName={siteName} />
      <BatsTable siteName={siteName} data={data} loading={loading} />
    </div>
  );
}

export default Bats;
