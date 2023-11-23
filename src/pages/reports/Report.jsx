import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import SitesBar from "./SitesBar";
import "./style.css";
import Batiment from "./Batiment";
import UseFetchData from "../../hooks/UseFetchData";
import Loader from "../../components/loader/Loader";
let base_url = "https://farmdriver.savas.ma/api/";

function Report() {
  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

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

  const FetchData = (id) => {
    setSiteId(id);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

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
  };

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <SitesBar siteData={data} FetchData={FetchData} />
        {sites && <Batiment batiments={sites} siteId={siteId} />}
        {/* <Test /> */}
      </main>
    </>
  );
}

export default Report;
