import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { AiOutlineSend } from "react-icons/ai";
import Loader from "../../../../components/loader/Loader";

import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import Viabilite from "../../../../components/report-form/Viabilite";
import Consommation from "../../../../components/report-form/Consommation";
import Ambiance from "../../../../components/report-form/Ambiance";
import { useMemo } from "react";
import UseFetchData from "../../../../hooks/UseFetchData";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Fragment } from "react";
import ConfirmModal from "../../../../pages/modification/models/ConfirmModel";
import { useState } from "react";
let base_url = "https://farmdriver.savas.ma/api/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "50%",
  // height: "50%",
};
export default function EditModal({ id, open, setOpen }) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleClose = () => setOpen(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      mort: "",
      hensEliminated: "",
      poidVif: "",
      homog: "",
      alimentDist: "",
      eauDist: "",
      formule: "",
      temperatureMin: "",
      temperatureMax: "",
      lightOn: "",
      lightOff: "",
      flashOn: "",
      flashOff: "",
      flashDuration: "",
      lightDuration: "",
      intensite: "",
      intensIsLux: "",
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log("from on submit event");
      // console.log(JSON.stringify(values, null, 2));
      UpdateReports(values, values.id);
      console.log(values);
      handleClose();

      // CreateReports(values);
    },
  });
  const apiUrl = useMemo(
    () => `${base_url}get-pouss-prefilled-data/?id=${id}`,
    []
  );

  const { data, loading, error } = UseFetchData(apiUrl);
  const UpdateReports = async (data, id) => {
    try {
      // Access token retrieval
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      // Fetch request with correct URL formatting
      const response = await fetch(`${base_url}update-pouss-report/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Handle response and potential errors
      if (response.ok) {
        const updatedData = await response.json();
        // Handle successful update logic here, e.g., closing modal
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating report:", error);
      // Handle error appropriately, e.g., display user-friendly message
    }
  };

  useEffect(() => {
    formik.initialValues;
    // ! Get batiment Id
    formik.setValues({
      ...formik.values,
      id: id,
      mort: data?.mort,
      hensEliminated: data?.sujet_elimines,
      poidVif: data?.poidVif,
      homog: data?.homog,
      alimentDist: data?.alimentDist,
      eauDist: data?.eauDist,
      formule: data?.formule,
      temperatureMin: data?.temperatureMin,
      temperatureMax: data?.temperatureMax,
      lightOn: data?.lightOn,
      lightOff: data?.lightOff,
      flashOn: data?.flashOn,
      flashOff: data?.flashOff,
      flashDuration: data?.flashDuration,
      lightDuration: data?.lightDuration,
      intensite: data?.intensite,
      intensIsLux: data?.intensIsLux,
    });
  }, [data]);
  // console.log(formik.values);
  return (
    <Fragment>
      {openConfirm && (
        <ConfirmModal
          open={openConfirm}
          setOpen={setOpenConfirm}
          onSubmit={formik.handleSubmit}
          message={"Êtes-vous sûr de vouloir envoyer ces données ?"}
        />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
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
              {loading && <Loader />}

              <form
                style={{
                  overflow: "hidden",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Grid container spacing={1} mb={1}>
                  <Grid item sm={12}>
                    <Viabilite formik={formik} />
                  </Grid>

                  <Grid item sm={12}>
                    <Consommation formik={formik} />
                  </Grid>

                  <Grid item sm={12}>
                    <Ambiance formik={formik} />
                  </Grid>
                </Grid>{" "}
              </form>
              <Button
                color="success"
                variant="contained"
                onClick={() => {
                  console.log("clikced");
                  setOpenConfirm(true);
                }}
              >
                Envoyer
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
}
