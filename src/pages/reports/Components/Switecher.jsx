import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
const Switecher = ({ formik }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            value={
              formik.values.intensIsLux ? formik.values.intensIsLux : false
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
  );
};

export default Switecher;
