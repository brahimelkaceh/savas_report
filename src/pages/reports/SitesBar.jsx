import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
<<<<<<< HEAD
import { useMemo, useState, useEffect } from "react";
import UseFetchData from "../../hooks/UseFetchData";

let base_url = "https://farmdriver.savas.ma/api/";

function SitesBar({ siteData, FetchData }) {
  const [value, setValue] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
=======
import Box from "@mui/material/Box";
import { SitesDate } from "../../slices/ShowBatimentCat";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

let base_url = "https://pouliprod.savas.ma/api/";

function SitesBar({ sitesName }) {
  const [value, setValue] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const FetchData = (id) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}get-site-bats/`, {
      method: "POST",
      body: JSON.stringify({
        "site": id ? id : 1,
      }),
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(JSON.parse(data));
        dispatch(SitesDate(JSON.parse(data)));
      })
      .catch((error) => console.error(error));
  };
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  const handleChangeSite = (id) => {
    setActiveTab(id);
  };
  useEffect(() => {
<<<<<<< HEAD
    siteData && FetchData(siteData[0]?.id);
  }, [siteData]);

=======
    FetchData();
  }, []);
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  return (
    <div className="sites-bar">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="secondary scrollable force example"
      >
<<<<<<< HEAD
        {siteData &&
          siteData.map((site, i) => (
            <Tab
              key={site?.id}
=======
        {sitesName &&
          sitesName.map((site, i) => (
            <Tab
              key={site?.site_id}
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
              className={
                activeTab === i ? "btn-clicked site-button" : "site-button"
              }
              onClick={() => {
                handleChangeSite(i);
<<<<<<< HEAD
                FetchData(site?.id);
=======
                FetchData(site?.site_id);
                console.log(site.site_id);
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
              }}
              label={site?.name}
            />
          ))}
      </Tabs>
    </div>
  );
}

export default SitesBar;
