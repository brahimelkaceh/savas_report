import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Rating } from "@mui/material";
import { BsBox, BsBoxArrowUp } from "react-icons/bs";

import validationSchema from "./ValidationSchema";

const Test = ({ productionData }) => {
  const [aspectPouletteValue, setAspectPouletteValue] = useState(0);
  const [hoverAspectPouletteValue, setHoverAspectPouletteValue] = useState(-1);
  const [colorationValue, setColorationValue] = useState(0);
  const [hoverColoration, setHoverColoration] = useState(-1);
  const [qltValue, setQltValue] = useState(0);
  const [hoverQlt, setHoverQlt] = useState(-1);
  const [fientesValue, setFientesValue] = useState(0);
  const [hoverFientes, setHoverFientes] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  // console.log(productionData);
  const formik = useFormik({
    initialValues: {
      batiment: "",
      mort: "",
      prod_normal: "",
      prod_dj: "",
      prod_blanc: "",
      prod_casse: "",
      prod_feles: "",
      prod_elimne: "",
      //  if(reform) {

      //    hensEliminated: parseInt(hensEliminatedRef.current.value),
      //  },
      alimentDist: "",
      eauDist: "",
      pmo: "",
      poidVif: "",
      homog: "",
      formule: "",
      temperatureMin: "",
      temperatureMax: "",
      temperatureMinExt: "",
      temperatureMaxExt: "",
      lightOn: "",
      lightOff: "",
      flashOn: "",
      flashOff: "",
      intensite: "",
      aspectPoulette: 0,
      coloration: 0,
      qty_shell: 0,
      fientes: 0,
      // observ: mergedArray.toString().replaceAll(",", "|@|"),
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
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      {/* Select bâtiemnt */}
      <div className="group">
        <select
          id="batiment"
          name="batiment"
          className="input"
          placeholder="Bâtiment"
          value={formik.values.batiment}
          onChange={formik.handleChange}
        >
          <option value="" disabled>
            Select bâtiment
          </option>
          {/* {productionData.map((production) => (
            <option key={production.id} value={production.id} className="input">
              {production.name}
            </option>
          ))} */}
        </select>
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
          className="input"
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
            {isOpen ? <BsBoxArrowUp /> : <BsBox />}
          </div>
          <h3>Production</h3>
        </div>
        {isOpen && (
          <div className="box-content">
            <div className="inputs-container">
              {/* Production Normal */}
              <div className="group">
                <input
                  id="prod_normal"
                  name="prod_normal"
                  type="number"
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
            className="input"
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
            className="input"
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
          className="input"
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
            className="input"
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
            className="input"
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
          type="number"
          className="input"
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
            className="input"
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
            className="input"
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
            className="input"
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
            className="input"
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
            type="number"
            className="input"
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
            type="number"
            className="input"
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
            type="number"
            className="input"
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
            type="number"
            className="input"
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
            className="input"
            placeholder=""
            value={formik.values.intensite}
            onChange={formik.handleChange}
          />
          <label htmlFor="intensite">intensité</label>
          {formik.touched.intensite && formik.errors.intensite && (
            <div className="error">{formik.errors.intensite}</div>
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
      <div className="ic1"></div>
      <div className="ic1"></div>
      <div className="ic1"></div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;
