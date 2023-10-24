import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { CiWheat } from "react-icons/ci";

import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";
function Consommation({ formik }) {
  const { data } = useData();
  const [isOpen, setIsOpen] = useState(false);
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      <div className="box-header consommation" onClick={toggleBox}>
        <div style={{ display: "flex", gap: 10 }}>
          <h3>Consommation</h3> <CiWheat fontSize={25} />
        </div>
        <div className="box-icon">
          {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
        </div>
      </div>
      {isOpen && (
        <div className="box-content consommation">
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Aliment distribué */}
              <label>
                <input
                  id="alimentDist"
                  name="alimentDist"
                  type="number"
                  className={
                    formik.values.alimentDist?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.alimentDist}
                  onChange={formik.handleChange}
                />
                <span>Aliment Distribué</span>
                {formik.touched.alimentDist && formik.errors.alimentDist && (
                  <div className="error">{formik.errors.alimentDist}</div>
                )}
              </label>
            </div>

            <div className="inputs-container">
              {/* Formule en place */}
              <label>
                <input
                  id="formule"
                  name="formule"
                  type="string"
                  className={
                    formik.values?.formule?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values?.formule}
                  onChange={formik.handleChange}
                />
                <span>Réference aliment</span>
              </label>
              {formik.touched.formule && formik.errors.formule && (
                <div className="error">{formik.errors.formule}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            <div className="inputs-container">
              {/* Eau Distribué */}
              <label>
                <input
                  id="eauDist"
                  name="eauDist"
                  type="number"
                  className={
                    formik.values.eauDist?.length === 0
                      ? "input"
                      : "input-valid input"
                  }
                  placeholder=""
                  value={formik.values.eauDist}
                  onChange={formik.handleChange}
                />
                <span>Eau Distribué</span>
              </label>
              {formik.touched.eauDist && formik.errors.eauDist && (
                <div className="error">{formik.errors.eauDist}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Consommation;
