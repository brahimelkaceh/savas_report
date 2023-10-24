import Modal from "@mui/material/Modal";
import Box from "@mui/material";
import Fade from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // border: "2px solid transparent",
  boxShadow: 24,
  // p: 1,
};
const EditReportModal = ({ openEditModal, setOpenEditModal }) => {
  const handleClose = () => setOpenEditModal(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openEditModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openEditModal}>
        <Box sx={style} className="edit-modal">
          <div className="edit-user slit-in-horizontal">
            <h3>Modifier le Rapport </h3>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditReportModal;
