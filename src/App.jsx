import Report from "./pages/Report";
import Visualize from "./pages/Visualize";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import axios from "axios";
import { useState, useEffect } from "react";
import Modification from "./pages/Modification";
import "./styles/animations.css";
import Error from "./pages/Error";
function App() {
  const CreateReports = (report, url) => {
    axios.post(url, report).then((response) => {
      response.data;
      if (response.status === 200) {
        alert("sent report");
      }
    });
  };

  const [reports, setReports] = useState([]);
  const [lots, setLots] = useState([]);

  const FetchData = (report) => {
    const url = `https://savas-app-2000-default-rtdb.firebaseio.com/${report}.json`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        let reportData = [];
        for (let key in data) {
          reportData.push({ ...data[key], id: key });
        }
        setReports(reportData);
      });
  };
  const FetchLotData = (lot) => {
    const url = `https://savas-app-2000-default-rtdb.firebaseio.com/${lot}.json`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        let lotData = [];
        for (let key in data) {
          lotData.push({ ...data[key], id: key });
        }
        setLots(lotData);
      });
  };
  useEffect(() => {
    FetchData("report");
    FetchLotData("lot");
  }, [0]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Report
              CreateReports={CreateReports}
              lots={lots}
              FetchLotData={FetchLotData}
            />
          }
        />
        <Route
          path="/visualize"
          element={<Visualize reports={reports} FetchData={FetchData} />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/modification" element={<Modification />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
