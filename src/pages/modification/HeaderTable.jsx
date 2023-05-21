import React from "react";
import HeaderMenu from "./HeaderMenu";
import CheckBoxContainer from "./CheckBoxContainer";

function HeaderTable({
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
  return (
    <tr>
      {enabledItems.length > 0 && (
        <th
          className="table-header"
          colSpan={enabledItems?.length}
          // colSpan={3}
          // style={{ display: "flex", alignItems: "center" }}
        >
          <HeaderMenu
            title={"Agenda"}
            setAgendaHeader={setAgendaHeader}
            agendaHeader={agendaHeader}
            updateAgendaState={updateAgendaState}
          />
        </th>
      )}
      {enabledViabilite.length > 0 && (
        <th className="table-header" colSpan={enabledViabilite.length}>
          <HeaderMenu
            title={"Viabilite"}
            viabiliteHeader={viabiliteHeader}
            setViabiliteHeader={setViabiliteHeader}
            updateViabiliteState={updateViabiliteState}
          />
        </th>
      )}

      {enabledProductions.length > 0 && (
        <th className="table-header" colSpan={enabledProductions.length}>
          <HeaderMenu
            title={"Productions"}
            productionseHeader={productionseHeader}
            setProductionsHeader={setProductionsHeader}
          />
        </th>
      )}
      {enabledConsommation.length > 0 && (
        <th className="table-header" colSpan={enabledConsommation.length}>
          <HeaderMenu
            title={"Consommations"}
            consommationeHeader={consommationeHeader}
            setconsommationHeader={setconsommationHeader}
          />
        </th>
      )}
      {enabledObservation.length > 0 && (
        <th className="table-header" colSpan={enabledObservation.length}>
          <HeaderMenu
            title={"Observations"}
            observationHeader={observationHeader}
            setObservationHeader={setObservationHeader}
          />
        </th>
      )}

      {/* <th rowSpan={3} colSpan={2}>
        Actions
      </th> */}
    </tr>
  );
}

export default HeaderTable;
