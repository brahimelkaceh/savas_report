import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import WeeklyTableHeader from "./WeeklyTableHeader";
import FixedHeader from "./FixedHeader";
import DailyData from "./DailyData";
import MouseOverPopover from "../../../components/popper/MouseOverPopover";
import HoverPopper from "../../../components/popper/HoverPopper";
import DeleteReport from "../models/DeleteReport";
import EditRepport from "../models/EditRepport";
import DownloadIcon from "@mui/icons-material/Download";
import UseFetchData from "../../../hooks/UseFetchData";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableDetailModal from "../models/TableDetailModal";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Loader from "../../../components/loader/Loader";
let base_url = "https://farmdriver.savas.ma/api/";

function DataTable() {
  const lotTableId = useSelector((state) => state.toggleLeftBar.lotTableId);

  const tableApiUrl = useMemo(
    () => `${base_url}get-table-data/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const [age, setAge] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openTableDetailModal, setOpenTableDetailModal] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [elementVisibility, setElementVisibility] = useState({});

  const { data: tableData, loading } = UseFetchData(
    tableApiUrl,
    "GET",
    lotTableId
  );

  const toggleVisibility = (elementId) => {
    setElementVisibility((prevState) => ({
      ...prevState,
      [elementId]: !prevState[elementId],
    }));
  };

  //! Extract the last element from each sub-array in 'data'
  let weeklyData;
  if (tableData?.length > 0) {
    weeklyData = tableData?.map((d) => d[d.length - 1]);
    // console.log(weeklyData);
  }

  // //! Filter 'weeklyData' array to keep objects with at least one non-empty value
  const newWeeklyData = weeklyData?.filter((obj) =>
    //   //! Check if any value in the object is not an empty string
    Object.values(obj).some((value) => value !== "")
  );

  const handleWeekPdfClick = async (id, age) => {
    console.log(id, age);

    setPdfLoading(true);
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
      const response = await fetch(
        `${base_url}pdf-week/?lot_id=${id}&age=${age}`,
        {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();

      // Create a temporary URL for the received blob
      const url = window.URL.createObjectURL(blob);

      // Create a hidden anchor element for downloading
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "week_report.pdf"; // Change the file name if needed

      // Append the anchor element to the DOM
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);

      // Revoke the object URL to free up resources
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    } finally {
      setIsLoading(false); // Set loading to false when the fetch is complete
    }
  };

  return (
    <div className="modification-table-container">
      {openDeleteModal && (
        <DeleteReport
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
      {openEditModal && (
        <EditRepport
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
        />
      )}
      {openTableDetailModal && (
        <TableDetailModal
          open={openTableDetailModal}
          setOpen={setOpenTableDetailModal}
          age={age}
          lotId={lotTableId}
        />
      )}

      {loading && <Loader />}
      {pdfLoading && <span className="loading-text">Loading...</span>}

      <table>
        <thead className="sticky-header">
          <FixedHeader elementVisibility={elementVisibility} />
        </thead>

        {newWeeklyData &&
          newWeeklyData.map((d, i) => {
            return (
              <tbody key={i} className="">
                {/* {elementVisibility[i] && (
                  <DailyTableHeader dailyData={dailyData} i={i} />
                )} */}

                {elementVisibility[i] && (
                  <DailyData
                    dailyData={tableData?.map((d) => d.slice(0, -1))}
                    i={i}
                    setOpenDeleteModal={setOpenDeleteModal}
                    setOpenEditModal={setOpenEditModal}
                  />
                )}
                <WeeklyTableHeader i={i} toggleVisibility={toggleVisibility} />

                <tr
                  className={
                    elementVisibility[i]
                      ? "weekly-body-tr active-tr"
                      : "weekly-body-tr"
                  }
                >
                  <td rowSpan={2} className="border-right">
                    <div className="actions">
                      <button className="download">
                        <DownloadIcon
                          onClick={() => {
                            // console.log(newWeeklyData[i]?.calendrier?.age);
                            console.log();
                            handleWeekPdfClick(
                              lotTableId,
                              newWeeklyData[i]?.calendrier?.age
                            );
                          }}
                        />
                      </button>
                      <button
                        className="download"
                        style={{ backgroundColor: "#194058", color: "#FFFFFF" }}
                      >
                        <TableRowsIcon
                          onClick={() => {
                            setOpenTableDetailModal(true);
                            setAge(newWeeklyData[i]?.calendrier?.age);
                          }}
                        />
                      </button>
                      <button
                        className="show-action"
                        onClick={() => {
                          toggleVisibility(i);
                        }}
                      >
                        {elementVisibility[i] ? (
                          <KeyboardArrowUpIcon fontSize="small" />
                        ) : (
                          <KeyboardArrowDownIcon fontSize="small" />
                        )}
                      </button>
                    </div>
                  </td>
                  <td rowSpan={2}>{newWeeklyData[i]?.calendrier?.semCivil}</td>
                  <td rowSpan={2}>{newWeeklyData[i]?.calendrier?.date}</td>
                  <td className="border-right" rowSpan={2}>
                    {newWeeklyData[i]?.calendrier?.age}
                  </td>
                  {/* Ambiance */}
                  <td rowSpan={2}>
                    <HoverPopper
                      data={
                        newWeeklyData[i]?.ambiance.lumiere
                          ? newWeeklyData[i]?.ambiance.lumiere
                          : "--"
                      }
                      fontSize={15}
                    />
                  </td>
                  <td rowSpan={2}>
                    <HoverPopper
                      data={newWeeklyData[i]?.ambiance.flash}
                      fontSize={15}
                    />
                  </td>
                  <td className="border-right" rowSpan={2}>
                    {newWeeklyData[i]?.ambiance?.intensite}
                  </td>
                  {/* Viabilité */}
                  <td rowSpan={2}>{newWeeklyData[i]?.viabilite?.effectif}</td>
                  <td>
                    {newWeeklyData[i]?.viabilite?.homog?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.homog?.guide}
                      reel={newWeeklyData[i]?.viabilite?.homog?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.viabilite?.poid_vif?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.poid_vif?.guide}
                      reel={newWeeklyData[i]?.viabilite?.poid_vif?.reel}
                      fontSize={15}
                    /> */}
                  </td>

                  <td rowSpan={2}>{newWeeklyData[i]?.viabilite?.viabilite}%</td>
                  <td>
                    {newWeeklyData[i]?.viabilite?.cent_mort_sem.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.cent_mort_sem?.guide}
                      reel={newWeeklyData[i]?.viabilite?.cent_mort_sem.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td className="border-right">
                    {newWeeklyData[i]?.viabilite?.cent_mort_cuml?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.cent_mort_cuml?.guide}
                      reel={newWeeklyData[i]?.viabilite?.cent_mort_cuml?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  {/* Consommation */}
                  <td rowSpan={2}>
                    {newWeeklyData[i]?.consommation?.eau_dist}
                  </td>
                  <td rowSpan={2}>
                    {newWeeklyData[i]?.consommation?.alt_dist}
                  </td>
                  <td rowSpan={2}>{newWeeklyData[i]?.consommation?.eps}</td>
                  <td>
                    {newWeeklyData[i]?.consommation?.aps?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.aps?.guide}
                      reel={newWeeklyData[i]?.consommation?.aps?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.consommation?.alt_cuml?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.alt_cuml?.guide}
                      reel={newWeeklyData[i]?.consommation?.alt_cuml?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.consommation?.ratio?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.ratio?.guide}
                      reel={newWeeklyData[i]?.consommation?.ratio?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td rowSpan={2} className="border-right">
                    {newWeeklyData[i]?.consommation?.formule_ep
                      ? newWeeklyData[i]?.consommation?.formule_ep
                      : "--"}
                  </td>
                  {/* PRODUCTION */}
                  <td rowSpan={2}>{newWeeklyData[i]?.production?.ponte_nbr}</td>
                  <td>
                    {newWeeklyData[i]?.production?.ponte_cent?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.ponte_cent?.guide}
                      reel={newWeeklyData[i]?.production?.ponte_cent?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.production?.pmo?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.pmo?.guide}
                      reel={newWeeklyData[i]?.production?.pmo?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.production?.noppd?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.noppd?.guide}
                      reel={newWeeklyData[i]?.production?.noppd?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td className="border-right">
                    {newWeeklyData[i]?.production?.noppp?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.noppp?.guide}
                      reel={newWeeklyData[i]?.production?.noppp?.reel}
                      fontSize={15}
                    /> */}
                  </td>

                  {/* Mass OEUF */}

                  <td>
                    {newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.guide}
                      reel={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td>
                    {newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.guide}
                      reel={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  {/* Aliment / Oeuf */}
                  <td>
                    {newWeeklyData[i]?.indice_conver?.alt_oeuf?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.indice_conver?.alt_oeuf?.guide}
                      reel={newWeeklyData[i]?.indice_conver?.alt_oeuf?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                  <td className="border-right">
                    {newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.reel}
                    {/* <MouseOverPopover
                      guide={
                        newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.guide
                      }
                      reel={
                        newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.reel
                      }
                      fontSize={15}
                    /> */}
                  </td>
                  <td className="border-right">
                    {newWeeklyData[i]?.indice_conver?.ic_cuml?.reel}
                    {/* <MouseOverPopover
                      guide={newWeeklyData[i]?.indice_conver?.ic_cuml?.guide}
                      reel={newWeeklyData[i]?.indice_conver?.ic_cuml?.reel}
                      fontSize={15}
                    /> */}
                  </td>
                </tr>
                <tr className="weekly-body-tr">
                  {/* Viabilité */}
                  <td className={newWeeklyData[i]?.viabilite?.homog?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.homog?.guide}
                      reel={newWeeklyData[i]?.viabilite?.homog?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td className={newWeeklyData[i]?.viabilite?.poid_vif?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.poid_vif?.guide}
                      reel={newWeeklyData[i]?.viabilite?.poid_vif?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={
                      newWeeklyData[i]?.viabilite?.cent_mort_sem?.color
                    }
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.cent_mort_sem?.guide}
                      reel={newWeeklyData[i]?.viabilite?.cent_mort_sem?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={
                      newWeeklyData[i]?.viabilite?.cent_mort_sem?.color +
                      " border-right"
                    }
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.viabilite?.cent_mort_sem?.guide}
                      reel={newWeeklyData[i]?.viabilite?.cent_mort_sem?.ecart}
                      fontSize={15}
                    />
                  </td>
                  {/* Consommation */}
                  <td className={newWeeklyData[i]?.consommation?.aps?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.aps?.guide}
                      reel={newWeeklyData[i]?.consommation?.aps?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={newWeeklyData[i]?.consommation?.alt_cuml?.color}
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.alt_cuml?.guide}
                      reel={newWeeklyData[i]?.consommation?.alt_cuml?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td className={newWeeklyData[i]?.consommation?.ratio?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.consommation?.ratio?.guide}
                      reel={newWeeklyData[i]?.consommation?.ratio?.ecart}
                      fontSize={15}
                    />
                  </td>
                  {/* PRODUCTION */}
                  <td
                    className={newWeeklyData[i]?.production?.ponte_cent?.color}
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.ponte_cent?.guide}
                      reel={newWeeklyData[i]?.production?.ponte_cent?.ecart}
                      fontSize={15}
                    />
                  </td>{" "}
                  <td className={newWeeklyData[i]?.mass_oeuf?.pmo?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.pmo?.guide}
                      reel={newWeeklyData[i]?.production?.pmo?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td className={newWeeklyData[i]?.production?.noppp?.color}>
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.noppp?.guide}
                      reel={newWeeklyData[i]?.production?.noppp?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={
                      newWeeklyData[i]?.production?.noppd?.color +
                      " border-right"
                    }
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.production?.noppd?.guide}
                      reel={newWeeklyData[i]?.production?.noppd?.ecart}
                      fontSize={15}
                    />
                  </td>
                  {/* Mass OEUF */}
                  <td
                    className={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.color}
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.guide}
                      reel={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pp?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={
                      newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.color +
                      " border-right"
                    }
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.guide}
                      reel={newWeeklyData[i]?.mass_oeuf?.mass_oeuf_pd?.ecart}
                      fontSize={15}
                    />
                  </td>
                  {/* Aliment / Oeuf */}
                  <td
                    className={newWeeklyData[i]?.indice_conver?.alt_oeuf?.color}
                  >
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.indice_conver?.alt_oeuf?.guide}
                      reel={newWeeklyData[i]?.indice_conver?.alt_oeuf?.ecart}
                      fontSize={15}
                    />
                  </td>
                  <td
                    className={
                      newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.color
                    }
                  >
                    <MouseOverPopover
                      guide={
                        newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.guide
                      }
                      reel={
                        newWeeklyData[i]?.indice_conver?.alt_oeuf_cuml?.ecart
                      }
                      fontSize={15}
                    />
                  </td>
                  <td className="border-right">
                    <MouseOverPopover
                      guide={newWeeklyData[i]?.indice_conver?.ic_cuml?.guide}
                      reel={newWeeklyData[i]?.indice_conver?.ic_cuml?.ecart}
                      fontSize={15}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default DataTable;
