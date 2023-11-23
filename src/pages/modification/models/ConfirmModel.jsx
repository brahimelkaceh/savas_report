import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getRefreshData, getRenderData } from "../../../slices/SiteData";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
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
          <Typography id="modal-modal-title" variant="p" component="h4">
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
                setTimeout(() => {
                  dispatch(getRefreshData(new Date().toString()));
                }, 500);
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
