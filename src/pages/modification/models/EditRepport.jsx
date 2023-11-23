import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import ConfirmModel from "./ConfirmModel";

import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";

import "./style.css";
// import Viabilite from "../components/Viabilite";
import Viabilite from "../../reports/Components/Viabilite";
import Production from "../../reports/Components/Production";
import Consommation from "../../reports/Components/Consommation";
import Constats from "../../reports/Components/Constats";
import Ambiance from "../../reports/Components/Ambiance";

let base_url = "https://farmdriver.savas.ma/api/";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "100%",
  // height: "0%",
};

export default function EditRepport({ openEditModal, setOpenEditModal }) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const id = useSelector((state) => state.editReport.id);

  // ! OBSERVATIONS HANDLING ///////////////////////////
  const handleClose = () => setOpenEditModal(false);
  // ! Validation Edit Form

  // !Fetching Data

  const formik = useFormik({
    initialValues: {
      id: "",
      mort: "",
      sjt_elm: "",
      poidVif: "",
      homog: "",
      prod_normal: "",
      prod_dj: "",
      prod_blanc: "",
      prod_casse: "",
      prod_feles: "",
      prod_elimne: "",
      alimentDist: "",
      eauDist: "",
      pmo: "",
      formule: "",
      temperatureMin: "",
      temperatureMax: "",
      temperatureMinExt: "",
      temperatureMaxExt: "",
      lightOn: "",
      lightOff: "",
      flashOn: "",
      flashOff: "",
      flashDuration: "",
      lightDuration: "",
      intensite: "",
      intensIsLux: "",
      coloration: "",
      qty_shell: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log("from on submit event");
      // console.log(JSON.stringify(values, null, 2));
      UpdateReports(values);
      formik.handleReset();
      // CreateReports(values);
    },
  });

  const apiUrl = useMemo(() => `${base_url}get-prefilled-data/?id=${id}`, []);

  const { data, loading, error } = UseFetchData(apiUrl);

  const UpdateReports = (data) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}update-report-prod/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response)
      .then((data) => {
        if (data.status === 200) {
          setOpenEditModal(false);
        }
      })
      .catch((error) => console.error(error));

    // .catch((error) => console.log("somthing xwrong"));
  };

  useEffect(() => {
    formik.initialValues;
    // ! Get batiment Id
    formik.setValues({
      ...formik.values,
      id: id,
      mort: data?.mort,
      sjt_elm: data?.sujet_elimines,
      poidVif: data?.poidVif,
      homog: data?.homog,
      prod_normal: data?.prod_normal,
      prod_dj: data?.prod_dj,
      prod_blanc: data?.prod_blanc,
      prod_casse: data?.prod_casse,
      prod_feles: data?.prod_feles,
      prod_elimne: data?.prod_elimne,
      prod_liquide: data?.prod_liquide,
      alimentDist: data?.alimentDist,
      eauDist: data?.eauDist,
      pmo: data?.pmo,
      formule: data?.formule,
      temperatureMin: data?.temperatureMin,
      temperatureMax: data?.temperatureMax,
      temperatureMinExt: data?.temperatureMinExt,
      temperatureMaxExt: data?.temperatureMaxExt,
      lightOn: data?.lightOn,
      lightOff: data?.lightOff,
      flashOn: data?.flashOn,
      flashOff: data?.flashOff,
      flashDuration: data?.flashDuration,
      lightDuration: data?.lightDuration,
      intensite: data?.intensite,
      intensIsLux: data?.intensIsLux,
      coloration: data?.coloration,
      qty_shell: data?.coquille,
    });
  }, [data]);

  return (
    <div>
      {openConfirm && (
        <ConfirmModel
          open={openConfirm}
          setOpen={setOpenConfirm}
          onSubmit={formik.handleSubmit}
          message={"Êtes-vous sûr de vouloir envoyer ces données ?"}
        />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEditModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openEditModal}>
          <Box sx={style} className="edit-modal">
            <div
              className="edit-site slit-in-horizontal"
              // style={{ height: "90%" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="title" style={{ fontSize: "18px" }}>
                  Modifier rapport
                </p>
                <IconButton
                  onClick={handleClose}
                  aria-label="Fermer"
                  color="error"
                  variant="contained"
                >
                  <CloseIcon />
                </IconButton>
              </div>
              {/* <button onClick={handleClose}>close</button> */}
              <form
                action=""
                className=" edit-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-box">
                  <Viabilite formik={formik} open={openEditModal} />
                </div>
                <div className="form-box">
                  <Production formik={formik} open={openEditModal} />
                </div>
                <div className="form-box">
                  <Consommation formik={formik} open={openEditModal} />
                  <Constats formik={formik} open={openEditModal} />
                </div>
                <div className="form-box">
                  <Ambiance formik={formik} open={openEditModal} />
                </div>
              </form>
              <button
                className="edit-btn edit-btn-position"
                onClick={() => {
                  console.log("clikced");
                  setOpenConfirm(true);
                }}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <AiOutlineSend />
                  </div>
                </div>
                <span>Envoyer</span>
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
// update-user-site/
