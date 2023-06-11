import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineSend } from "react-icons/ai";

import Typography from "@mui/material/Typography";
import "../modals/style.css";
import { Padding } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // border: "2px solid transparent",
  boxShadow: 24,
  // p: 1,
};

export default function EditSitesModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="edit-modal">
            <div className="create-site slit-in-horizontal">
              <h3>Modifier Site</h3>
              {/* <ConfirmModal setOpen={setOpen} open={open} /> */}
              <form action="">
                <div className="input-container ic2">
                  <input
                    // ref={siteRef}
                    id="siteName"
                    className="input"
                    type="text"
                    placeholder=" "
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="siteName" className="placeholder">
                    Site*
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    // ref={phoneRef}
                    id="sitePhone"
                    className="input"
                    type="text"
                    placeholder=" "
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="sitePhone" className="placeholder">
                    Télephone*
                  </label>
                </div>

                <div className="input-container ic2">
                  <select
                    // ref={regionRef}
                    id="siteSities"
                    className="input"
                    // onFocus={() => dispatch(clearInputs(false))}
                  >
                    <option value="">--</option>
                    <option value="Tanger - Tétouan - Al Hoceima">
                      Tanger - Tétouan - Al Hoceima
                    </option>
                    <option value="L'Oriental">L'Oriental</option>
                    <option value="Fès - Meknès">Fès - Meknès</option>
                    <option value="Rabat - Salé - Kénitra">
                      Rabat - Salé - Kénitra
                    </option>
                    <option value="Beni Mellal - Khénifra">
                      Beni Mellal - Khénifra
                    </option>
                    <option value="Casablanca - Settat">
                      Casablanca - Settat
                    </option>
                    <option value="Marrakech - Safi">Marrakech - Safi</option>
                    <option value="Drâa - Tafilalet">Drâa - Tafilalet</option>
                    <option value="Souss -Massa">Souss -Massa</option>
                    <option value="Guelmim - Oued Noun">
                      Guelmim - Oued Noun
                    </option>
                    <option value="Laâyoune - Saguia al Hamra">
                      Laâyoune - Saguia al Hamra
                    </option>
                    <option value="Dakhla - Oued Ed-Dahab">
                      Dakhla - Oued Ed-Dahab
                    </option>
                  </select>
                  <label htmlFor="siteSities" className="placeholder">
                    Region*
                  </label>
                </div>
                <div className="btns">
                  <button
                    type=""
                    className="edit-btn"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   sendData();
                    // }}
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
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
