import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState, useMemo, useEffect } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import ConfirmModel from "./ConfirmModel";

import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";

import "./style.css";

let base_url = "https://farmdriver.savas.ma/api/";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "80%",
};

export default function EditRepport({ openEditModal, setOpenEditModal }) {
  const [sliderValue, setSliderValue] = useState("");
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
      console.log(values);
      UpdateReports(values);
      // CreateReports(values);
    },
  });

  const apiUrl = useMemo(() => `${base_url}get-prefilled-data/?id=${id}`, []);

  const { data, loading, error } = UseFetchData(apiUrl);

  // ! Handle Light Inputs
  const handleLightInputChange = (e) => {
    formik.handleChange(e);
    // Check if either "lightOn" or "lightOff" has a value, then reset "lightDuration"
    if (e.target.name === "lightOn" || e.target.name === "lightOff") {
      if (formik.values.lightOn || formik.values.lightOff) {
        console.log(formik.values.lightOn, formik.values.lightOff);
        formik.setFieldValue("lightDuration", ""); // Reset "lightDuration"
      }
    }
    // Check if "lightDuration" has a value, then reset "lightOn" and "lightOff"
    else if (e.target.name === "lightDuration" && e.target.value) {
      formik.setFieldValue("lightOn", "");
      formik.setFieldValue("lightOff", "");
    }
  };
  // ! Handle flash Inputs
  const handleFlashInputChange = (e) => {
    formik.handleChange(e);
    // Check if either "flashOn" or "flashOff" has a value, then reset "flashDuration"
    if (e.target.name === "flashOn" || e.target.name === "flashOff") {
      if (formik.values.flashOn || formik.values.flashOff) {
        formik.setFieldValue("flashDuration", ""); // Reset "flashDuration"
      }
    }
    // Check if "flashDuration" has a value, then reset "flashOn" and "flashOff"
    else if (e.target.name === "flashDuration" && e.target.value) {
      formik.setFieldValue("flashOn", "");
      formik.setFieldValue("flashOff", "");
    }
  };
  const colorationLabel = {
    70: "70",
    80: "80",
    90: "90",
    100: "100",
    110: "110",
  };
  const qltLabel = {
    1: "1/10",
    2: "3/10",
    3: "5/10",
    4: "7/10",
    5: "10/10",
  };
  const handleSliderChange = (event, newValue) => {
    formik.handleChange(event);
    if (newValue) {
      setSliderValue(newValue);
    }
  };
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
    console.log(data);
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
          message={"are you sure ?"}
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
            <div className="edit-site slit-in-horizontal">
              <p className="title">Modifier le Rapport {id} </p>
              <form
                action=""
                className="edit-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="edit-inputs-container">
                    <fieldset>
                      <legend>Viabilité</legend>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.mort?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Mortalité"
                          name="mort"
                          type="number"
                          value={formik.values.mort}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Mortalité
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.sjt_elm?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="sujet elimines"
                          name="sjt_elm"
                          type="number"
                          value={formik.values.sjt_elm}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Sujet elimines
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.poidVif?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Poids Corporel"
                          type="number"
                          name="poidVif"
                          value={formik.values.poidVif}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Poids Corporel
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.homog?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Homogeneité"
                          type="number"
                          name="homog"
                          value={formik.values.homog}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Homogeneité
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="edit-inputs-container">
                    <fieldset>
                      <legend>Production</legend>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          placeholder="Normal"
                          type="number"
                          className={
                            formik.values.prod_normal?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          value={formik.values.prod_normal}
                          onChange={formik.handleChange}
                          name="prod_normal"
                        />

                        <label htmlFor="input-field" className="input-label">
                          Normal
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.prod_blanc?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Blanc"
                          type="number"
                          value={formik.values.prod_blanc}
                          onChange={formik.handleChange}
                          name="prod_blanc"
                        />

                        <label htmlFor="input-field" className="input-label">
                          Blanc
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.prod_feles?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Feles"
                          type="number"
                          name="prod_feles"
                          value={formik.values.prod_feles}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Feles
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.prod_dj?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Double jaune"
                          name="prod_dj"
                          value={formik.values.prod_dj}
                          onChange={formik.handleChange}
                          type="number"
                        />

                        <label htmlFor="input-field" className="input-label">
                          Double jaune
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.prod_casse?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Cassé"
                          type="number"
                          name="prod_casse"
                          value={formik.values.prod_casse}
                          onChange={formik.handleChange}
                          //   onChange={(e) => console.log(e.target.value)}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Cassé
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.prod_elimne?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Eliminé"
                          type="number"
                          name="prod_elimne"
                          value={formik.values.prod_elimne}
                          onChange={formik.handleChange}
                          //   onChange={(e) => console.log(e.target.value)}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Eliminé
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.pmo?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="PMO"
                          type="number"
                          name="pmo"
                          value={formik.values.pmo}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          PMO
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <div className="edit-inputs-container">
                      <fieldset>
                        <legend>Consommation</legend>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.alimentDist?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="Aliment Distribué"
                            type="number"
                            name="alimentDist"
                            value={formik.values.alimentDist}
                            onChange={formik.handleChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            Aliment Distribué
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.eauDist?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="Eau Distribué"
                            type="number"
                            name="eauDist"
                            value={formik.values.eauDist}
                            onChange={formik.handleChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            Eau Distribué
                          </label>
                          <span className="input-highlight"></span>
                        </div>

                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.formule?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="Formule en place"
                            type="text"
                            name="formule"
                            value={formik.values.formule}
                            onChange={formik.handleChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            Formule en place
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                      </fieldset>
                    </div>
                    <div className="edit-inputs-container">
                      <fieldset>
                        <legend>Constats</legend>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <select
                            id="qty_shell"
                            name="qty_shell"
                            className={
                              formik.values.qty_shell?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="Bâtiment"
                            value={formik.values.qty_shell}
                            onChange={formik.handleChange}
                          >
                            <option value="" disabled>
                              --
                            </option>
                            {Object.keys(qltLabel).map((key, i) => {
                              return (
                                <option key={i} value={key} className="input">
                                  {qltLabel[key]}
                                </option>
                              );
                            })}
                          </select>
                          <label htmlFor="input-field" className="input-label">
                            qty Shell
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <select
                            id="coloration"
                            name="coloration"
                            style={{ width: "100%" }}
                            className={
                              formik.values.coloration?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="Bâtiment"
                            value={formik.values.coloration}
                            onChange={formik.handleChange}
                          >
                            <option value="" disabled>
                              --
                            </option>
                            {Object.keys(colorationLabel).map((key, i) => {
                              return (
                                <option key={i} value={key} className="input">
                                  {colorationLabel[key]}
                                </option>
                              );
                            })}
                          </select>
                          <label htmlFor="input-field" className="input-label">
                            Coloration
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="edit-inputs-container">
                    <fieldset>
                      <legend>Ambiance</legend>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.temperatureMin?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Temperature int min"
                          type="number"
                          name="temperatureMin"
                          value={formik.values.temperatureMin}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Temperature int min
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.temperatureMax?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Temperature int max"
                          type="number"
                          name="temperatureMax"
                          value={formik.values.temperatureMax}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Temperature int max
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.temperatureMinExt?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Temperature ext min"
                          type="number"
                          name="temperatureMinExt"
                          value={formik.values.temperatureMinExt}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Temperature ext min
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="ic1"></div>
                      <div className="input-container">
                        <input
                          className={
                            formik.values.temperatureMaxExt?.length === 0
                              ? "input-field"
                              : "input-field-valid input-field"
                          }
                          placeholder="Temperature ext max"
                          type="number"
                          name="temperatureMaxExt"
                          value={formik.values.temperatureMaxExt}
                          onChange={formik.handleChange}
                        />

                        <label htmlFor="input-field" className="input-label">
                          Temperature ext max
                        </label>
                        <span className="input-highlight"></span>
                      </div>
                      <div className="light-container">
                        <div className="input-container">
                          <input
                            className={
                              formik.values.lightOn?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="light on"
                            type="time"
                            name="lightOn"
                            value={formik.values.lightOn}
                            onChange={handleLightInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            light on
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.lightOff?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="light off"
                            type="time"
                            name="lightOff"
                            value={formik.values.lightOff}
                            onChange={handleLightInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            light off
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.lightDuration?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="light duration"
                            type="time"
                            name="lightDuration"
                            value={formik.values.lightDuration}
                            onChange={handleLightInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            light duration
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                      </div>
                      <div className="light-container">
                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.flashOn?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="flash on"
                            type="time"
                            name="flashOn"
                            value={formik.values.flashOn}
                            onChange={handleFlashInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            flash on
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.flashOff?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="flash off"
                            type="time"
                            name="flashOff"
                            value={formik.values.flashOff}
                            onChange={handleFlashInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            flash off
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                        <div className="ic1"></div>
                        <div className="input-container">
                          <input
                            className={
                              formik.values.flashDuration?.length === 0
                                ? "input-field"
                                : "input-field-valid input-field"
                            }
                            placeholder="flash duration"
                            type="time"
                            name="flashDuration"
                            value={formik.values.flashDuration}
                            onChange={handleFlashInputChange}
                          />

                          <label htmlFor="input-field" className="input-label">
                            flash duration
                          </label>
                          <span className="input-highlight"></span>
                        </div>
                      </div>

                      <div className="ic1"></div>
                      <div className="inputs-container">
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={
                                  formik.values.intensIsLux
                                    ? formik.values.intensIsLux
                                    : false
                                }
                                onChange={(e) => {
                                  formik.handleChange(e);
                                }}
                                name="intensIsLux"
                              />
                            }
                            label={formik.values.intensIsLux ? "lux" : "%"}
                          />
                        </FormGroup>
                        <Box>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item>
                              <Typography id="input-slider" gutterBottom>
                                Intensité
                              </Typography>
                            </Grid>
                            <Grid item>
                              <LightModeIcon />
                            </Grid>
                            <Grid item xs>
                              <Slider
                                value={
                                  formik.values.intensite
                                    ? formik.values.intensite
                                    : sliderValue
                                }
                                onChange={handleSliderChange}
                                name="intensite"
                                id="intensite"
                                max={formik.values.intensIsLux ? 44 : 100}
                                min={0}
                                step={formik.values.intensIsLux ? 1 : 5}
                                type={formik.values.intensIsLux ? "lux" : "%"}
                                size="medium"
                                valueLabelDisplay="on"
                                disableSwap
                                aria-label="Temperature"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
              <button
                className="edit-btn"
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
                <span>Submit</span>
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
// update-user-site/
