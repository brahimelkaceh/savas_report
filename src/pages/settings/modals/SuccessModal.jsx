import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 3,
};

export default function SuccessModal({ setOpen, open, message, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={onClose}
      >
        <Box sx={style} className="confirm-modal ">
          <Typography id="modal-modal-title" variant="p" component="h4">
            {message}
          </Typography>
          <div className="confirm-btns">
            <button className="confirm type1" type="submit" onClick={onClose}>
              <span className="btn-txt">Ok</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
