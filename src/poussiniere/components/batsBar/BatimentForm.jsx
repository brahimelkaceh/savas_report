import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Viabilite from "../../../components/report-form/Viabilite";
import Consommation from "../../../components/report-form/Consommation";
import Ambiance from "../../../components/report-form/Ambiance";
import ReportModal from "../modals/ReportModal";
import SuccessAlert from "../../../components/alerts/SuccessAlert";
import { getBatimentName, getRenderData } from "../../../slices/SiteData";
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
} from "@mui/material";
import { useData } from "../../context/DataProvider";
import Constats from "../../../components/report-form/Constats";
let base_url = "https://farmdriver.savas.ma/api/";
const BatimentForm = ({ siteId, batimentId, setId, nextSend }) => {
  console.log("closed alt", nextSend?.closeAlt);
  const dispatch = useDispatch();
  const { data } = useData();
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      batiment: batimentId,
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
      observation: "",
    },
    // validationSchema: validationSchema, // pass the Yup schema here
    onSubmit: (values) => {
      values.batiment = batimentId;
      console.log("poussiniere", values);
      CreateReports(formik.values);
    },
  });

  const CreateReports = async (data) => {
    try {
      setLoading(true);
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(`${base_url}add-pouss-report/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        dispatch(getRenderData(new Date().toISOString()));
        formik.handleReset();
        setShowAlert(true);
        setLoading(false);

        setError(false);
        // setId("");
      } else {
        setError(
          "Veuillez réessayer, une erreur est survenue lors de la création le rapport."
        );
        console.log("something went wrong");
      }
      // You can add additional logic here based on the response if needed
    } catch (error) {
      console.error(error);
      setError(
        "Veuillez réessayer, une erreur est survenue lors de la création le rapport."
      ); // Handle the error as needed, you may want to show an error message to the user
    } finally {
      setTimeout(() => {
        setShowAlert(false);
      }, 35000);
      setLoading(false);
      // Code that will run whether there was an error or not
    }
  };

  useEffect(() => {
    formik.initialValues;
    // ! Get batiment Id
    formik.setValues({
      ...formik.values,
      formule: data?.last_rep?.formule || "",
      lightOn: data?.last_rep?.lumiere_alum || "",
      lightOff: data?.last_rep?.lumiere_extin || "",
      lightDuration: data?.last_rep?.lumiere_durr || "",
      flashOn: data?.last_rep?.flash_alum || "",
      flashOff: data?.last_rep?.flash_extin || "",
      flashDuration: data?.last_rep?.flash_durr || "",
      intensIsLux: data?.last_rep?.intensIsLux || false,
      intensite: data?.last_rep?.intensite || "",
    });
    dispatch(getBatimentName(data?.last_rep?.batiment));
  }, [data]);
  useEffect(() => {
    formik.handleReset();
  }, [siteId]);
  return (
    <div className="batiment-form">
      {open && (
        <ReportModal
          open={open}
          setOpen={setOpen}
          onSubmit={formik.handleSubmit}
          data={formik.values}
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-box"></div>
        <Grid container spacing={1}>
          <Grid item sm={12}>
            <Viabilite formik={formik} />
          </Grid>
          {!nextSend?.closeAlt && (
            <Grid item sm={12}>
              <Consommation formik={formik} />
            </Grid>
          )}
          <Grid item sm={12}>
            <Ambiance formik={formik} last_rep={data?.last_rep} />
          </Grid>
          <Grid item sm={12}>
            <Constats formik={formik} last_rep={data?.last_rep} />
          </Grid>
        </Grid>{" "}
        <Button
          sx={{
            mt: 1,
          }}
          type="submit"
          disabled={batimentId ? false : true}
          onClick={(e) => {
            setOpen(true);
          }}
          variant="contained"
          color="success"
        >
          {loading ? "En cours..." : "Enregistrer"}
        </Button>
      </form>
      {showAlert && (
        <Alert
          sx={{
            my: 1,
          }}
          variant="filled"
          severity="success"
        >
          Les données ont été enregistrées avec succès !
        </Alert>
      )}
      {error && (
        <Alert
          severity="error"
          variant="filled"
          onClose={() => setError(false)}
          sx={{
            my: 1,
          }}
        >
          {error}
        </Alert>
      )}
      {loading && <LinearProgress size={20} />}
    </div>
  );
};

export default BatimentForm;
