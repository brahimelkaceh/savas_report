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
import MortChart from "./data/MortChart";
let base_url = "https://farmdriver.savas.ma/api/";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MortaliteContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const ApiUrl = useMemo(
    () => `${base_url}get-pouss-mort-chart/?lotId=${id}`,
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
              Mortalité
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              fermer
            </Button>
          </Toolbar>
        </AppBar>
        {data && (
          <MortChart reel={data?.reel} guide={data?.guide} show={fullScreen} />
        )}{" "}
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
          Mortalité
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
      {data && <MortChart reel={data?.reel} guide={data?.guide} show={false} />}
    </Card>
  );
};

export default MortaliteContainer;

{
  /* <MortChart reel={data?.reel} guide={data?.guide} /> */
}
