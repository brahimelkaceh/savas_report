import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { useState } from "react";

function Constats({ formik, last_rep }) {
  const [isOpen, setIsOpen] = useState(false);
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  // ! /////////////////////////////////

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

  // ! Get Coloration Data
  last_rep?.coloration &&
    (formik.values.coloration
      ? (formik.values.coloration = formik.values.coloration)
      : (formik.values.coloration = last_rep?.coloration));
  // ! Get Quality Coquille Data
  last_rep?.qty_coquille &&
    (formik.values.qty_shell
      ? (formik.values.qty_shell = formik.values.qty_shell)
      : (formik.values.qty_shell = last_rep?.qty_coquille));
  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      <div className="box-header constats" onClick={toggleBox}>
        <div style={{ display: "flex", gap: 10 }}>
          <h3>Constats</h3> <FindInPageIcon />
        </div>
        <div className="box-icon">
          {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
        </div>
      </div>

      {isOpen && (
        <div className="box-content constat">
          <div className="inputs-group">
            <div className="inputs-container">
              <label>
                <select
                  id="qty_shell"
                  name="qty_shell"
                  className={
                    formik.values.qty_shell?.length === 0
                      ? "input"
                      : "input-valid input"
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
                <span>Qualité </span>
              </label>
              {formik.touched.qty_shell && formik.errors.qty_shell && (
                <div className="error">{formik.errors.qty_shell}</div>
              )}
            </div>
          </div>
          <div className="inputs-group">
            {/* Coloration*/}

            <div className="inputs-container">
              <label>
                <select
                  id="coloration"
                  name="coloration"
                  className={
                    formik.values.coloration?.length === 0
                      ? "input"
                      : "input-valid input"
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
                <span>Coloration</span>
              </label>

              {formik.touched.coloration && formik.errors.coloration && (
                <div className="error">{formik.errors.coloration}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Constats;
