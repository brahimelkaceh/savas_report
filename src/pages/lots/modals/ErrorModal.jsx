import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid transparent",
  width: 500,
};

export default function ErrorModal({
  openDeleteModal,
  setOpenDeleteModal,
  error,
}) {
  console.log(error);
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
              <p>
                {/* La suppression de cet élément le supprimera définitivement du
                système. Voulez-vous vraiment continuer ? */}
                {error}
              </p>
              <div className="btns">
                <button
                  type=""
                  className="delete-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                  }}
                >
                  <span>Ok</span>
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
