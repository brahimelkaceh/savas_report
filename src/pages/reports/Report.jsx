import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import SitesBar from "./SitesBar";
import "./style.css";
import Batiment from "./Batiment";
<<<<<<< HEAD
import UseFetchData from "../../hooks/UseFetchData";
import Loader from "../../components/loader/Loader";
let base_url = "https://farmdriver.savas.ma/api/";
=======
// import Test from "./Test";
let base_url = "https://pouliprod.savas.ma/api/";
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda

function Report({}) {
  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);
<<<<<<< HEAD
=======
  const sites = useSelector((state) => state.ShowBatimentCat.sites);
  // console.log(sites);
  const dispatch = useDispatch();
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda

  const [sites, setSites] = useState("");
  const [siteId, setSiteId] = useState("");
  const dispatch = useDispatch();
  const SiteApiurl = useMemo(() => `${base_url}get-sites/`, [base_url]);
  const { data, loading, error } = UseFetchData(SiteApiurl, "GET");

  if (loading) {
    return (
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Loader />
      </main>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  const FetchData = (id) => {
    setSiteId(id);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

<<<<<<< HEAD
    fetch(`${base_url}get-site-bats/`, {
      method: "POST",
      body: JSON.stringify({
        "site": id,
      }),
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSites(data);
      })
      .catch((error) => console.error(error));
=======
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
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  };

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
<<<<<<< HEAD
        <SitesBar siteData={data} FetchData={FetchData} />
        {sites && <Batiment batiments={sites} siteId={siteId} />}
=======
        <SitesBar sitesName={siteData[0]?.sites} />
        <Batiment batiments={sites} />
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
        {/* <Test /> */}
      </main>
    </>
  );
}

export default Report;
