import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import SitesBar from "./SitesBar";
import "./style.css";
import Batiment from "./Batiment";
// import Test from "./Test";
let base_url = "https://pouliprod.savas.ma/api/";

function Report() {
  const [siteData, setSiteData] = useState("");
  const [loading, setLoading] = useState(false);
  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);
  const sites = useSelector((state) => state.ShowBatimentCat.sites);
  // console.log(sites);
  const dispatch = useDispatch();

  const fetchSiteData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}site-data/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setSiteData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteData();
  }, []);

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <SitesBar sitesName={siteData[0]?.sites} />
        <Batiment batiments={sites} />
        {/* <Test /> */}
      </main>
    </>
  );
}

export default Report;
