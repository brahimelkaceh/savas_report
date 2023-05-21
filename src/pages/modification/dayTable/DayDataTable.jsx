import React, { useEffect, useState } from "react";
import MouseOverPopover from "../../../components/popper/MouseOverPopover";
import HoverPopper from "../../../components/popper/HoverPopper";
import ImgHoverPropper from "../../../components/popper/ImgHoverPropper";
import PopperItem from "../../../components/popper/Popper";
import ModificationModal from "../modification-modal/ModificationModal";

import Rating from "@mui/material/Rating";
import { BiEdit, BiTrash, BiDownload } from "react-icons/bi";

function DayDataTable({
  dailyData,
  agendaHeader,
  viabiliteHeader,
  enabledItems,
  enabledViabilite,
  enabledProductions,
  enabledConsommation,
  enabledObservation,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [dayData, setDayData] = useState(dailyData);
  const [weeklyData, setWeeklyData] = useState();

  let lineToRemove = dayData[dayData.length - 1];
  const newDailyData = dayData?.filter((line) => line !== lineToRemove);
  // console.log(lineToRemove);
  console.log(newDailyData);
  // console.log(weeklyData?.date);
  useEffect(() => {
    setDayData(newDailyData);
    setWeeklyData(lineToRemove);
  }, []);

  return (
    <tbody>
      <tr className="table-header-tr">
        {/* Agenda */}
        <th style={{ minWidth: "40px" }}>Date</th>
        <th style={{ minWidth: "40px" }}>Sem civil</th>
        <th style={{ minWidth: "40px" }}>
          Age <br />
          [jour]
        </th>
        <th style={{ minWidth: "40px" }}>Jour / semaine</th>
        {/* Viabilité */}
        <th style={{ minWidth: "40px" }}>Effectif Présent</th>
        <th style={{ minWidth: "40px" }}>Mortailité</th>
        <th style={{ minWidth: "40px" }}>∑ mortalité</th>
        <th style={{ minWidth: "40px" }}>P.V (g)</th>
        <th style={{ minWidth: "40px" }}>Homog (%)</th>
        <th style={{ minWidth: "40px" }}>Lumiére</th>
        <th style={{ minWidth: "40px" }}>Flash</th>
        {/* Production */}
        <th style={{ minWidth: "40px" }}>Ponte(%)[cent_ponte]</th>
        <th style={{ minWidth: "40px" }}>Productions</th>
        <th style={{ minWidth: "40px" }}>∑ Productions</th>
        <th style={{ minWidth: "40px" }}>PMO (g)</th>
        {/* Consomations */}
        <th style={{ minWidth: "40px" }}>Aliment/jour</th>
        <th style={{ minWidth: "40px" }}>∑ Aliment</th>
        <th style={{ minWidth: "40px" }}>APS/jour (g)</th>
        <th style={{ minWidth: "40px" }}>EPS/jour</th>
        <th style={{ minWidth: "40px" }}>Eau (ml)</th>
        <th style={{ minWidth: "40px" }}>∑ Eau (ml)</th>
        <th style={{ minWidth: "40px" }}>Formule En place</th>
        {/* Actions */}

        <th style={{ minWidth: "40px" }}>Actions</th>
      </tr>
      {newDailyData &&
        newDailyData.map((data) => {
          return (
            <tr key={data.date}>
              <td>{data.date}</td>
              <td>{data.semCivil}</td>
              <td>{data.age}</td>
              <td>{data.effectif_pres}</td>
            </tr>
          );
        })}
      <tr>
        {agendaHeader[0].isActive && (
          <td
            style={{
              whiteSpace: "noWrap",
              backgroundColor: "#e9f6fb",
            }}
            rowSpan={3}
          >
            {weeklyData?.date}
          </td>
        )}
        {agendaHeader[1].isActive && (
          <td
            style={{
              whiteSpace: "noWrap",
              backgroundColor: "#e9f6fb",
            }}
            rowSpan={3}
          >
            {weeklyData?.semCivil}
          </td>
        )}

        {agendaHeader[2].isActive && <td rowSpan={3}>{weeklyData?.age}</td>}

        {/* {viabiliteHeader[0].isActive && weeklyData?.reformed > 1 && (
                          <td rowSpan={3}>{weeklyData?.reformed}100</td>
                        )} */}
        {viabiliteHeader[0].isActive && <td rowSpan={3}>100</td>}
        {viabiliteHeader[1].isActive && (
          <td style={{ color: "#2E3840", fontWeight: "bold" }} rowSpan={3}>
            {weeklyData?.effectif}
          </td>
        )}
      </tr>

      <tr>
        {viabiliteHeader[2].isActive && (
          <td>
            <MouseOverPopover
              guide={weeklyData?.mort_sem?.guide}
              reel={weeklyData?.mort_sem?.reel}
              fontSize={15}
            />
          </td>
        )}

        {viabiliteHeader[3].isActive && (
          <td>
            <MouseOverPopover
              guide={weeklyData?.mort_cuml?.guide}
              reel={weeklyData?.mort_cuml?.reel}
              fontSize={15}
            />
          </td>
        )}

        {viabiliteHeader[4].isActive && (
          <td>
            <MouseOverPopover
              guide={weeklyData?.poidVif?.guide}
              reel={weeklyData?.poidVif?.reel}
              fontSize={15}
            />
          </td>
        )}

        {viabiliteHeader[5].isActive && (
          <td>
            <MouseOverPopover
              guide={weeklyData?.homog?.guide}
              reel={weeklyData?.homog?.reel}
              fontSize={15}
            />
          </td>
        )}

        {viabiliteHeader[6].isActive && (
          <td rowSpan={2} style={{ minWidth: "52px" }}>
            <HoverPopper data={weeklyData?.lumiere} fontSize={15} />
          </td>
        )}
        {viabiliteHeader[7]?.isActive && (
          <td rowSpan={2} style={{ minWidth: "52px" }}>
            <HoverPopper data={weeklyData?.flash} fontSize={15} />
          </td>
        )}

        <td>
          <MouseOverPopover
            guide={weeklyData?.ponte?.guide}
            reel={weeklyData?.ponte?.reel}
            fontSize={15}
          />
        </td>

        <td>
          <MouseOverPopover
            guide={weeklyData?.noppdCuml?.guide}
            reel={weeklyData?.noppdCuml?.reel}
            fontSize={15}
          />
        </td>

        <td>
          <MouseOverPopover
            guide={weeklyData?.pmo?.guide}
            reel={weeklyData?.pmo?.reel}
            fontSize={15}
          />
        </td>
        <td>
          <MouseOverPopover
            guide={weeklyData?.massOeParSemPP?.guide}
            reel={weeklyData?.massOeParSemPP?.reel}
            fontSize={15}
          />
        </td>
        <td>
          <MouseOverPopover
            guide={weeklyData?.massOeCumlPPD?.guide}
            reel={weeklyData?.massOeCumlPPD?.reel}
            fontSize={15}
          />
        </td>
        <td>
          <MouseOverPopover
            guide={weeklyData?.icCuml?.guide}
            reel={weeklyData?.icCuml?.reel}
            fontSize={15}
          />
        </td>
        <td>
          <MouseOverPopover
            guide={weeklyData?.altCumlParOeufPD?.guide}
            reel={weeklyData?.altCumlParOeufPD?.reel}
            fontSize={15}
          />
        </td>
        <td>
          <MouseOverPopover
            guide={weeklyData?.altCumlPD?.guide}
            reel={weeklyData?.altCumlPD?.reel}
            fontSize={15}
          />
        </td>

        <td>
          <MouseOverPopover
            guide={weeklyData?.aps?.guide}
            reel={weeklyData?.aps?.reel}
            fontSize={15}
          />
        </td>

        <td rowSpan={2}>{weeklyData?.eau?.reel}ml</td>
        <td rowSpan={2}>{weeklyData?.ratio?.reel}</td>

        <td rowSpan={2}>{weeklyData?.formule_ep}</td>

        <td rowSpan={2}>
          <Rating
            name="read-only"
            value={parseInt(weeklyData?.shell_qty)}
            readOnly
          />
        </td>

        <td rowSpan={2}>{weeklyData?.fientes}</td>
        <td style={{ cursor: "pointer" }} rowSpan={2} className="coloration-o">
          {/* <HoverPopper  /> */}
          <ImgHoverPropper data={weeklyData?.coloration_o} />
        </td>
        <td rowSpan={2} className="observations" style={{ cursor: "pointer" }}>
          {/* {weeklyData?.observations.slice(0, 30).concat("...")} */}
          <PopperItem observation={weeklyData?.observ} />
        </td>
        <td rowSpan={2} className="actions">
          {/* <ModificationModal open={open} setOpen={setOpen} data={weeklyData?} /> */}
          <span
            style={{
              color: "#FF6000",
            }}
            title="Edit"
            onClick={handleOpen}
          >
            <BiEdit />
          </span>
          {weeklyData?.deletable && (
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
    </tbody>
  );
}

export default DayDataTable;
