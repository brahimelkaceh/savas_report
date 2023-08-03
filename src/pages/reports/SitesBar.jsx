import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
  const handleChangeSite = (id) => {
    setActiveTab(id);
  };
  useEffect(() => {
    FetchData();
  }, []);
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
        {sitesName &&
          sitesName.map((site, i) => (
            <Tab
              key={site?.site_id}
              className={
                activeTab === i ? "btn-clicked site-button" : "site-button"
              }
              onClick={() => {
                handleChangeSite(i);
                FetchData(site?.site_id);
                console.log(site.site_id);
              }}
              label={site?.name}
            />
          ))}
      </Tabs>
    </div>
  );
}

export default SitesBar;
