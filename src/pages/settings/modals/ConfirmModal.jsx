import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 24,
  p: 3,
};

export default function ConfirmModal({ setOpen, open, message, onSubmit }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal ">
          <Typography id="modal-modal-title" variant="p" component="h4">
            {message}
          </Typography>
          <div className="confirm-btns">
            <button
              className="confirm type1"
              type="submit"
              onClick={() => {
                onSubmit();
                handleClose();
              }}
            >
              <span className="btn-txt">Ok</span>
            </button>
            <button
              type=""
              className="cancel-btn"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <span>Cancel</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
