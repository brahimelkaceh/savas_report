import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
// import SkeletonChart from "../skeletons/SkeletonChart";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
import { useState, useEffect } from "react";
import "./style.css";
import BarCharts from "../../../components/charts/BarCharts";
import MortChart from "../../../components/charts/MortChart";
import SkeletonChart from "../skeletons/SkeletonChart";
import SkeletonBox from "../skeletons/SkeletonBox";

// prod-chart/
// get-site-or-bats/
let base_url = "https://pouliprod.savas.ma/api/";

function FirstChart() {
  const [value, setValue] = useState(0);
  const [siteBatId, setSiteBatId] = useState(1);
  const [siteBatName, setSiteBatName] = useState("KAMOUNI");
  const [time, setTime] = useState(0);
  const [data, setData] = useState([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ]);
  const [chipData, setChipData] = useState([
    { key: 0, label: "Sem" },
    { key: 1, label: "Mois" },
  ]);
  const [loading, setLoading] = useState(false);
  const [mortData, setMortData] = useState([]);
  const [batSite, setBatSite] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
  };
  const handleClickTab = (tabValue) => {
    console.log(tabValue);
  };

  const FetchProdChart = async (timeId, BatId, BatName) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}mort-chart/`, {
        method: "POST",
        body: JSON.stringify({
          name: BatName ? BatName : siteBatName,
          place: BatId ? BatId : siteBatId,
          time: timeId ? timeId : time,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        setMortData(JSON.parse(data));
        // console.log(true);
      } else {
        setLoading(false);
        setMortData(null);
      }
    } catch (error) {
      setLoading(false);
      setMortData([]);
    }
  };
  const GetSiteOrBat = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-site-or-bats/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setBatSite(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchProdChart(time, siteBatId, siteBatName);
    GetSiteOrBat();
  }, []);

  return (
    <>
      <div className="First-chart">
        <Box
          sx={{
            maxWidth: { xs: 320, sm: "100%" },
            bgcolor: "#DAFFFB",
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable auto tabs example"
          >
            {batSite !== null &&
              batSite?.map((d) => (
                <Tab
                  key={d.id}
                  label={d.name}
                  sx={{
                    fontSize: "14px",
                    minWidth: "20px",
                    minHeight: "20px",
                  }}
                  onClick={() => FetchProdChart(1, d.id, d.name)}
                />
              ))}
          </Tabs>
        </Box>
        {mortData !== null ? (
          <>
            <MortChart mortData={mortData} />
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.2,
                m: 0,
              }}
              component="ul"
            >
              {chipData.map((data) => {
                return (
                  <ListItem key={data.key}>
                    <Chip
                      label={data.label}
                      size="small"
                      color="primary"
                      variant="outlined"
                      onClick={() => FetchProdChart(data.key, 1, "KAMOUNI")}
                    />
                  </ListItem>
                );
              })}
            </Paper>
          </>
        ) : (
          <SkeletonBox />
        )}
      </div>
      {loading && <SkeletonChart />}
    </>
  );
}

export default FirstChart;
