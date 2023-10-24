import React, { useEffect, useState, useMemo } from "react";
import { useFormik } from "formik";
import validationSchema from "./ValidationSchema";
import ConfirmModal from "./ConfirmModel";
import FormHeader from "./Components/FormHeader";
import Viabilite from "./Components/Viabilite";
import Production from "./Components/Production";
import Consommation from "./Components/Consommation";
import Ambiance from "./Components/Ambiance";
import Constats from "./Components/Constats";
import UseFetchData from "../../hooks/UseFetchData";

// ?URL? //
let base_url = "https://farmdriver.savas.ma/api/";

const ReportForm = ({ productionData }) => {
  const [lastRep, setLastRep] = useState({});
  const [nextReport, setNextReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertConfirm, setAlertConfirm] = useState(false);
  const [batimentId, setBatimentId] = useState(null);
  const [observation, setObservation] = useState("");
  const [fem, setFem] = useState("");
  const [lightOn, setLightOn] = useState("");
  const [lightOff, setLightOff] = useState("");

  const [flashOn, setFlashOn] = useState("");
  const [flashOff, setFlashOff] = useState("");
  const [intensite, setIntensite] = useState("");

  // console.log(productionData);
  const formik = useFormik({
    initialValues: {
      batiment: "",
      mort: "",
      sjt_elm: "",
      prod_normal: "",
      prod_dj: "",
      prod_blanc: "",
      prod_casse: "",
      prod_feles: "",
      prod_elimne: "",
      alimentDist: "",
      eauDist: "",
      pmo: "",
      poidVif: "",
      homog: "",
      formule: fem,
      temperatureMin: "",
      temperatureMax: "",
      temperatureMinExt: "",
      temperatureMaxExt: "",
      lightOn: lightOn,
      lightOff: lightOff,
      flashOn: flashOn,
      flashOff: flashOff,
      flashDuration: "",
      lightDuration: "",
      intensite: intensite,
      coloration: "",
      qty_shell: "",
      // aspectPoulette: "",
      // fientes: "",
      observ: observation,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // CreateReports(values);
    },
  });

  // ! Get Next Date && Full Inputs and data about Batimnet
  const SiteApiurl = useMemo(
    () => `${base_url}get-next-send/${batimentId}`,
    [base_url, batimentId]
  );
  const { data, loader } = UseFetchData(SiteApiurl, "GET", batimentId);
  if (loader) {
    return <p>loading...</p>;
  }

  const CreateReports = (data) => {
    // console.log(data);
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
        if (response.ok) {
          setAlertConfirm(true);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNextReport(data);
      })
      .catch((error) => console.error(error));

    // .catch((error) => console.log("somthing xwrong"));
  };
  useEffect(() => {
    setLastRep([]);
    formik.initialValues;
    // console.log();
  }, [productionData]);

  // ! Get Fientes Data
  // lastRep?.last_rep?.fientes &&
  //   (formik.values.fientes
  //     ? (formik.values.fientes = formik.values.fientes)
  //     : (formik.values.fientes = lastRep?.last_rep?.fientes));

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      {/* Next Send Data */}

      {alertConfirm && (
        <ConfirmModal
          alertConfirm={alertConfirm}
          setAlertConfirm={setAlertConfirm}
          reset={formik.handleReset}
          deleteObservs={handleClearAll}
        />
      )}
      {/* {!alertConfirm && openBackdrop && (
        <MyBackdrop openBackdrop={openBackdrop} />
      )} */}
      {/*  Select bâtiemnt */}
      <div className="group">
        <select
          id="batiment"
          name="batiment"
          className={
            formik.values.batiment.length === 0 ? "input" : "input-valid input"
          }
          placeholder="Bâtiment"
          value={formik.values.batiment}
          onChange={(e) => {
            formik.handleChange(e);

            setBatimentId(e.target.value);
          }}
        >
          <option value="" disabled>
            Select bâtiment
          </option>
          {productionData.map((production) => (
            <option key={production.id} value={production.id} className="input">
              {production.name}
            </option>
          ))}
        </select>
        <label htmlFor="batiment"></label>
        {formik.touched.batiment && formik.errors.batiment && (
          <div className="error">{formik.errors.batiment}</div>
        )}
      </div>
      {/* Next Send Data */}
      <div className="ic1"></div>
      <FormHeader nextReport={nextReport} loading={loading} lastRep={lastRep} />

      {/* Viabilité */}
      <div className="ic1"></div>
      <Viabilite formik={formik} />

      {/* PRODUCTION */}
      <div className="ic1"></div>
      <Production formik={formik} />

      {/* Consommation */}
      <div className="ic1"></div>
      <Consommation formik={formik} />
      {/* Ambiance */}
      <div className="ic1"></div>
      <Ambiance formik={formik} />
      {/* CONSTATS */}
      <div className="ic1"></div>
      <Constats formik={formik} />

      {/* <button onClick={handleMerge}>Merge Data</button> */}
      <div className="ic1"></div>
      <div className="ic1"></div>

      <button
        type="submit"
        // onClick={handleMerge}
      >
        Submit
      </button>
    </form>
  );
};

export default ReportForm;
