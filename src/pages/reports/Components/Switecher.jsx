import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
const Switecher = ({ formik }) => {
  return (
    <label className="cyberpunk-checkbox-label">
      <input
        type="checkbox"
        className="switch"
        name="intensIsLux"
        checked={formik.values.intensIsLux}
        onChange={(e) => {
          formik.handleChange(e);
        }}
      />
      {formik.values.intensIsLux ? "lux" : "%"}
    </label>
  );
};

export default Switecher;
