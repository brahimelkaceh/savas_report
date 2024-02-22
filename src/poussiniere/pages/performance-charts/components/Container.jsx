import React, { useState } from "react";
import ChartOptions from "./ChartOptions";

import Header from "./Header";
import HomogPvContainer from "../charts/HomogPvContainer";
import TemperatureChart from "../charts/TemperatureChart";
import LightContainer from "../charts/LightContainer";
import MortaliteContainer from "../charts/MortaliteContainer";
import ConsommationContainer from "../charts/ConsommationContainer";
import IcContainer from "../charts/IcContainer";

const Container = () => {
  const [seletctedValue, setSelectedValue] = React.useState(2);
  const [personName, setPersonName] = useState([]);
  const [lotId, setLotId] = useState("");
  const [title, setTitle] = useState("");

  const checkboxItems = {
    "Poids corporel & Homogénéité": {
      id: "1",
      name: "Poids corporel & Homogénéité",
      component: <HomogPvContainer title={title} id={lotId} />,
    },
    "Temperature": {
      id: "2",
      name: "Temperature",
      component: <TemperatureChart title={title} id={lotId} />,
    },
    "Lumiére & Intensité": {
      id: "3",
      name: "Lumiére & Intensité",
      component: <LightContainer title={title} id={lotId} />,
    },
    "Mortalité": {
      id: "4",
      name: "Mortalité",
      component: <MortaliteContainer title={title} id={lotId} />,
    },
    "Consommation": {
      id: "5",
      name: "Consommation",
      component: <ConsommationContainer title={title} id={lotId} />,
    },
    "Indice de conversion": {
      id: "6",
      name: "Indice de conversion",
      component: <IcContainer title={title} id={lotId} />,
    },
  };

  const displaySelectedItems = () => {
    return personName.map((itemName) => (
      <div className="chart-box" key={itemName}>
        {checkboxItems[itemName]?.component}
      </div>
    ));
  };

  return (
    <div className="charts-container">
      <Header
        setLotId={setLotId}
        lotId={lotId}
        setTitle={setTitle}
        personName={personName}
        setPersonName={setPersonName}
        checkboxItems={checkboxItems}
      />
      <div className="chart-body-container">
        <div
          className="charts-box-container"
          style={{
            display: "grid",
            gridTemplateColumns: seletctedValue === 1 ? "1fr" : "1fr 1fr 1fr",
            gridTemplateRows: "0fr 1fr",
            gap: "5px",
          }}
        >
          {personName?.length > 0 ? (
            displaySelectedItems()
          ) : (
            <p>veuillez choisir une courbe !!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
