<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Rating } from "@mui/material";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { BiBorderRadius, BiCommentAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import validationSchema from "./ValidationSchema";

// ?URL? //
let base_url = "https://pouliprod.savas.ma/api/";

const ReportForm = ({ productionData }) => {
  const [nextDate, setNextDate] = useState("");
  const [loading, setLoading] = useState(false);

  const [aspectPouletteValue, setAspectPouletteValue] = useState(0);
  const [hoverAspectPouletteValue, setHoverAspectPouletteValue] = useState(-1);
  const [colorationValue, setColorationValue] = useState(0);
  const [hoverColoration, setHoverColoration] = useState(-1);
  const [qltValue, setQltValue] = useState(0);
  const [hoverQlt, setHoverQlt] = useState(-1);
  const [fientesValue, setFientesValue] = useState(0);
  const [hoverFientes, setHoverFientes] = useState(-1);
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  const [observation, setObservation] = useState("");
  const [fem, setFem] = useState("");
  const [lightOn, setLightOn] = useState("");
  const [lightOff, setLightOff] = useState("");
<<<<<<< HEAD

  const [flashOn, setFlashOn] = useState("");
  const [flashOff, setFlashOff] = useState("");
  const [intensite, setIntensite] = useState("");

=======
  const [flashOn, setFlashOn] = useState("");
  const [flashOff, setFlashOff] = useState("");
  const [intensite, setIntensite] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // ! OBSERVATIONS HANDLING ///////////////////////////
  const [selectedOption, setSelectedOption] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [dynamicForms, setDynamicForms] = useState([]);
  const [formError, setFormError] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setSelectedOption("0");
    }

    if (!textInput) {
      setFormError("Input text is required.");
      return;
    }

    setFormError("");

    const combinedValue = selectedOption + "/§£•/" + textInput;
    if (editingIndex === -1) {
      const newData = { combinedValue };
      setDynamicForms((prevData) => [...prevData, newData]);
    } else {
      const editedData = { combinedValue };
      setDynamicForms((prevData) =>
        prevData.map((data, index) =>
          index === editingIndex ? editedData : data
        )
      );
      setEditingIndex(-1);
    }

    setSelectedOption(null);
    setTextInput("");
  };

  const handleEdit = (index) => {
    const formToEdit = dynamicForms[index];
    setSelectedOption(formToEdit.combinedValue.split(" - ")[0]);
    setTextInput(formToEdit.combinedValue.split(" - ")[1]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setDynamicForms((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleMerge = () => {
    // Combine all dynamic form data into a single string or array
    const mergedData = dynamicForms.map((data) => data.combinedValue);
    // console.log("Merged Data:", mergedData.toString().replaceAll(",", "|@|"));
    // You can choose to store or use the merged data as per your requirements
    setObservation(
      () =>
        (formik.values.observ = mergedData.toString().replaceAll(",", "|@|"))
    );
  };

  // ! OBSERVATIONS HANDLING ///////////////////////////
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  // console.log(productionData);
  const formik = useFormik({
    initialValues: {
      batiment: "",
      mort: "",
<<<<<<< HEAD
      sjt_elm: "",
=======
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
      prod_normal: "",
      prod_dj: "",
      prod_blanc: "",
      prod_casse: "",
      prod_feles: "",
      prod_elimne: "",
<<<<<<< HEAD
=======
      //  if(reform) {

      //    hensEliminated: parseInt(hensEliminatedRef.current.value),
      //  },
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
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
<<<<<<< HEAD
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

=======
      intensite: intensite,
      aspectPoulette: 0,
      coloration: 0,
      qty_shell: qltValue,
      fientes: 0,
      observ: observation,
      // observ: dynamicForms.map((data) => {
      //   console.log(data.combinedValue.replaceAll(",", "|@|"));
      //   return data.combinedValue.replaceAll(",", "|@|");
      // }),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  const aspectPouletteLabel = {
    1: "Active",
    2: "Calme",
    3: "Nerveuse",
    4: "Haléte",
  };
  const colorationLabel = {
    1: "70",
    2: "80",
    3: "90",
    4: "100",
    5: "110",
  };
  const qltLabel = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
  };
  const fientesLabel = {
    1: "normal",
    2: "diarrhee",
    3: "sanglant",
    4: "couleur anormale",
    5: "nourriture non digeree",
  };
  // ! Geting Ascpect Poulette Label Text From Rating
  function getAscpectPouletteLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${
      aspectPouletteLabel[value]
    }`;
  }
  // ! Geting Coloration Label Text From Rating
  function getColorationLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${colorationLabel[value]}`;
  }
  // ! Geting Qlt Coquille Label Text From Rating
  function getqltlabeltext(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${qltLabel[value]}`;
  }
  // ! Geting fientes Label Text From Rating
  function getFientesLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${fientesLabel[value]}`;
  }
  // ! Get Next Date && Full Inputs and data about Batimnet
  const GetNextDate = (id) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}get-next-send/`, {
      method: "POST",
      body: JSON.stringify({
        "batiment": parseInt(id),
      }),
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNextDate(JSON.parse(data));
        // ! Get Formule Data
        nextDate?.last_rep?.formule &&
          setFem(() => (formik.values.formule = nextDate?.last_rep?.formule));
        // ! Get light On Data
        nextDate?.last_rep?.lumiere_alum &&
          setLightOn(
            () => (formik.values.lightOn = nextDate?.last_rep?.lumiere_alum)
          );
        // ! Get light Off Data
        nextDate?.last_rep?.lumiere_extin &&
          setLightOff(
            () => (formik.values.lightOff = nextDate?.last_rep?.lumiere_extin)
          );
        // ! Get Flash Off Data
        nextDate?.last_rep?.flash_extin &&
          setFlashOff(
            () => (formik.values.flashOff = nextDate?.last_rep?.flash_extin)
          );
        // ! Get flash On Data
        nextDate?.last_rep?.flash_alum &&
          setFlashOn(
            () => (formik.values.flashOn = nextDate?.last_rep?.flash_alum)
          );
        // ! Get Intensite Data
        nextDate?.last_rep?.intensite &&
          setIntensite(
            () => (formik.values.intensite = nextDate?.last_rep?.intensite)
          );
        // ! Get Fientes Data
        nextDate?.last_rep?.fientes &&
          setFientesValue(
            () => (formik.values.fientes = nextDate?.last_rep?.fientes)
          );
        // ! Get Coloration Data
        nextDate?.last_rep?.coloration &&
          setColorationValue(
            () => (formik.values.coloration = nextDate?.last_rep?.coloration)
          );
        console.log(JSON.parse(data));
        // ! Get Quality Coquille Data
        nextDate?.last_rep?.qty_coquille &&
          setQltValue(
            () => (formik.values.qty_shell = nextDate?.last_rep?.qty_coquille)
          );
        console.log(JSON.parse(data));
      })
      .catch((error) => {
        setLoading(false);
        setNextDate([]);
      });
  };
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
    >
      {/* Next Send Data */}
<<<<<<< HEAD

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
=======
      {nextDate !== undefined ? (
        nextDate?.type === "day" ? (
          <div className="next-send">
            Prochain Rapport :
            <span className="date-title">{nextDate.nextDate}</span>
            {loading && (
              <div className="dot-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        ) : (
          <div className="next-send">
            Prochain Rapport:
            <span className="date-title">{nextDate.nextDate}</span>
            {loading && (
              <div className="dot-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        )
      ) : (
        <div className="next-send">
          <span> null</span>
        </div>
      )}

      <div className="next-send">
        Code Lot :<span className="date-title">{nextDate?.lot_code}</span>
        {loading && (
          <div className="dot-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      {/* Next Send Data */}
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
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
<<<<<<< HEAD
          onChange={(e) => {
            formik.handleChange(e);

            setBatimentId(e.target.value);
          }}
=======
          onChange={formik.handleChange}
          onClick={() => GetNextDate(formik.values.batiment)}
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
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
<<<<<<< HEAD
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
=======
      </div>
      <label htmlFor="batiment"></label>
      {formik.touched.batiment && formik.errors.batiment && (
        <div className="error">{formik.errors.batiment}</div>
      )}
      {/* Mortalité */}
      <div className="ic1"></div>
      <div className="group">
        <input
          id="mort"
          name="mort"
          type="number"
          className={
            formik.values.mort.length === 0 ? "input" : "input-valid input"
          }
          placeholder=""
          value={formik.values.mort}
          onChange={formik.handleChange}
        />
        <label htmlFor="mort">Mortalité</label>
      </div>
      {formik.touched.mort && formik.errors.mort && (
        <div className="error">{formik.errors.mort}</div>
      )}
      {/* PRODUCTION */}
      <div className={`box ${isOpen ? "open" : ""}`}>
        <div className="box-header" onClick={toggleBox}>
          <div className="box-icon">
            {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
          </div>
          <h3>Production</h3>
        </div>

        <div className="ic1"></div>

        {isOpen && (
          <div className="box-content">
            <div className="inputs-container">
              {/* Production Normal */}
              <div className="group">
                <input
                  id="prod_normal"
                  name="prod_normal"
                  type="number"
                  className={
                    formik.values.prod_normal.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_normal}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_normal">Normal</label>
                {formik.touched.prod_normal && formik.errors.prod_normal && (
                  <div className="error">{formik.errors.prod_normal}</div>
                )}
              </div>
              {/* Production Double jaune */}
              <div className="group">
                <input
                  id="prod_dj"
                  name="prod_dj"
                  type="number"
                  className={
                    formik.values.prod_dj.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_dj}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_dj">Double jaune</label>
                {formik.touched.prod_dj && formik.errors.prod_dj && (
                  <div className="error">{formik.errors.prod_dj}</div>
                )}
              </div>
              {/* Production  Blanc*/}
              <div className="group">
                <input
                  id="prod_blanc"
                  name="prod_blanc"
                  type="number"
                  className={
                    formik.values.prod_blanc.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_blanc}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_blanc">Blanc</label>
                {formik.touched.prod_blanc && formik.errors.prod_blanc && (
                  <div className="error">{formik.errors.prod_blanc}</div>
                )}
              </div>
              {/* Production  Cassé*/}
              <div className="group">
                <input
                  id="prod_casse"
                  name="prod_casse"
                  type="number"
                  className={
                    formik.values.prod_casse.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_casse}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_casse">Cassé</label>
                {formik.touched.prod_casse && formik.errors.prod_casse && (
                  <div className="error">{formik.errors.prod_casse}</div>
                )}
              </div>
              {/* Production  feles*/}
              <div className="group">
                <input
                  id="prod_feles"
                  name="prod_feles"
                  type="number"
                  className={
                    formik.values.prod_feles.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_feles}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_feles">feles</label>
                {formik.touched.prod_feles && formik.errors.prod_feles && (
                  <div className="error">{formik.errors.prod_feles}</div>
                )}
              </div>
              {/* Production  Eliminé*/}
              <div className="group">
                <input
                  id="prod_elimne"
                  name="prod_elimne"
                  type="number"
                  className={
                    formik.values.prod_elimne.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_elimne}
                  onChange={formik.handleChange}
                />
                <label htmlFor="prod_elimne">Eliminé</label>
                {formik.touched.prod_elimne && formik.errors.prod_elimne && (
                  <div className="error">{formik.errors.prod_elimne}</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="ic1"></div>

      {/* Aliment et Eau */}
      <div className="ic1"></div>
      <div className="inputs-container">
        {/* Aliment distribué */}
        <div className="group">
          <input
            id="alimentDist"
            name="alimentDist"
            type="number"
            className={
              formik.values.alimentDist.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.alimentDist}
            onChange={formik.handleChange}
          />
          <label htmlFor="alimentDist">Aliment Distribué</label>
          {formik.touched.alimentDist && formik.errors.alimentDist && (
            <div className="error">{formik.errors.alimentDist}</div>
          )}
        </div>
        {/* Eau Distribué */}
        <div className="group">
          <input
            id="eauDist"
            name="eauDist"
            type="number"
            className={
              formik.values.eauDist.length === 0 ? "input" : "input-valid input"
            }
            placeholder=""
            value={formik.values.eauDist}
            onChange={formik.handleChange}
          />
          <label htmlFor="eauDist">Eau Distribué</label>
          {formik.touched.eauDist && formik.errors.eauDist && (
            <div className="error">{formik.errors.eauDist}</div>
          )}
        </div>
      </div>
      {/* PMO */}
      <div className="ic1"></div>
      <div className="group">
        <input
          id="pmo"
          name="pmo"
          type="number"
          className={
            formik.values.pmo.length === 0 ? "input" : "input-valid input"
          }
          placeholder=""
          value={formik.values.pmo}
          onChange={formik.handleChange}
        />
        <label htmlFor="pmo">PMO</label>
        {formik.touched.pmo && formik.errors.pmo && (
          <div className="error">{formik.errors.pmo}</div>
        )}
      </div>
      {/* POIDVIF & HOMOG */}
      <div className="ic1"></div>
      <div className="inputs-container">
        {/* POID VIF */}
        <div className="group">
          <input
            id="poidVif"
            name="poidVif"
            type="number"
            className={
              formik.values.poidVif.length === 0 ? "input" : "input-valid input"
            }
            placeholder=""
            value={formik.values.poidVif}
            onChange={formik.handleChange}
          />
          <label htmlFor="poidVif">Poid Vif</label>
          {formik.touched.poidVif && formik.errors.poidVif && (
            <div className="error">{formik.errors.poidVif}</div>
          )}
        </div>
        {/* HOMOGENITÉ */}
        <div className="group">
          <input
            id="homog"
            name="homog"
            type="number"
            className={
              formik.values.homog.length === 0 ? "input" : "input-valid input"
            }
            placeholder=""
            value={formik.values.homog}
            onChange={formik.handleChange}
          />
          <label htmlFor="homog">Homogeneité</label>
          {formik.touched.homog && formik.errors.homog && (
            <div className="error">{formik.errors.homog}</div>
          )}
        </div>
      </div>
      {/* Formule en place */}
      <div className="ic1"></div>
      <div className="group">
        <input
          id="formule"
          name="formule"
          type="string"
          className={
            formik.values?.formule?.length === 0 ? "input" : "input-valid input"
          }
          placeholder=""
          value={formik.values.formule}
          onChange={formik.handleChange}
        />
        <label htmlFor="formule">Formule en place</label>
        {formik.touched.formule && formik.errors.formule && (
          <div className="error">{formik.errors.formule}</div>
        )}
      </div>
      {/* Temperature */}
      <div className="ic1"></div>
      <div className="inputs-container">
        {/* Temperature int min */}
        <div className="group">
          <input
            id="temperatureMin"
            name="temperatureMin"
            type="number"
            className={
              formik.values.temperatureMin.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.temperatureMin}
            onChange={formik.handleChange}
          />
          <label htmlFor="temperatureMin">Temperature int min</label>
          {formik.touched.temperatureMin && formik.errors.temperatureMin && (
            <div className="error">{formik.errors.temperatureMin}</div>
          )}
        </div>
        {/* Temperature int max */}
        <div className="group">
          <input
            id="temperatureMax"
            name="temperatureMax"
            type="number"
            className={
              formik.values.temperatureMax.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.temperatureMax}
            onChange={formik.handleChange}
          />
          <label htmlFor="temperatureMax">Temperature int max</label>
          {formik.touched.temperatureMax && formik.errors.temperatureMax && (
            <div className="error">{formik.errors.temperatureMax}</div>
          )}
        </div>
        {/* Temperature ext min*/}
        <div className="group">
          <input
            id="temperatureMinExt"
            name="temperatureMinExt"
            type="number"
            className={
              formik.values.temperatureMinExt.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.temperatureMinExt}
            onChange={formik.handleChange}
          />
          <label htmlFor="temperatureMinExt">Temperature ext min</label>
          {formik.touched.temperatureMinExt &&
            formik.errors.temperatureMinExt && (
              <div className="error">{formik.errors.temperatureMinExt}</div>
            )}
        </div>
        {/* Temperature ext max*/}
        <div className="group">
          <input
            id="temperatureMaxExt"
            name="temperatureMaxExt"
            type="number"
            className={
              formik.values.temperatureMaxExt.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.temperatureMaxExt}
            onChange={formik.handleChange}
          />
          <label htmlFor="temperatureMaxExt">Temperature Ext max</label>
          {formik.touched.temperatureMaxExt &&
            formik.errors.temperatureMaxExt && (
              <div className="error">{formik.errors.temperatureMaxExt}</div>
            )}
        </div>
      </div>
      {/* Lumiere */}
      <div className="ic1"></div>
      <div className="inputs-container">
        {/* light On*/}
        <div className="group">
          <input
            id="lightOn"
            name="lightOn"
            type="time"
            className={
              formik.values.lightOn.length === 0 ? "input" : "input-valid input"
            }
            placeholder=""
            value={formik.values.lightOn}
            onChange={formik.handleChange}
          />
          <label htmlFor="lightOn">light On</label>
          {formik.touched.lightOn && formik.errors.lightOn && (
            <div className="error">{formik.errors.lightOn}</div>
          )}
        </div>
        {/* Light Off */}
        <div className="group">
          <input
            id="lightOff"
            name="lightOff"
            type="time"
            className={
              formik.values.lightOff.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.lightOff}
            onChange={formik.handleChange}
          />
          <label htmlFor="lightOff">Light Off</label>
          {formik.touched.lightOff && formik.errors.lightOff && (
            <div className="error">{formik.errors.lightOff}</div>
          )}
        </div>
        {/* Flash On*/}
        <div className="group">
          <input
            id="flashOn"
            name="flashOn"
            type="time"
            className={
              formik.values.flashOn.length === 0 ? "input" : "input-valid input"
            }
            placeholder=""
            value={formik.values.flashOn}
            onChange={formik.handleChange}
          />
          <label htmlFor="flashOn">Flash On</label>
          {formik.touched.flashOn && formik.errors.flashOn && (
            <div className="error">{formik.errors.flashOn}</div>
          )}
        </div>
        {/* Flash Off*/}
        <div className="group">
          <input
            id="flashOff"
            name="flashOff"
            type="time"
            className={
              formik.values.flashOff.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.flashOff}
            onChange={formik.handleChange}
          />
          <label htmlFor="flashOff">Flash Off</label>
          {formik.touched.flashOff && formik.errors.flashOff && (
            <div className="error">{formik.errors.flashOff}</div>
          )}
        </div>
        {/* intensité */}
        <div className="group">
          <input
            id="intensite"
            name="intensite"
            type="number"
            className={
              formik.values.intensite.length === 0
                ? "input"
                : "input-valid input"
            }
            placeholder=""
            value={formik.values.intensite}
            onChange={formik.handleChange}
          />
          <label htmlFor="intensite">intensité</label>
          <p>{formik.values.intensite}</p>
          {formik.touched.intensite && formik.errors.intensite && (
            <div className="error">
              {formik.errors.intensite} {formik.values.intensite.length}
            </div>
          )}
        </div>
      </div>

      {/* OBSERVATiONs */}
      <div className="ic1"></div>
      <div className="inputs-container">
        {/* Aspect Poulette*/}
        <div className="input-container">
          <div>
            <label htmlFor="aspectPoulette">Aspect Poulette</label>
            <div>
              <Rating
                name="aspectPoulette"
                max={4}
                getLabelText={getAscpectPouletteLabelText}
                value={formik.values.aspectPoulette}
                size="large"
                onChange={(event, newValue) => {
                  formik.setFieldValue("aspectPoulette", newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHoverAspectPouletteValue(newHover);
                }}
              />
              {aspectPouletteValue !== null && (
                <Box sx={{ ml: 0, height: 20 }}>
                  {
                    aspectPouletteLabel[
                      hoverAspectPouletteValue !== -1
                        ? hoverAspectPouletteValue
                        : aspectPouletteValue
                    ]
                  }
                </Box>
              )}
            </div>
          </div>

          {formik.touched.aspectPoulette && formik.errors.aspectPoulette && (
            <div className="error">{formik.errors.aspectPoulette}</div>
          )}
        </div>
        {/* Coloration*/}
        <div className="input-container">
          <div>
            <label htmlFor="coloration">Coloration</label>
            <div>
              <Rating
                name="coloration"
                max={5}
                getLabelText={getColorationLabelText}
                value={formik.values.coloration}
                size="large"
                onChange={(event, newValue) => {
                  formik.setFieldValue("coloration", newValue);
                  console.log(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHoverColoration(newHover);
                }}
              />
              {colorationValue !== null && (
                <Box sx={{ ml: 0, height: 20, minWidth: 30 }}>
                  {
                    colorationLabel[
                      hoverColoration !== -1 ? hoverColoration : colorationValue
                    ]
                  }
                </Box>
              )}
            </div>
          </div>
          {formik.touched.coloration && formik.errors.coloration && (
            <div className="error">{formik.errors.coloration}</div>
          )}
        </div>
        {/* qty_shell*/}
        <div className="input-container">
          <div>
            <label htmlFor="qty_shell">Qty Shell</label>
            <div>
              <Rating
                name="qty_shell"
                max={5}
                getLabelText={getqltlabeltext}
                value={formik.values.qty_shell}
                size="large"
                onChange={(event, newValue) => {
                  formik.setFieldValue("qty_shell", newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHoverQlt(newHover);
                }}
              />
              {qltValue !== null && (
                <Box sx={{ ml: 2, height: 20, minWidth: 30 }}>
                  {qltLabel[hoverQlt !== -1 ? hoverQlt : qltValue]}
                </Box>
              )}
            </div>
          </div>
          {formik.touched.qty_shell && formik.errors.qty_shell && (
            <div className="error">{formik.errors.qty_shell}</div>
          )}
        </div>
        {/* fientes*/}
        <div className="input-container">
          <div>
            <label htmlFor="fientes">Fientes</label>
            <div>
              <Rating
                name="fientes"
                max={5}
                getLabelText={getFientesLabelText}
                value={formik.values.fientes}
                size="large"
                onChange={(event, newValue) => {
                  formik.setFieldValue("fientes", newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHoverFientes(newHover);
                }}
              />
              {fientesValue !== null && (
                <Box sx={{ ml: 2, height: 20, minWidth: 30 }}>
                  {
                    fientesLabel[
                      hoverFientes !== -1 ? hoverFientes : fientesValue
                    ]
                  }
                </Box>
              )}
            </div>
          </div>
          {formik.touched.fientes && formik.errors.fientes && (
            <div className="error">{formik.errors.fientes}</div>
          )}
        </div>
      </div>
      {/* OBSERVATiONS */}
      <div className="ic1"></div>
      <div className="inputs-container">
        <div className="radio-button-form">
          <input
            id="good"
            type="radio"
            name="r"
            value="good"
            checked={selectedOption === "1"}
            onChange={() => handleOptionChange("1")}
          />
          <label htmlFor="good" className="good"></label>
          <input
            id="02"
            type="radio"
            name="r"
            value="warning"
            checked={selectedOption === "2"}
            onChange={() => handleOptionChange("2")}
          />
          <label htmlFor="02" className="warning"></label>
          <input
            id="03"
            type="radio"
            name="r"
            value="danger"
            checked={selectedOption === "3"}
            onChange={() => handleOptionChange("3")}
          />
          <label htmlFor="03" className="danger"></label>
        </div>
        <div className="group">
          <input
            id="observ"
            name="observ"
            type="text"
            minLength={1}
            className={textInput?.length > 0 ? "input input-valid" : "input"}
            placeholder=""
            value={textInput}
            onChange={handleInputChange}
          />
          <label htmlFor="observ">Observation</label>
          {formik.touched.observ && formik.errors.observ && (
            <div className="error">{formik.errors.observ}</div>
          )}
        </div>

        <button type="button" onClick={handleSubmit} className="ajouter">
          {editingIndex === -1 ? "Ajouter" : "modifier"}
        </button>
        {formError && <p>{formError}</p>}
      </div>

      {dynamicForms.map((data, index) => (
        <div className="observation-box ic1" key={index}>
          <p>
            <b>Observation:</b> {data.combinedValue}
          </p>
          <div>
            <IconButton
              onClick={() => handleEdit(index)}
              aria-label="edit"
              size="large"
              className="edit"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(index)}
              aria-label="delete"
              size="large"
              className="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ))}
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda

      {/* <button onClick={handleMerge}>Merge Data</button> */}
      <div className="ic1"></div>
      <div className="ic1"></div>

<<<<<<< HEAD
      <button
        type="submit"
        // onClick={handleMerge}
      >
=======
      <button type="submit" onClick={handleMerge}>
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
        Submit
      </button>
    </form>
  );
};

export default ReportForm;
