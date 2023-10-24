import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./style.css";

export default function Loader() {
  return (
    <Box sx={{ display: "flex" }} className="my-loader">
      <CircularProgress />
    </Box>
  );
}
