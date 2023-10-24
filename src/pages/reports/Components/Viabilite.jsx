import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import StreamIcon from "@mui/icons-material/Stream";
import { useState } from "react";
function Viabilite({ formik }) {
  const [isOpen, setIsOpen] = useState(false);
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      <div className="box-header viability" onClick={toggleBox}>
        <div style={{ display: "flex", gap: 10 }}>
          <h3>Viabilité</h3> <StreamIcon />
        </div>
        <div className="box-icon">
          {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
        </div>
      </div>
      {isOpen && (
        <div className="box-content viability">
          <div className="inputs-group">
            {/* MORT */}
            <div className="inputs-container">
              <label>
                <input
                  id="mort"
                  name="mort"
                  type="number"
                  className={
                    formik?.values.mort?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik?.values.mort}
                  onChange={formik?.handleChange}
                />
                <span>Mortalité</span>
              </label>
            </div>
            {/* SJT-ELMNT */}
            <div className="inputs-container">
              <label>
                <input
                  id="sjt_elm"
                  name="sjt_elm"
                  type="number"
                  className={
                    formik?.values.sjt_elm?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik?.values?.sjt_elm}
                  onChange={formik?.handleChange}
                />
                <span>Sujet éliminées</span>
              </label>
            </div>
          </div>
          <div className="inputs-group">
            {/* POID VIF */}
            <div className="inputs-container">
              <label>
                <input
                  id="poidVif"
                  name="poidVif"
                  type="number"
                  className={
                    formik.values?.poidVif?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values?.poidVif}
                  onChange={formik.handleChange}
                />
                <span>Poids corporel</span>
              </label>
              {formik.touched.poidVif && formik.errors.poidVif && (
                <div className="error">{formik.errors.poidVif}</div>
              )}
            </div>
            {/* HOMOGENITÉ */}
            <div className="inputs-container">
              <label>
                <input
                  id="homog"
                  name="homog"
                  type="number"
                  className={
                    formik.values?.homog?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values?.homog}
                  onChange={formik.handleChange}
                />
                <span>Homogeneité</span>
              </label>
              {formik.touched.homog && formik.errors.homog && (
                <div className="error">{formik.errors.homog}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Viabilite;
