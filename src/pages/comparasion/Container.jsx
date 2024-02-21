import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "./sections/Header";
import Body from "./sections/Body";
import { useState } from "react";
import "./style/style.css";
import { Card, Divider } from "@mui/material";
const Comparatif = () => {
  const [lot, setLot] = useState([]);
  const [data, setData] = useState([]);
  const [courbeId, setCourbeId] = useState("");

  return (
    <main className="page">
      <Navbar />
      <Card
        sx={{
          m: 1,
          p: 1,
        }}
        className="charts-container"
      >
        <Header setLot={setLot} setData={setData} setCourbeId={setCourbeId} />
        <Divider variant="middle" />
        <Body lot={lot} lots={data} courbeId={courbeId} />
      </Card>
    </main>
  );
};

export default Comparatif;
