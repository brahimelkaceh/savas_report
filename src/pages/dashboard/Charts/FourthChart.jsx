import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SkeletonBox from "../skeletons/SkeletonBox";
import AltChart from "../../../components/charts/AltChart";
import Loader from "../../../components/loader/Loader";
import UseLocalStorageState from "../../../hooks/UseLocalStorageState";
import useCustomFetch from "../hooks/UseFetchData";
import { useState, useEffect } from "react";
import "./style.css";

function FourthChart({ batSite, Sitesloading }) {
  const [value, setValue] = useState(0);
  const [label, setLabel] = useState(0);
  const chipData = [
    { key: 0, label: "7 jours" },
    { key: 1, label: "30 jours" },
  ];
  const [id, setId] = useState(null);
  const [date, setDate] = UseLocalStorageState("ProdTime", 0);
  const { data, loading } = useCustomFetch(
    id ? id : batSite[0].id,
    date ? date : 0,
    "altoeuf-chart"
  );
  const fetchDataById = (id) => {
    setId(id);
  };

  const fetchDataByDate = (date) => {
    setDate(date);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeLabel = (event, newValue) => {
    setLabel(newValue);
    localStorage.setItem("altTime", newValue);
  };

  useEffect(() => {
    const savedLabel = localStorage.getItem("altTime") || 0;
    setLabel(Number(savedLabel));
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
                  onClick={() => fetchDataById(d.id)}
                />
              ))}
          </Tabs>
          {Sitesloading && <Skeleton height={40} width="100%" />}
        </Box>
        {data !== null ? (
          <>
            <AltChart altData={data ? data : []} />

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
              <Tabs
                value={label}
                onChange={handleChangeLabel}
                style={{ maxWidth: "50%", width: "35%", margin: "0  auto" }}
              >
                {chipData?.map((data) => {
                  return (
                    <Tab
                      key={data.key}
                      label={data.label}
                      style={{ textTransform: "capitalize" }}
                      size="small"
                      color="primary"
                      variant="variant"
                      onClick={() => fetchDataByDate(data.key)}
                    />
                  );
                })}
              </Tabs>
            </Paper>
          </>
        ) : (
          <SkeletonBox />
        )}
        {loading && <Loader />}
      </div>
      {/* {loading && <SkeletonChart />} */}
    </>
  );
}

export default FourthChart;
