import React, { useEffect, useState } from "react";

import { BiEdit, BiTrash, BiDownload } from "react-icons/bi";
import PopperItem from "../../components/popper/Popper";
import HoverPopper from "../../components/popper/HoverPopper";
import ModificationModal from "./modification-modal/ModificationModal";
import ImgHoverPropper from "../../components/popper/ImgHoverPropper";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import MouseOverPopover from "../../components/popper/MouseOverPopover";
import DayDataTable from "./dayTable/DayDataTable";
import WeeklyTable from "./weekTable/WeeklyTable";
import HeaderTable from "./HeaderTable";

function DataTable({
  data,
  enabledItems,
  enabledViabilite,
  enabledProductions,
  enabledConsommation,
  enabledObservation,
  agendaHeader,
  setAgendaHeader,

  productionseHeader,
  setProductionsHeader,

  viabiliteHeader,
  setViabiliteHeader,
  updateViabiliteState,

  consommationeHeader,
  setconsommationHeader,

  observationHeader,
  setObservationHeader,

  updateAgendaState,
}) {
  const [dailyData, setDailyData] = useState();
  const [weeklyData, setWeeklyData] = useState([]);
  let lineToRemove;
  let newDailyData;

  const generateDailyData = () => {
    data?.map((d) => (Array.isArray(d) ? setDailyData(d) : setWeeklyData(d)));
  };

  // const generateDailyData = () => {
  //   data.map((d) => {
  //     if (Array.isArray(d)) {
  //       setDailyData(d);
  //       lineToRemove = d[d.length - 1];

  //       // console.log(lineToRemove);
  //       const newDailyData = d.filter((line) => line !== lineToRemove);
  //       setDailyData(newDailyData);
  //       setWeeklyData(lineToRemove);
  //       console.log(newDailyData);
  //       // console.log(weeklyData);

  //       // d.map((e) => console.log(e));
  //     }
  //   });
  // };

  useEffect(() => {
    generateDailyData();
  }, []);

  const [className, setClassName] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const [items, setItems] = React.useState(data);
  // console.log(items);

  // const deleteItem = (index) => {
  //   const newItems = [...items];
  //   newItems.splice(index, 1);
  //   setItems(newItems);
  // };

  return (
    <>
      {data && (
        <table className="slide-in-blurred-right">
          <thead className="fixed-header">
            <HeaderTable
              enabledItems={enabledItems}
              enabledConsommation={enabledConsommation}
              enabledObservation={enabledObservation}
              enabledViabilite={enabledViabilite}
              enabledProductions={enabledProductions}
              agendaHeader={agendaHeader}
              productionseHeader={productionseHeader}
              setProductionsHeader={setProductionsHeader}
              viabiliteHeader={viabiliteHeader}
              setAgendaHeader={setAgendaHeader}
              setViabiliteHeader={setViabiliteHeader}
              consommationeHeader={consommationeHeader}
              setconsommationHeader={setconsommationHeader}
              observationHeader={observationHeader}
              setObservationHeader={setObservationHeader}
              updateAgendaState={updateAgendaState}
              updateViabiliteState={updateViabiliteState}
            />
            <tr className="table-header-tr">
              {enabledItems.map((agenda) => (
                <th key={agenda.id} style={{ minWidth: "40px" }}>
                  {agenda.name}
                </th>
              ))}
              {enabledViabilite.map((viabilite) => (
                <th key={viabilite.id} style={{ minWidth: "40px" }}>
                  {viabilite.name}
                </th>
              ))}
              {enabledProductions.map((production) => (
                <th key={production.id} style={{ minWidth: "40px" }}>
                  {production.name}
                </th>
              ))}
              {enabledConsommation.map((consommation) => (
                <th key={consommation.id} style={{ minWidth: "40px" }}>
                  {consommation.name}
                </th>
              ))}
              {enabledObservation.map((observation) => (
                <th key={observation.id} style={{ minWidth: "40px" }}>
                  {observation.name}
                </th>
              ))}
              <th style={{ minWidth: "40px" }}>Actions</th>
            </tr>
          </thead>
          <WeeklyTable data={data} />
          {/* {data.map((d, i) =>
            Array.isArray(d) ? (
              <DayDataTable
                key={i}
                dailyData={d}
                agendaHeader={agendaHeader}
                viabiliteHeader={viabiliteHeader}
                enabledItems={enabledItems}
                enabledConsommation={enabledConsommation}
                enabledObservation={enabledObservation}
                enabledViabilite={enabledViabilite}
                enabledProductions={enabledProductions}
              />
            ) : (
              <WeeklyTable
                key={i}
                agendaHeader={agendaHeader}
                viabiliteHeader={viabiliteHeader}
                enabledItems={enabledItems}
                enabledConsommation={enabledConsommation}
                enabledObservation={enabledObservation}
                enabledViabilite={enabledViabilite}
                enabledProductions={enabledProductions}
                d={d}
              />
            )
          )} */}
        </table>
      )}
    </>
  );
}

export default DataTable;
