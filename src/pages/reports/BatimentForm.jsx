import Viabilite from "./Components/Viabilite";
import Production from "./Components/Production";
import Consommation from "./Components/Consommation";
import Ambiance from "./Components/Ambiance";
import Constats from "./Components/Constats";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import validationSchema from "./ValidationSchema";
import Observation from "./Components/Observation";
import { useData } from "./context/DataProvider";
import ReportModal from "./Components/modals/ReportModal";
import SuccessAlert from "./Components/alerts/SuccessAlert";
import { getRenderData, getBatimentName } from "../../slices/SiteData";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

let base_url = "https://farmdriver.savas.ma/api/";
const BatimentForm = ({ siteId }) => {
  const dispatch = useDispatch();
  const { data } = useData();
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validationSchema = Yup.object().shape({
    pmo: Yup.number()
      .required("PMO est requis*.")
      .positive("PMO doit être un nombre positif*."),
    // Add validation for other fields here as needed
  });
  const formik = useFormik({
    initialValues: {
      batiment: "",
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
      prod_liquide: "",
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
    // validationSchema: validationSchema, // pass the Yup schema here
    onSubmit: (values) => {
      CreateReports(formik.values);
      dispatch(getRenderData(new Date().toISOString()));
      formik.handleReset();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 15000);
    },
  });

  const CreateReports = (data) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}add-report-prod/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    formik.initialValues;
    // ! Get batiment Id
    formik.values.batiment = data?.lotId;
    formik.setValues({
      ...formik.values,
      batiment: data?.lotId,
      formule: data?.last_rep?.formule || "",
      lightOn: data?.last_rep?.lumiere_alum || "",
      lightOff: data?.last_rep?.lumiere_extin || "",
      lightDuration: data?.last_rep?.lumiere_durr || "",
      flashOn: data?.last_rep?.flash_alum || "",
      flashOff: data?.last_rep?.flash_extin || "",
      flashDuration: data?.last_rep?.flash_durr || "",
      qty_shell: data?.last_rep?.qty_coquille || "",
      coloration: data?.last_rep?.coloration || "",
      intensIsLux: data?.last_rep?.intensIsLux || false,
      intensite: data?.last_rep?.intensite || "",
      pmo: data?.last_rep?.pmo || "",
    });
    dispatch(getBatimentName(data?.last_rep?.batiment));
  }, [data]);
  useEffect(() => {
    formik.handleReset();
  }, [siteId]);
  return (
    <div className="batiment-form">
      {showAlert && <SuccessAlert />}

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
        <div className="form-box">
          <Viabilite formik={formik} />
          <Production formik={formik} />
          <Consommation formik={formik} />
        </div>
        <div className="form-box">
          <Ambiance formik={formik} last_rep={data?.last_rep} />
          {data && <Constats formik={formik} last_rep={data?.last_rep} />}
          <Observation siteId={siteId} />
        </div>
        <button
          type="submit"
          className="edit-btn"
          disabled={data?.lotId ? false : true}
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <AiOutlineSend />
            </div>
          </div>
          <span>Envoyer</span>
        </button>
      </form>
    </div>
  );
};

export default BatimentForm;
