import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { useState } from "react";
import EggIcon from "@mui/icons-material/Egg";
function Production({ formik, open }) {
  const [isOpen, setIsOpen] = useState(open ? open : false);
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      <div className="box-header production-form" onClick={toggleBox}>
        <div style={{ display: "flex", gap: 10 }}>
          <h3>Production</h3> <EggIcon />
        </div>
        <div className="box-icon">
          {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
        </div>
      </div>

      {isOpen && (
        <div className="box-content production">
          <div className="inputs-group">
            {/* Production Normal */}
            <div className="inputs-container">
              <label>
                <input
                  id="prod_normal"
                  name="prod_normal"
                  type="number"
                  className={
                    formik.values.prod_normal?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_normal}
                  onChange={formik.handleChange}
                />
                <span>Œufs normaux</span>
              </label>
              {formik.touched.prod_normal && formik.errors.prod_normal && (
                <div className="error">{formik.errors.prod_normal}</div>
              )}
            </div>
            <div className="inputs-container">
              {/* Production Double jaune */}
              <label>
                <input
                  id="prod_dj"
                  name="prod_dj"
                  type="number"
                  className={
                    formik.values.prod_dj?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_dj}
                  onChange={formik.handleChange}
                />
                <span>Œufs double jaune</span>
              </label>
              {formik.touched.prod_dj && formik.errors.prod_dj && (
                <div className="error">{formik.errors.prod_dj}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Production  feles*/}
              <label>
                <input
                  id="prod_feles"
                  name="prod_feles"
                  type="number"
                  className={
                    formik.values.prod_feles?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_feles}
                  onChange={formik.handleChange}
                />
                <span>Sale</span>
              </label>
              {formik.touched.prod_feles && formik.errors.prod_feles && (
                <div className="error">{formik.errors.prod_feles}</div>
              )}
            </div>
            <div className="inputs-container">
              {/* Production  Cassé*/}
              <label>
                <input
                  id="prod_casse"
                  name="prod_casse"
                  type="number"
                  className={
                    formik.values.prod_casse?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_casse}
                  onChange={formik.handleChange}
                />
                <span>Cassé</span>
              </label>
              {formik.touched.prod_casse && formik.errors.prod_casse && (
                <div className="error">{formik.errors.prod_casse}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Production  Blanc*/}
              <label>
                <input
                  id="prod_blanc"
                  name="prod_blanc"
                  type="number"
                  className={
                    formik.values.prod_blanc?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_blanc}
                  onChange={formik.handleChange}
                />
                <span>Œufs blancs</span>
              </label>
              {formik.touched.prod_blanc && formik.errors.prod_blanc && (
                <div className="error">{formik.errors.prod_blanc}</div>
              )}
            </div>
            <div className="inputs-container">
              {/* Production  Eliminé*/}
              <label>
                <input
                  id="prod_liquide"
                  name="prod_liquide"
                  type="number"
                  className={
                    formik.values.prod_liquide?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_liquide}
                  onChange={formik.handleChange}
                />
                <span>Liquide (Litre)</span>
              </label>
              {formik.touched.prod_liquide && formik.errors.prod_liquide && (
                <div className="error">{formik.errors.prod_liquide}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Production  Eliminé*/}
              <label>
                <input
                  id="prod_elimne"
                  name="prod_elimne"
                  type="number"
                  className={
                    formik.values.prod_elimne?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.prod_elimne}
                  onChange={formik.handleChange}
                />
                <span>Triage</span>
              </label>
              {formik.touched.prod_elimne && formik.errors.prod_elimne && (
                <div className="error">{formik.errors.prod_elimne}</div>
              )}
            </div>
          </div>
          <div className="inputs-container" style={{ width: "96%" }}>
            {/* PMO */}
            <label>
              <input
                id="pmo"
                name="pmo"
                type="number"
                className={
                  formik.values.pmo?.length === 0
                    ? "input"
                    : "input-valid input"
                }
                placeholder=""
                value={formik.values.pmo}
                onChange={formik.handleChange}
              />
              <span>PMO (g)</span>
            </label>
          </div>
          <div className="error">{formik.errors.pmo}</div>
        </div>
      )}
    </div>
  );
}

export default Production;
