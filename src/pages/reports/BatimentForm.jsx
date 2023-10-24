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
let base_url = "https://farmdriver.savas.ma/api/";

const BatimentForm = ({ siteId }) => {
  const { data } = useData();
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
    onSubmit: (values) => {
      console.log(formik.values);
      CreateReports(formik.values);
      formik.handleReset();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
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
        return response;
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
    });
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
          <Observation formik={formik} />
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
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default BatimentForm;
