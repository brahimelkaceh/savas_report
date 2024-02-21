import React, { useMemo, useState } from "react";
import MasseOeufChart from "../../../modification/charts/MasseOeufChart";
import UseFetchData from "../../../../hooks/UseFetchData";
import Loader from "../../../../components/loader/Loader";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Card, IconButton, Modal, Stack, Typography } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import CloseIcon from "@mui/icons-material/Close";
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
const MasseContainer = ({ id, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const ApiUrl = useMemo(
    () => `${base_url}table-massoeuf-chart-new/?lotId=${id}`,
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
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            gap={2}
            alignItems={"center"}
          >
            <Typography color="primary" variant="h6">
              Masse d'œufs
            </Typography>
            <Typography color="error" variant="caption">
              {title}
            </Typography>{" "}
          </Stack>
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
          {error ? (
            <p>error</p>
          ) : (
            <MasseOeufChart data={data} show={fullScreen} />
          )}
          {loading && <Loader />}
        </Box>
      </Modal>
    );
  }
  return (
    <Card
      style={{
        height: "40vh",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        gap={2}
        alignItems={"center"}
      >
        <Typography color="error" variant="caption">
          {title}
        </Typography>{" "}
        <Typography color="primary" variant="subtitle2">
          Masse d'œufs{" "}
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
      <MasseOeufChart data={data} show={fullScreen} />
      {loading && <Loader />}
    </Card>
  );
};

export default MasseContainer;
