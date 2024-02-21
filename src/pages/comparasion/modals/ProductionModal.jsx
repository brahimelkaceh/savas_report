import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IconButton, Stack, SvgIcon, Typography } from "@mui/material";
import { Close, Fullscreen } from "@mui/icons-material";
import ProductionChart from "../charts/ProductionChart";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductionModal({ code, i, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth={"xl"}
      fullWidth
      keepMounted
      fullScreen
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Stack
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"end"}
          my={1}
        >
          <Typography color="error" variant="caption">
            {code.lot}
          </Typography>
          <Typography color="primary" variant="h6">
            Production œufs
          </Typography>
          <IconButton
            variant="outlined"
            size="small"
            onClick={handleClose}
            color="error"
          >
            <SvgIcon>
              <Close />
            </SvgIcon>
          </IconButton>
        </Stack>
        <div
          style={{
            background: "#fff",
            height: "94%",
          }}
        >
          <ProductionChart show={open} code={code} i={i} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
