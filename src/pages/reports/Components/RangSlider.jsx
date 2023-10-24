import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { useEffect } from "react";
import { useData } from "../context/DataProvider";
const RangSlider = ({ maxValue, step, type, formik }) => {
  const data = useData();
  const [sliderValue, setSliderValue] = useState(
    data?.data?.last_rep?.intensite
  );
  // ! Get Intensite Data
  const handleSliderChange = (event, newValue) => {
    formik.handleChange(event);
    if (newValue) {
      setSliderValue(newValue);
    }
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography id="input-slider" gutterBottom>
            Intensité ({type})
          </Typography>
        </Grid>
        <Grid item>
          <LightModeIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={
              formik.values.intensite ? formik.values.intensite : sliderValue
            }
            onChange={handleSliderChange}
            name="intensite"
            id="intensite"
            max={maxValue}
            min={0}
            step={step}
            size="medium"
            valueLabelDisplay="on"
            disableSwap
            aria-label="Temperature"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RangSlider;
