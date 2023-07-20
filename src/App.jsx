import Login from "./components/login/Login";
// import Report from "./pages/Report";
import Report from "./pages/reports/Report";
import Visualize from "./pages/Visualize";
import Settings from "./pages/settings/Settings";
import Error from "./pages/Error";
import Modification from "./pages/modification/Modification";
import Dashboard from "./pages/dashboard/Dashboard";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/animations.css";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import Charts from "./pages/charts/Charts";
import Souches from "./pages/souches/Souches";
import Help from "./pages/help/Help";
import AddGuide from "./pages/souches/AddGuide";
let base_url = "https://pouliprod.savas.ma/api/";

function App() {
  const CreateReports = (data) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}add-report-prod/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.parse(data));
      })
      .catch((error) => console.error(error));

    // .catch((error) => console.log("somthing xwrong"));
  };

  const [reports, setReports] = useState([]);
  const [lots, setLots] = useState([]);

  // const FetchData = async () => {
  //   // setLoading(true);
  //   const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

  //   try {
  //     const response = await fetch(`${base_url}get-finished-report/`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     // console.log(response);
  //     const data = await response.json();
  //     if (response.status === 200) {
  //       // setLoading(false);
  //       // console.log(JSON.stringify(data));
  //       // setData(JSON.parse(data));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     // setLoading(false);
  //   }
  // };
  // const FetchLotData = (lot) => {
  //   const url = `https://savas-app-2000-default-rtdb.firebaseio.com/${lot}.json`;
  //   axios
  //     .get(url)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       let lotData = [];
  //       for (let key in data) {
  //         lotData.push({ ...data[key], id: key });
  //       }
  //       setLots(lotData);
  //     });
  // };
  useEffect(() => {
    // FetchData();
    // FetchLotData("lot");
  }, [0]);
  console.log(reports);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route
            exact
            path="/"
            element={
              <Dashboard

              // FetchLotData={FetchLotData}
              />
            }
          />

          <Route
            path="/report"
            element={
              <Report
                CreateReports={CreateReports}
                lots={lots}
                base_url={base_url}
              />
            }
          />
          <Route
            path="/visualize"
            element={
              <Visualize
                reports={reports}
                // FetchData={FetchData}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/souches" element={<Souches />} />
          <Route path="/souches/ajouter-guide" element={<AddGuide />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/modification"
            element={<Modification base_url={base_url} />}
          />
          <Route path="/charts" element={<Charts />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
