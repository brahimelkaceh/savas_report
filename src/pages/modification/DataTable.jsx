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
  // console.log(data);
  return (
    <>
      {data && (
        <table className="">
          {data.type === "weekly" ? (
            <WeeklyTable
              agendaHeader={agendaHeader}
              setAgendaHeader={setAgendaHeader}
              viabiliteHeader={viabiliteHeader}
              productionseHeader={productionseHeader}
              consommationeHeader={consommationeHeader}
              observationHeader={observationHeader}
              enabledItems={enabledItems}
              enabledConsommation={enabledConsommation}
              enabledObservation={enabledObservation}
              enabledViabilite={enabledViabilite}
              enabledProductions={enabledProductions}
              data={data.performance}
            />
          ) : (
            <DayDataTable
              data={data.performance}
              agendaHeader={agendaHeader}
              viabiliteHeader={viabiliteHeader}
              productionseHeader={productionseHeader}
              consommationeHeader={consommationeHeader}
              observationHeader={observationHeader}
              enabledItems={enabledItems}
              enabledConsommation={enabledConsommation}
              enabledObservation={enabledObservation}
              enabledViabilite={enabledViabilite}
              enabledProductions={enabledProductions}
            />
          )}
        </table>
      )}
    </>
  );
}

export default DataTable;
