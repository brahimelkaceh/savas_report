import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { clearInputs, handleCloseEditModal } from "../../../slices/LeftBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 3,
  zIndex: 10000,
};

export default function ConfirmModal({ setOpen, open, message, onSubmit }) {
  console.log(open);
  const handleClose = () => {
    setOpen(false);
    // console.log(editModal);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        // onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
          <div className="confirm-btns">
            <button
              className="confirm type1"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                onSubmit();
              }}
            >
              <span className="btn-txt">Ok</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
