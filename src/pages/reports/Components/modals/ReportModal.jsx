import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import DataTable from "../tables/DataTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 620,
  boxShadow: 24,
  p: 3,
  textAlign: "left",
};

export default function ReportModal({
  setOpen,
  open,
  onSubmit,
  data,
  batimentName,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  console.log(batimentName);
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
          {data && <DataTable data={data} />}
          <Typography
            id="modal-modal-title"
            variant="p"
            component="h4"
            paddingTop={1.5}
          >
            Êtes-vous sûr de vouloir envoyer ces données ?
          </Typography>
          <div className="btns">
            <button
              type=""
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                onSubmit();
              }}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <AiOutlineSend />
                </div>
              </div>
              <span>Submit</span>
            </button>
            <button
              type=""
              className="cancel-btn"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                // sendData();
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
