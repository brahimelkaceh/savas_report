import React, { useMemo, useState } from "react";

import { Box, IconButton, Modal, Typography } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import UseFetchData from "../../../../hooks/UseFetchData";
import Loader from "../../../../components/loader/Loader";
import ConsoChart from "./data/ConsoChart";
let base_url = "https://farmdriver.savas.ma/api/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 600,
  boxShadow: 24,
  p: 3,
};
const ConsommationContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const ApiUrl = useMemo(
    () => `${base_url}get-pouss-conso-chart/?lotId=${id}`,
    [base_url, id]
  );
  const { data, loading, error } = UseFetchData(ApiUrl, "GET", id);
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
            color="error"
            size="large"
            sx={{
              margin: 0,
              position: "absolute",
              top: "0%",
              left: "100%",
              transform: "translate(-100%, -0%)",
            }}
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
          {error ? (
            <p>error</p>
          ) : (
            <ConsoChart
              reel={data?.reel}
              guide={data?.guide}
              show={fullScreen}
            />
          )}
          {loading && <Loader />}
        </Box>
      </Modal>
    );
  }
  return (
    <div className="chart-box">
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
          zIndex: 100,
        }}
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
      >
        <FullscreenIcon></FullscreenIcon>
      </IconButton>
      <ConsoChart reel={data?.reel} guide={data?.guide} />
      {/* <h1>Consommation</h1> */}

      {loading && <Loader />}
    </div>
  );
};

export default ConsommationContainer;
