import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiFillDelete } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};

export default function DeleteUsersModal({
  openDeleteModal,
  setOpenDeleteModal,
}) {
  const handleClose = () => setOpenDeleteModal(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openDeleteModal}>
          <Box sx={style} className="edit-modal ">
            <div style={{}} className="delete-modal slit-in-horizontal">
              <h1> Attention</h1>
              <p>
                La suppression de cet élément le supprimera définitivement de
                votre compte. Êtes-vous certain(e) de vouloir continuer ?
                Cliquez sur 'Supprimer' pour confirmer ou sur 'Annuler' pour
                conserver l'élément.
              </p>
              <div className="btns">
                <button
                  type=""
                  className="delete-btn"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   sendData();
                  // }}
                >
                  {/* <div className="svg-wrapper-1"> */}
                  {/* <div className="svg-wrapper"> */}
                  <AiFillDelete />
                  {/* </div>
                </div> */}
                  <span>Supprimer</span>
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
                  <span>Annuler</span>
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
