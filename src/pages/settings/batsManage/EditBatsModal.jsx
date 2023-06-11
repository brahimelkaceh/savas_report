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

export default function EditBatsModal({ open, setOpen }) {
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
              <h3>Modifier bâtiment</h3>
              {/* <ConfirmModal setOpen={setOpen} open={open} /> */}
              <form action="">
                <div className="input-container ic2">
                  <input
                    // ref={batmntRef}
                    id="batiment"
                    className="input"
                    type="text"
                    placeholder=" "
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="batiment" className="placeholder">
                    Bâtiment
                  </label>
                </div>

                <div className="input-container ic2">
                  <select
                    // ref={typeRef}
                    id="production"
                    className="input"
                    // onFocus={() => dispatch(clearInputs(false))}
                  >
                    <option value="">--</option>
                    <option value="production">Production</option>
                    <option value="poussiniere">Poussiniere</option>
                  </select>
                  <label htmlFor="production  " className="placeholder">
                    Production/Poussiniere*
                  </label>
                </div>
                <div className="input-container ic2">
                  <select
                    // ref={siteNameRef}
                    id="siteNames"
                    className="input"
                    // onFocus={() => dispatch(clearInputs(false))}
                    // onChange={(e) => SetSite(e.target.value)}
                  >
                    <option value="">--</option>
                    {/* {siteName?.map((site) => (
                      <option key={site.id} value={site.id}>
                        {site.name}
                      </option>
                    ))} */}
                  </select>
                  <label htmlFor="site" className="placeholder">
                    Sites*
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
