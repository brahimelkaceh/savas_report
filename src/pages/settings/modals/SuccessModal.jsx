import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getRenderData } from "../../../slices/SiteData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 3,
};

export default function SuccessModal({ open, message, onClose }) {
  let renderData = useSelector((state) => state.getSiteData.renderData);
  const dispatch = useDispatch();

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
            <button
              className="confirm type1"
              type="submit"
              onClick={() => {
                onClose();
                dispatch(getRenderData(new Date().toISOString()));
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
