import React, { forwardRef, useMemo, useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import {
  AppBar,
  Box,
  Button,
  Card,
  Dialog,
  IconButton,
  LinearProgress,
  Modal,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import UseFetchData from "../../../../hooks/UseFetchData";
import TempChart from "./data/Temp";
let base_url = "https://farmdriver.savas.ma/api/";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TemperatureChart = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const ApiUrl = useMemo(
    () => `${base_url}get-pouss-temp-chart/?lotId=${id}`,
    [base_url, id]
  );
  const { data, loading, error } = UseFetchData(ApiUrl, "GET", id);
  const handleClose = () => {
    setFullScreen(false);
  };
  if (fullScreen) {
    return (
      <Dialog
        fullScreen
        open={fullScreen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {loading && <LinearProgress color="warning" variant="query" />}
        <AppBar color="primary" sx={{ position: "relative", marginBottom: 2 }}>
          <Toolbar>
            <Typography variant="caption">{title}</Typography>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Poids corporel & Homogénéité{" "}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              fermer
            </Button>
          </Toolbar>
        </AppBar>
        {data && <TempChart data={data} show={fullScreen} />}
      </Dialog>
    );
  }
  return (
    <Card
      style={{
        height: "36vh",
        paddingBottom: 30,
      }}
    >
      {loading && <LinearProgress />}
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={2}
        alignItems={"center"}
      >
        <Typography color="error" variant="caption">
          {title}
        </Typography>{" "}
        <Typography color="primary" variant="body2">
          Temperature
        </Typography>
        <IconButton
          color="primary"
          onClick={() => {
            setFullScreen(!fullScreen);
          }}
        >
          <FullscreenIcon></FullscreenIcon>
        </IconButton>
      </Stack>
      {data?.length > 0 ? (
        <TempChart data={data} show={false} />
      ) : (
        "pas des donnees"
      )}
    </Card>
  );
};

export default TemperatureChart;

// {data && <TempChart data={data} />}
