import React from "react";
import MouseOverPopover from "../../../components/popper/MouseOverPopover";
import ImgHoverPropper from "../../../components/popper/ImgHoverPropper";
import PopperItem from "../../../components/popper/Popper";
import HoverPopper from "../../../components/popper/HoverPopper";
import ModificationModal from "../modification-modal/ModificationModal";
import { BiEdit, BiTrash, BiDownload } from "react-icons/bi";
import { Rating } from "@mui/material";
function WeeklyTable({
  enabledItems,
  enabledViabilite,
  enabledProductions,
  enabledConsommation,
  enabledObservation,
  agendaHeader,
  viabiliteHeader,
  d,
  i,
  data,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  data.map((d) => {
    if (Array.isArray(d)) {
      console.log("daily");
    } else {
      console.log("weekly");
    }
  });
  return (
    <div>weekTable</div>
    // <tbody key={i} className="body-table scale-in-hor-right">
    //   <tr>
    //     {agendaHeader[0].isActive && (
    //       <td
    //         style={{
    //           whiteSpace: "noWrap",
    //           backgroundColor: "#e9f6fb",
    //         }}
    //         rowSpan={3}
    //       >
    //         {d.date}
    //       </td>
    //     )}

    //     {agendaHeader[1].isActive && (
    //       <td
    //         style={{
    //           whiteSpace: "noWrap",
    //           backgroundColor: "#e9f6fb",
    //         }}
    //         rowSpan={3}
    //       >
    //         {d.semCivil}
    //       </td>
    //     )}

    //     {agendaHeader[2].isActive && <td rowSpan={3}>{d.age}</td>}

    //     {/* {viabiliteHeader[0].isActive && d.reformed > 1 && (
    //         <td rowSpan={3}>{d.reformed}100</td>
    //       )} */}
    //     {viabiliteHeader[0].isActive && <td rowSpan={3}>100</td>}

    //     {viabiliteHeader[1].isActive && (
    //       <td style={{ color: "#2E3840", fontWeight: "bold" }} rowSpan={3}>
    //         {d.effectif}
    //       </td>
    //     )}
    //   </tr>
    //   <tr>
    //     {viabiliteHeader[2].isActive && (
    //       <td>
    //         <MouseOverPopover
    //           guide={d.mort_sem?.guide}
    //           reel={d.mort_sem?.reel}
    //           fontSize={15}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[3].isActive && (
    //       <td>
    //         <MouseOverPopover
    //           guide={d.mort_cuml?.guide}
    //           reel={d.mort_cuml?.reel}
    //           fontSize={15}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[4].isActive && (
    //       <td>
    //         <MouseOverPopover
    //           guide={d.poidVif?.guide}
    //           reel={d.poidVif?.reel}
    //           fontSize={15}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[5].isActive && (
    //       <td>
    //         <MouseOverPopover
    //           guide={d.homog?.guide}
    //           reel={d.homog?.reel}
    //           fontSize={15}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[6].isActive && (
    //       <td rowSpan={2} style={{ minWidth: "52px" }}>
    //         <HoverPopper data={d.lumiere} fontSize={15} />
    //       </td>
    //     )}
    //     {viabiliteHeader[7]?.isActive && (
    //       <td rowSpan={2} style={{ minWidth: "52px" }}>
    //         <HoverPopper data={d.flash} fontSize={15} />
    //       </td>
    //     )}

    //     <td>
    //       <MouseOverPopover
    //         guide={d.ponte?.guide}
    //         reel={d.ponte?.reel}
    //         fontSize={15}
    //       />
    //     </td>

    //     <td>
    //       <MouseOverPopover
    //         guide={d.noppdCuml?.guide}
    //         reel={d.noppdCuml?.reel}
    //         fontSize={15}
    //       />
    //     </td>

    //     <td>
    //       <MouseOverPopover
    //         guide={d.pmo?.guide}
    //         reel={d.pmo?.reel}
    //         fontSize={15}
    //       />
    //     </td>
    //     <td>
    //       <MouseOverPopover
    //         guide={d.massOeParSemPP?.guide}
    //         reel={d.massOeParSemPP?.reel}
    //         fontSize={15}
    //       />
    //     </td>
    //     <td>
    //       <MouseOverPopover
    //         guide={d.massOeCumlPPD?.guide}
    //         reel={d.massOeCumlPPD?.reel}
    //         fontSize={15}
    //       />
    //     </td>
    //     <td>
    //       <MouseOverPopover
    //         guide={d.icCuml?.guide}
    //         reel={d.icCuml?.reel}
    //         fontSize={15}
    //       />
    //     </td>
    //     <td>
    //       <MouseOverPopover
    //         guide={d.altCumlParOeufPD?.guide}
    //         reel={d.altCumlParOeufPD?.reel}
    //         fontSize={15}
    //       />
    //     </td>
    //     <td>
    //       <MouseOverPopover
    //         guide={d.altCumlPD?.guide}
    //         reel={d.altCumlPD?.reel}
    //         fontSize={15}
    //       />
    //     </td>

    //     <td>
    //       <MouseOverPopover
    //         guide={d.aps?.guide}
    //         reel={d.aps?.reel}
    //         fontSize={15}
    //       />
    //     </td>

    //     <td rowSpan={2}>{d.eau?.reel}ml</td>
    //     <td rowSpan={2}>{d.ratio?.reel}</td>

    //     <td rowSpan={2}>{d?.formule_ep}</td>

    //     <td rowSpan={2}>
    //       <Rating name="read-only" value={parseInt(d?.shell_qty)} readOnly />
    //     </td>

    //     <td rowSpan={2}>{d?.fientes}</td>
    //     <td style={{ cursor: "pointer" }} rowSpan={2} className="coloration-o">
    //       {/* <HoverPopper  /> */}
    //       <ImgHoverPropper data={d?.coloration_o} />
    //     </td>
    //     <td rowSpan={2} className="observations" style={{ cursor: "pointer" }}>
    //       {/* {d.observations.slice(0, 30).concat("...")} */}
    //       <PopperItem observation={d?.observ} />
    //     </td>
    //     <td rowSpan={2} className="actions">
    //       <ModificationModal open={open} setOpen={setOpen} data={d} />
    //       <span
    //         style={{
    //           color: "#FF6000",
    //         }}
    //         title="Edit"
    //         onClick={handleOpen}
    //       >
    //         <BiEdit />
    //       </span>
    //       {d.deletable && (
    //         <span
    //           style={{
    //             color: "#D21312",
    //           }}
    //           title="Delete"
    //           onClick={() => deleteItem(i)}
    //         >
    //           <BiTrash />
    //         </span>
    //       )}

    //       <span
    //         style={{
    //           color: "#5D9C59",
    //         }}
    //         title="Download"
    //       >
    //         <BiDownload />
    //       </span>
    //     </td>
    //   </tr>
    //   <tr>
    //     {viabiliteHeader[2].isActive && (
    //       <td className={`ecart-${d.mort_sem?.color}`}>
    //         <MouseOverPopover
    //           guide={d.mort_sem?.guide}
    //           reel={d.mort_sem?.ecart}
    //           fontSize={12}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[3].isActive && (
    //       <td className={`ecart-${d.mort_cuml?.color}`}>
    //         <MouseOverPopover
    //           guide={d.mort_cuml?.guide}
    //           reel={d.mort_cuml?.ecart}
    //           fontSize={12}
    //         />
    //       </td>
    //     )}

    //     {viabiliteHeader[4].isActive && (
    //       <td className={`ecart-${d.poidVif?.color}`}>
    //         <MouseOverPopover
    //           guide={d.poidVif?.guide}
    //           reel={d.poidVif?.ecart}
    //           fontSize={12}
    //         />
    //       </td>
    //     )}
    //     {viabiliteHeader[5].isActive && (
    //       <td className={`ecart-${d.homog?.color}`}>
    //         <MouseOverPopover
    //           guide={d.homog?.guide}
    //           reel={d.homog?.ecart}
    //           fontSize={12}
    //         />
    //       </td>
    //       // khasni ndakhl l'age m3a Agenda
    //     )}

    //     <td className={`ecart-${d.ponte?.color}`}>
    //       <MouseOverPopover
    //         guide={d.ponte?.guide}
    //         reel={d.ponte?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //     <td className={`ecart-${d.noppdCuml?.color}`}>
    //       <MouseOverPopover
    //         guide={d.noppdCuml?.guide}
    //         reel={d.noppdCuml?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //     <td className={`ecart-${d.pmo?.color}`}>
    //       <MouseOverPopover
    //         guide={d.pmo?.guide}
    //         reel={d.pmo?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //     <td className={`ecart-${d.massOeParSemPP?.color}`}>
    //       <MouseOverPopover
    //         guide={d.massOeParSemPP?.guide}
    //         reel={d.massOeParSemPP?.ecart}
    //         fontSize={12}
    //       />
    //     </td>

    //     <td className={`ecart-${d.massOeCumlPPD?.color}`}>
    //       <MouseOverPopover
    //         guide={d.massOeCumlPPD?.guide}
    //         reel={d.massOeCumlPPD?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //     <td className={`ecart-${d.icCuml?.color}`}>
    //       <MouseOverPopover
    //         guide={d.icCuml?.guide}
    //         reel={d.icCuml?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //     <td className={`ecart-${d.altCumlParOeufPD?.color}`}>
    //       <MouseOverPopover
    //         guide={d.altCumlParOeufPD?.guide}
    //         reel={d.altCumlParOeufPD?.ecart}
    //         fontSize={12}
    //       />
    //     </td>

    //     <td className={`ecart-${d.altCumlPD?.color}`}>
    //       <MouseOverPopover
    //         guide={d.altCumlPD?.guide}
    //         reel={d.altCumlPD?.ecart}
    //         fontSize={12}
    //       />
    //     </td>

    //     <td className={`ecart-${d.aps?.color}`}>
    //       <MouseOverPopover
    //         guide={d.aps?.guide}
    //         reel={d.aps?.ecart}
    //         fontSize={12}
    //       />
    //     </td>
    //   </tr>
    // </tbody>
  );
}

export default WeeklyTable;
