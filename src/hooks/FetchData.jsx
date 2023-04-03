import axios from "axios";
import { useState, useEffect } from "react";
const FetchData = () => {
  const [reports, setReports] = useState([]);
  const FetchingData = (url) => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        let reportData = [];
        for (let key in data) {
          reportData.push({ ...data[key], id: key });
        }
        console.log(reportData);
        setReports(reportData);
      });
  };
  useEffect(() => {
    FetchingData(url);
  }, []);
};

export default FetchData;
