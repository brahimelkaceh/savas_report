import React, { useMemo, useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import MortChart from "../../../../pages/modification/charts/ConsoChart";
import UseFetchData from "../../../../hooks/UseFetchData";
import Loader from "../../../../components/loader/Loader";
import TempChart from "./data/Temp";
import LightChart from "./data/LightChart";
let base_url = "https://farmdriver.savas.ma/api/";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  boxShadow: 24,
  p: 3,
};

const LightContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const ApiUrl = useMemo(
    () => `${base_url}get-pouss-light-chart/?lotId=${id}`,
    [base_url, id]
  );
  const { data, loading, error } = UseFetchData(ApiUrl, "GET", id);
  console.log(data);
  const handleClose = () => {
    setFullScreen(false);
  };
  if (fullScreen) {
    return (
      <Modal
        open={fullScreen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal modal " id="chartDiv">
          <Typography
            color="primary"
            sx={{
              margin: 0,
              position: "absolute",
              top: "2%",
              left: "75%",
              transform: "translate(-0%, -0%)",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <IconButton
            sx={{
              margin: 0,
              position: "absolute",
              top: "0%",
              left: "100%",
              transform: "translate(-100%, -0%)",
              backgroundColor: "#f44336",
              color: "#e3f2fd",
              borderRadius: 0,
              borderBottomLeftRadius: 4,
            }}
            size="small"
            disableFocusRipple={true}
            disableRipple={true}
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          {error ? <p>error</p> : <LightChart data={data} show={fullScreen} />}

          {loading && <Loader />}
        </Box>
      </Modal>
    );
  }
  return (
    <div
      className="chart-box"
      style={{
        height: "300px",
      }}
    >
      <Typography
        color="primary"
        sx={{
          margin: 0,
          position: "absolute",
          top: "2%",
          left: "1%",
          transform: "translate(-0%, -0%)",
          fontSize: "10px",
        }}
      >
        {title}
      </Typography>
      <IconButton
        color="primary"
        sx={{
          margin: 0,
          position: "absolute",
          top: "100%",
          left: "100%",
          transform: "translate(-100%, -100%)",
          zIndex: 10,
        }}
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
      >
        <FullscreenIcon></FullscreenIcon>
      </IconButton>
      {data && <LightChart data={data} show={fullScreen} />}

      {loading && <Loader />}
    </div>
  );
};

export default LightContainer;
