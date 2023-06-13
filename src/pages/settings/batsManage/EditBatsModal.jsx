import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Typography from "@mui/material/Typography";
import "../modals/style.css";
import { Padding } from "@mui/icons-material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
};

export default function EditBatsModal({
  UpdateBatimentData,
  siteName,
  open,
  setOpen,
}) {
  let batId = useSelector((state) => state.getSiteData.batId);
  let batName = useSelector((state) => state.getSiteData.batName);
  let batType = useSelector((state) => state.getSiteData.batType);
  let batSite = useSelector((state) => state.getSiteData.batSite);

  const [batimentType, setBatimentType] = useState("");
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  const newSiteName = siteName.filter((site) => site.id !== batSite);
  const currentSiteName = siteName.filter((site) => site.id === batSite);

  let batmntRef = useRef();
  let siteNameRef = useRef();
  let typeRef = useRef();

  // if (inputs) {
  //   batmntRef.current.value = "";
  //   siteNameRef.current.value = "";
  //   typeRef.current.value = "";
  // }
  const sendData = () => {
    let batimentData = {
      bat_id: batId,
      name: batmntRef.current.value,
      site_id: siteNameRef.current.value,
      type: typeRef.current.value,
    };

    if (
      batimentData.name.trim() &&
      batimentData.site_id &&
      batimentData.type.trim()
    ) {
      UpdateBatimentData(batimentData);
      // console.log(batimentData);
    } else {
      setAlert(true);
    }
  };

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
                    ref={batmntRef}
                    id="batiment"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={batName}
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="batiment" className="placeholder">
                    Bâtiment
                  </label>
                </div>

                <div className="input-container ic2">
                  <select
                    ref={typeRef}
                    id="production"
                    className="input"
                    // defaultValue={batimentType}
                    onChange={(e) => setBatimentType(e.target.value)}
                    // onFocus={() => dispatch(clearInputs(false))}
                  >
                    <option value={"Production"}>
                      {batType == "production" ? "Production" : "Poussiniere"}
                    </option>
                    <option value={"poussiniere"}>
                      {!batType == "production" ? "Production" : "Poussiniere"}
                    </option>
                  </select>
                  <label htmlFor="production  " className="placeholder">
                    Production/Poussiniere*
                  </label>
                </div>
                <div className="input-container ic2">
                  <select
                    ref={siteNameRef}
                    id="siteNames"
                    className="input"
                    // onFocus={() => dispatch(clearInputs(false))}
                    // onChange={(e) => SetSite(e.target.value)}
                  >
                    {currentSiteName.map((site) => (
                      <option key={site.id} value={site.id}>
                        {site.name}
                      </option>
                    ))}
                    {newSiteName.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="site" className="placeholder">
                    Sites*
                  </label>
                </div>
                <div className="btns">
                  <button
                    type=""
                    className="edit-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      sendData();
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
