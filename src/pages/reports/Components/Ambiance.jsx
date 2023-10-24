import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { useState } from "react";
import Switecher from "./Switecher";
import RangSlider from "./RangSlider";
function Ambiance({ formik, last_rep }) {
  const [isOpen, setIsOpen] = useState(false);
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // ! Get Intensite Type Data
  // formik.values.intensIsLux = data?.data?.last_rep?.intensIsLux ? true : false;
  last_rep?.intensIsLux &&
    (formik.values.intensIsLux
      ? (formik.values.intensIsLux = formik.values.intensIsLux)
      : (formik.values.intensIsLux = last_rep?.intensIsLux));
  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      <div className="box-header ambiance" onClick={toggleBox}>
        <div style={{ display: "flex", gap: 10 }}>
          <h3>Ambiance</h3> <SentimentSatisfiedIcon />
        </div>
        <div className="box-icon">
          {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
        </div>
      </div>

      {isOpen && (
        <div className="box-content ambiance ">
          {/* Temperature */}
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Temperature int min */}
              <label>
                <input
                  id="temperatureMin"
                  name="temperatureMin"
                  type="number"
                  className={
                    formik.values.temperatureMin?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.temperatureMin}
                  onChange={formik.handleChange}
                />
                <span>Temperature int min</span>
              </label>
              {formik.touched.temperatureMin &&
                formik.errors.temperatureMin && (
                  <div className="error">{formik.errors.temperatureMin}</div>
                )}
            </div>
            <div className="inputs-container">
              {/* Temperature int max */}
              <label>
                <input
                  id="temperatureMax"
                  name="temperatureMax"
                  type="number"
                  className={
                    formik.values.temperatureMax?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.temperatureMax}
                  onChange={formik.handleChange}
                />
                <span>Temperature int max</span>
              </label>
              {formik.touched.temperatureMax &&
                formik.errors.temperatureMax && (
                  <div className="error">{formik.errors.temperatureMax}</div>
                )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Temperature ext min*/}
              <label>
                <input
                  id="temperatureMinExt"
                  name="temperatureMinExt"
                  type="number"
                  className={
                    formik.values.temperatureMinExt?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.temperatureMinExt}
                  onChange={formik.handleChange}
                />
                <span>Temperature ext min</span>
              </label>
              {formik.touched.temperatureMinExt &&
                formik.errors.temperatureMinExt && (
                  <div className="error">{formik.errors.temperatureMinExt}</div>
                )}
            </div>
            <div className="inputs-container">
              {/* Temperature ext max*/}
              <label>
                <input
                  id="temperatureMaxExt"
                  name="temperatureMaxExt"
                  type="number"
                  className={
                    formik.values.temperatureMaxExt?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.temperatureMaxExt}
                  onChange={formik.handleChange}
                />
                <span>Temperature Ext max</span>
                {formik.touched.temperatureMaxExt &&
                  formik.errors.temperatureMaxExt && (
                    <div className="error">
                      {formik.errors.temperatureMaxExt}
                    </div>
                  )}
              </label>
            </div>
          </div>

          <div className="inputs-group">
            <div className="inputs-container">
              {/* light On*/}
              <label>
                <input
                  id="lightOn"
                  name="lightOn"
                  type="time"
                  className={
                    formik.values.lightOn?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.lightOn}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.values.lightDuration.length > 0) {
                      formik.setValues({
                        ...formik.values,
                        lightDuration: "",
                      });
                    }
                  }}
                  // onChange={formik.handleChange}
                />
                <span>lumière allumée</span>
              </label>
              {formik.touched.lightOn && formik.errors.lightOn && (
                <div className="error">{formik.errors.lightOn}</div>
              )}
            </div>
            {/* Light Off */}
            <div className="inputs-container">
              <label>
                <input
                  id="lightOff"
                  name="lightOff"
                  type="time"
                  className={
                    formik.values.lightOff?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.lightOff}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.values.lightDuration.length > 0) {
                      formik.setValues({
                        ...formik.values,
                        lightDuration: "",
                      });
                    }
                  }}
                />
                <span>lumière éteinte</span>
              </label>
              {formik.touched.lightOff && formik.errors.lightOff && (
                <div className="error">{formik.errors.lightOff}</div>
              )}
            </div>
            <div className="inputs-container">
              {/* Light duration */}
              <label>
                <input
                  id="lightDuration"
                  name="lightDuration"
                  type="time"
                  className={
                    formik.values?.lightDuration?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.lightDuration}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (
                      formik.values.lightOff.length > 0 ||
                      formik.values.lightOn.length > 0
                    ) {
                      formik.setValues({
                        ...formik.values,
                        lightOff: "",
                        lightOn: "",
                      });
                    }
                  }}
                />
                <span>durée d'éclairage</span>
              </label>
              {formik.touched.lightDuration && formik.errors.lightDuration && (
                <div className="error">{formik.errors.lightDuration}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Flash On*/}
              <label htmlFor="flashOn">
                <input
                  id="flashOn"
                  name="flashOn"
                  type="time"
                  className={
                    formik.values.flashOn?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.flashOn}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.values?.flashDuration?.length > 0) {
                      formik.setValues({
                        ...formik.values,
                        flashDuration: "",
                      });
                    }
                  }}
                />
                <span>Flash allumée</span>
              </label>
              {formik.touched.flashOn && formik.errors.flashOn && (
                <div className="error">{formik.errors.flashOn}</div>
              )}
            </div>
            <div className="inputs-container">
              {/* Flash Off*/}
              <label>
                <input
                  id="flashOff"
                  name="flashOff"
                  type="time"
                  className={
                    formik.values.flashOff?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.flashOff}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.values?.flashDuration?.length > 0) {
                      formik.setValues({
                        ...formik.values,
                        flashDuration: "",
                      });
                    }
                  }}
                />
                <span>Flash éteinte</span>
              </label>
              {formik.touched.flashOff && formik.errors.flashOff && (
                <div className="error">{formik.errors.flashOff}</div>
              )}
            </div>
            <div className="inputs-container">
              <label>
                <input
                  id="flashDuration"
                  name="flashDuration"
                  type="time"
                  className={
                    formik.values.flashDuration?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.flashDuration}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (
                      formik.values.flashOn?.length > 0 ||
                      formik.values.flashOff?.length > 0
                    ) {
                      formik.setValues({
                        ...formik.values,
                        flashOff: "",
                        flashOn: "",
                      });
                    }
                  }}
                />
                <span>Durée du flash</span>
              </label>
              {formik.touched.flashDuration && formik.errors.flashDuration && (
                <div className="error">{formik.errors.flashDuration}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              <Switecher formik={formik} />
              {formik.values.intensIsLux ? (
                <RangSlider maxValue={44} step={1} type="lux" formik={formik} />
              ) : (
                <RangSlider maxValue={100} step={5} type="%" formik={formik} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ambiance;
