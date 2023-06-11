import React, { useEffect, useState, useRef } from "react";
import MouseOverPopover from "../../../components/popper/MouseOverPopover";
import HoverPopper from "../../../components/popper/HoverPopper";
import ImgHoverPropper from "../../../components/popper/ImgHoverPropper";
import PopperItem from "../../../components/popper/Popper";
import ModificationModal from "../modification-modal/ModificationModal";
import HeaderTable from "../HeaderTable";
import Rating from "@mui/material/Rating";
import { BiEdit, BiTrash, BiDownload } from "react-icons/bi";
import { daDK } from "@mui/x-data-grid";

function DayDataTable({
  data,
  agendaHeader,
  viabiliteHeader,
  productionseHeader,
  consommationeHeader,
  observationHeader,
  enabledItems,
  enabledViabilite,
  enabledProductions,
  enabledConsommation,
  enabledObservation,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [dayData, setDayData] = useState(data);
  // const [weeklyData, setWeeklyData] = useState();

  let lineToRemove = dayData?.map((d) => d[d.length - 1]).slice(0, -1);
  let dailyData = dayData?.map((dailyData) => dailyData);
  const tableRef = useRef(null);

  useEffect(() => {
    scrollToLastRow();
  }, []);

  const scrollToLastRow = () => {
    if (tableRef.current) {
      const rows = tableRef.current.getElementsByTagName("tr");
      const lastRow = rows[rows.length - 1];
      if (lastRow) {
        lastRow.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <thead className="fixed-header">
        <HeaderTable
          enabledItems={enabledItems}
          enabledConsommation={enabledConsommation}
          enabledObservation={enabledObservation}
          enabledViabilite={enabledViabilite}
          enabledProductions={enabledProductions}
          agendaHeader={agendaHeader}
          productionseHeader={productionseHeader}
          // setProductionsHeader={setProductionsHeader}
          viabiliteHeader={viabiliteHeader}
          // setAgendaHeader={setAgendaHeader}
          // setViabiliteHeader={setViabiliteHeader}
          consommationeHeader={consommationeHeader}
          // setconsommationHeader={setconsommationHeader}
          observationHeader={observationHeader}
          // setObservationHeader={setObservationHeader}
          // updateAgendaState={updateAgendaState}
          // updateViabiliteState={updateViabiliteState}
        />
      </thead>
      <tbody className="tracking-in-contract-bck" ref={tableRef}>
        {dailyData &&
          dailyData.map((datas, i) => (
            <>
              <tr className="table-header-tr ">
                {/* Agenda */}
                <th style={{ minWidth: "40px" }}>Date</th>
                <th style={{ minWidth: "60px" }}>
                  Jour <br /> /Sem civil
                </th>
                <th style={{ minWidth: "40px" }}>
                  Age <br />
                  [jour]
                </th>
                {/* Viabilité */}
                <th style={{ minWidth: "40px" }}>EP</th>
                <th style={{ minWidth: "40px" }}>Mortailité</th>
                <th style={{ minWidth: "40px" }}>∑ mortalité</th>
                <th style={{ minWidth: "40px" }}>P.V (g)</th>
                <th style={{ minWidth: "40px" }}>Homog (%)</th>
                <th style={{ minWidth: "40px" }}>Lumiére</th>
                <th style={{ minWidth: "40px" }}>Flash</th>
                {/* Production */}
                <th style={{ minWidth: "40px" }}>Ponte(%)</th>
                <th style={{ minWidth: "40px" }}>Productions</th>
                <th style={{ minWidth: "40px" }}>∑ Productions</th>
                <th style={{ minWidth: "40px" }} colSpan={3}>
                  PMO (g)
                </th>
                {/* Consomations */}
                <th style={{ minWidth: "40px" }}>Aliment</th>
                <th style={{ minWidth: "40px" }}>∑ Aliment</th>
                <th style={{ minWidth: "40px" }}>APS(g)</th>
                <th style={{ minWidth: "40px" }}>EPS</th>
                <th style={{ minWidth: "40px" }}>Eau (ml)</th>
                <th style={{ minWidth: "40px" }}>∑ Eau (ml)</th>
                <th style={{ minWidth: "40px" }}>F.E.P</th>
                {/* Observations */}
                <th style={{ minWidth: "40px" }}>Coquille</th>
                <th style={{ minWidth: "40px" }}>Fientes</th>
                <th style={{ minWidth: "40px" }}>Coloration d'oeufs</th>
                <th style={{ minWidth: "40px" }}>Observations</th>
                {/* Actions */}
                <th style={{ minWidth: "40px" }}>Actions</th>
              </tr>
              {datas?.map((d, i) =>
                i !== datas.length - 1 ? (
                  <>
                    <tr className="daily-col-color">
                      <td
                        style={{
                          whiteSpace: "noWrap",
                          // backgroundColor: "#e9f6fb",
                        }}
                        rowSpan={2}
                      >
                        {d.date}
                      </td>

                      <td
                        style={{
                          whiteSpace: "noWrap",
                          // backgroundColor: "#e9f6fb",
                        }}
                        rowSpan={2}
                      >
                        <span style={{ fontSize: "11px", fontWeight: "bold" }}>
                          {d.weekday}
                        </span>
                        /{d.semCivil}
                      </td>

                      <td rowSpan={2}>{d.age_j}</td>

                      <td
                        style={{ color: "#2E3840", fontWeight: "bold" }}
                        rowSpan={2}
                      >
                        {d.effectif_pres}
                      </td>
                      <td rowSpan={2}>{d.nbre_mort}</td>
                      <td rowSpan={2}>{d.cuml_nbr_mort}</td>
                      <td rowSpan={2}>{d.poid_vif}</td>
                      <td rowSpan={2}>{d.homog}</td>

                      <td rowSpan={2} style={{ minWidth: "52px" }}>
                        <HoverPopper data={d.lumiere} fontSize={15} />
                      </td>

                      <td rowSpan={2} style={{ minWidth: "52px" }}>
                        <HoverPopper data={d.flash} fontSize={15} />
                      </td>

                      <td rowSpan={2}>{d.cent_ponte}</td>
                      <td rowSpan={2}>{d.production}</td>
                      <td rowSpan={2}>{d.production_cuml}</td>
                      <td rowSpan={2} colSpan={3}>
                        {d.pmo}
                      </td>
                      <td rowSpan={2}>{d.alt_jour}</td>
                      <td rowSpan={2}>{d.cuml_alt}</td>
                      <td rowSpan={2}>{d.aps_j}</td>
                      <td rowSpan={2}>{d.eps_j}</td>
                      <td rowSpan={2}>{d.sum_eau}</td>
                      <td rowSpan={2}>{d.cuml_sum_eau}</td>
                      <td rowSpan={2}>{d.formule_ep}</td>

                      {observationHeader[0].isActive && (
                        <td rowSpan={2}>
                          <Rating
                            name="read-only"
                            value={parseInt(d?.shell_qty)}
                            readOnly
                          />
                        </td>
                      )}
                      {observationHeader[1].isActive && (
                        <td rowSpan={2}>{d?.fientes}</td>
                      )}
                      {observationHeader[2].isActive && (
                        <td
                          style={{ cursor: "pointer" }}
                          rowSpan={2}
                          className="coloration-o"
                        >
                          {/* <HoverPopper  /> */}
                          <ImgHoverPropper data={d?.coloration_o} />
                        </td>
                      )}
                      {observationHeader[3].isActive && (
                        <td
                          rowSpan={2}
                          className="observations"
                          style={{ cursor: "pointer" }}
                        >
                          {/* {d.observations.slice(0, 30).concat("...")} */}
                          <PopperItem observation={d?.observ} />
                        </td>
                      )}

                      <td rowSpan={2} className="actions">
                        <ModificationModal
                          open={open}
                          setOpen={setOpen}
                          data={d}
                        />
                        <span
                          style={{
                            color: "#FF6000",
                          }}
                          title="Edit"
                          onClick={handleOpen}
                        >
                          <BiEdit />
                        </span>
                        {d.deletable && (
                          <span
                            style={{
                              color: "#D21312",
                            }}
                            title="Delete"
                            onClick={() => deleteItem(i)}
                          >
                            <BiTrash />
                          </span>
                        )}

                        <span
                          style={{
                            color: "#5D9C59",
                          }}
                          title="Download"
                        >
                          <BiDownload />
                        </span>
                      </td>
                    </tr>
                    <tr className="daily-col-color"></tr>
                  </>
                ) : (
                  <>
                    <tr
                      style={{ backgroundColor: "#b0daff" }}
                      className="table-header-tr"
                    >
                      {/* Agenda */}
                      <th style={{ minWidth: "40px" }}>Date</th>
                      <th style={{ minWidth: "40px" }}>Sem civil</th>
                      <th style={{ minWidth: "40px" }} colSpan={1}>
                        Age
                      </th>

                      {/* Viabilité */}
                      <th style={{ minWidth: "40px" }} title="Effectif Présent">
                        EP
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="mortalité par poule présente"
                      >
                        Mort PP (%)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="mortalité par poule départ"
                      >
                        ∑ MortPD (%)
                      </th>
                      <th style={{ minWidth: "40px" }} title="Poids Vif">
                        P.V (g)
                      </th>
                      <th style={{ minWidth: "40px" }} title="homogèniété">
                        Homog (%)
                      </th>
                      <th style={{ minWidth: "40px" }}>Lumiére</th>
                      <th style={{ minWidth: "40px" }}>Flash</th>
                      {/* Production */}
                      <th style={{ minWidth: "40px" }}>Ponte(%)</th>
                      <th style={{ minWidth: "40px" }} colSpan={2}>
                        Nombre d'oeufs /PD
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Poids moyen d'oeuf"
                      >
                        PMO (g)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Masse d'oeufs par poule présente par semaine"
                      >
                        ∑ MOPP (g)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Masse d'oeufs par poule départ cumulée"
                      >
                        ∑ MOPD (kg)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Indice de convertion"
                      >
                        IC (g)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Aliment par oeuf par poule départ"
                      >
                        APOPD (g)
                      </th>
                      {/* Consomations */}
                      <th
                        style={{ minWidth: "40px" }}
                        title="Aliment cumulé par poule départ "
                      >
                        ∑ Alt PD (kg)
                      </th>
                      <th
                        style={{ minWidth: "40px" }}
                        title="Aliment par sujet"
                      >
                        APS(g)
                      </th>
                      <th style={{ minWidth: "40px" }}>Eau (ml)</th>
                      <th style={{ minWidth: "40px" }}>Ratio (Eau/Alt)</th>
                      <th style={{ minWidth: "40px" }} title="Formule en place">
                        F.E.P
                      </th>
                      {/* Observations */}
                      <th
                        style={{ minWidth: "40px" }}
                        title="Qualité de coquille"
                      >
                        Coquille
                      </th>
                      <th style={{ minWidth: "40px" }} title="État de Fientes">
                        Fientes
                      </th>
                      <th style={{ minWidth: "40px" }}>Coloration d'oeufs</th>
                      <th style={{ minWidth: "40px" }}>Observations</th>
                      {/* Actions */}
                      <th style={{ minWidth: "40px" }}>Actions</th>
                    </tr>

                    <tr
                      className="weekline-dayli-data"
                      // style={{ backgroundColor: "#b0daff" }}
                    >
                      {agendaHeader[0].isActive && (
                        <td
                          style={{
                            whiteSpace: "noWrap",
                            // backgroundColor: "#e9f6fb",
                          }}
                          rowSpan={2}
                        >
                          {d.date}
                          {/* 12-05/2022 */}
                        </td>
                      )}
                      {agendaHeader[1].isActive && (
                        <td
                          style={{
                            whiteSpace: "noWrap",
                            // backgroundColor: "#e9f6fb",
                          }}
                          rowSpan={2}
                        >
                          {d.semCivil}
                        </td>
                      )}
                      <td rowSpan={2} colSpan={1}>
                        {d.age}
                      </td>
                      {viabiliteHeader[1].isActive && (
                        <td
                          style={{ color: "#2E3840", fontWeight: "bold" }}
                          rowSpan={2}
                        >
                          {d.effectif}
                        </td>
                      )}
                      {viabiliteHeader[2].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.mort_sem?.guide}
                            reel={d.mort_sem?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {viabiliteHeader[3].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.mort_cuml?.guide}
                            reel={d.mort_cuml?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {viabiliteHeader[4].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.poidVif?.guide}
                            reel={d.poidVif?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {viabiliteHeader[5].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.homog?.guide}
                            reel={d.homog?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      <td rowSpan={2} style={{ minWidth: "52px" }}>
                        <HoverPopper data={d.lumiere} fontSize={15} />
                      </td>
                      <td rowSpan={2} style={{ minWidth: "52px" }}>
                        <HoverPopper data={d.flash} fontSize={15} />
                      </td>
                      <td>
                        <MouseOverPopover
                          guide={d.ponte?.guide}
                          reel={d.ponte?.reel}
                          fontSize={15}
                        />
                      </td>

                      <td colSpan={2}>
                        <MouseOverPopover
                          guide={d.noppdCuml?.guide}
                          reel={d.noppdCuml?.reel}
                          fontSize={15}
                        />
                        {/* <MouseOverPopover
                guide={d.noppdCuml?.guide}
                reel={d.noppdCuml?.ecart}
                fontSize={15}
              /> */}
                      </td>

                      <td>
                        <MouseOverPopover
                          guide={d.pmo?.guide}
                          reel={d.pmo?.reel}
                          fontSize={15}
                        />
                      </td>

                      {productionseHeader[3].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.massOeParSemPP?.guide}
                            reel={d.massOeParSemPP?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {productionseHeader[4].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.massOeCumlPPD?.guide}
                            reel={d.massOeCumlPPD?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {productionseHeader[5].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.icCuml?.guide}
                            reel={d.icCuml?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {productionseHeader[6].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.altCumlParOeufPD?.guide}
                            reel={d.altCumlParOeufPD?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {consommationeHeader[0].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.altCumlPD?.guide}
                            reel={d.altCumlPD?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {consommationeHeader[1].isActive && (
                        <td>
                          <MouseOverPopover
                            guide={d.aps?.guide}
                            reel={d.aps?.reel}
                            fontSize={15}
                          />
                        </td>
                      )}
                      {consommationeHeader[2].isActive && (
                        <td rowSpan={2}>{d.eau?.reel}</td>
                      )}
                      {consommationeHeader[3].isActive && (
                        <td rowSpan={2}>{d.ratio?.reel}</td>
                      )}
                      {consommationeHeader[4].isActive && (
                        <td rowSpan={2}>{d?.formule_ep}</td>
                      )}
                      {observationHeader[0].isActive && (
                        <td rowSpan={2}>
                          <Rating
                            name="read-only"
                            value={parseInt(d?.shell_qty)}
                            readOnly
                          />
                        </td>
                      )}
                      {observationHeader[1].isActive && (
                        <td rowSpan={2}>{d?.fientes}</td>
                      )}
                      {observationHeader[2].isActive && (
                        <td
                          style={{ cursor: "pointer" }}
                          rowSpan={2}
                          className="coloration-o"
                        >
                          {/* <HoverPopper  /> */}
                          <ImgHoverPropper data={d?.coloration_o} />
                        </td>
                      )}
                      {observationHeader[3].isActive && (
                        <td
                          rowSpan={2}
                          className="observations"
                          style={{ cursor: "pointer" }}
                        >
                          {/* {d.observations.slice(0, 30).concat("...")} */}
                          <PopperItem observation={d?.observ} />
                        </td>
                      )}
                      <td rowSpan={2} className="actions">
                        <ModificationModal
                          open={open}
                          setOpen={setOpen}
                          data={d}
                        />
                        <span
                          style={{
                            color: "#FF6000",
                          }}
                          title="Edit"
                          onClick={handleOpen}
                        >
                          <BiEdit />
                        </span>
                        {d.deletable && (
                          <span
                            style={{
                              color: "#D21312",
                            }}
                            title="Delete"
                            onClick={() => deleteItem(i)}
                          >
                            <BiTrash />
                          </span>
                        )}

                        <span
                          style={{
                            color: "#5D9C59",
                          }}
                          title="Download"
                        >
                          <BiDownload />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      {viabiliteHeader[2].isActive && (
                        <td className={`ecart-${d.mort_sem?.color}`}>
                          <MouseOverPopover
                            guide={d.mort_sem?.guide}
                            reel={d.mort_sem?.ecart}
                            fontSize={12}
                          />
                        </td>
                      )}

                      {viabiliteHeader[3].isActive && (
                        <td className={`ecart-${d.mort_cuml?.color}`}>
                          <MouseOverPopover
                            guide={d.mort_cuml?.guide}
                            reel={d.mort_cuml?.ecart}
                            fontSize={12}
                          />
                        </td>
                      )}

                      {viabiliteHeader[4].isActive && (
                        <td className={`ecart-${d.poidVif?.color}`}>
                          <MouseOverPopover
                            guide={d.poidVif?.guide}
                            reel={d.poidVif?.ecart}
                            fontSize={12}
                          />
                        </td>
                      )}
                      {viabiliteHeader[5].isActive && (
                        <td className={`ecart-${d.homog?.color}`}>
                          <MouseOverPopover
                            guide={d.homog?.guide}
                            reel={d.homog?.ecart}
                            fontSize={12}
                          />
                        </td>
                      )}
                      <td className={`ecart-${d.ponte?.color}`}>
                        <MouseOverPopover
                          guide={d.ponte?.guide}
                          reel={d.ponte?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.noppdCuml?.color}`} colSpan={2}>
                        <MouseOverPopover
                          guide={d.noppdCuml?.guide}
                          reel={d.noppdCuml?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.pmo?.color}`}>
                        <MouseOverPopover
                          guide={d.pmo?.guide}
                          reel={d.pmo?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.massOeParSemPP?.color}`}>
                        <MouseOverPopover
                          guide={d.massOeParSemPP?.guide}
                          reel={d.massOeParSemPP?.ecart}
                          fontSize={12}
                        />
                      </td>

                      <td className={`ecart-${d.massOeCumlPPD?.color}`}>
                        <MouseOverPopover
                          guide={d.massOeCumlPPD?.guide}
                          reel={d.massOeCumlPPD?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.icCuml?.color}`}>
                        <MouseOverPopover
                          guide={d.icCuml?.guide}
                          reel={d.icCuml?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.altCumlParOeufPD?.color}`}>
                        <MouseOverPopover
                          guide={d.altCumlParOeufPD?.guide}
                          reel={d.altCumlParOeufPD?.ecart}
                          fontSize={12}
                        />
                      </td>
                      <td className={`ecart-${d.altCumlPD?.color}`}>
                        <MouseOverPopover
                          guide={d.altCumlPD?.guide}
                          reel={d.altCumlPD?.ecart}
                          fontSize={12}
                        />
                      </td>

                      <td className={`ecart-${d.aps?.color}`}>
                        <MouseOverPopover
                          guide={d.aps?.guide}
                          reel={d.aps?.ecart}
                          fontSize={12}
                        />
                      </td>
                    </tr>
                  </>
                )
              )}
            </>
          ))}
      </tbody>
    </>
  );
}

export default DayDataTable;
