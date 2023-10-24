import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import { useState } from "react";
let base_url = "https://farmdriver.savas.ma/api/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function DeleteSiteModal({
  openDeleteModal,
  setOpenDeleteModal,
  id,
}) {
  const [siteId, setSiteId] = useState(0);
  const apiUrl = useMemo(
    () => `${base_url}delete-site/?id=${siteId}`,
    [base_url, siteId]
  );

  UseFetchData(apiUrl);
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
                Êtes-vous sûr(e) de vouloir supprimer cet élément ? Cette action
                ne peut pas être annulée
              </p>
              <div className="btns">
                <button
                  type=""
                  className="delete-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSiteId(id);
                    setTimeout(() => {
                      handleClose();
                    }, [500]);
                  }}
                >
                  Supprimer
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
