import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineSend } from "react-icons/ai";

import Typography from "@mui/material/Typography";
import "../modals/style.css";
import { Padding } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // border: "2px solid transparent",
  boxShadow: 24,
  // p: 1,
};

export default function EditSitesModal({
  open,
  setOpen,
  setAlert,
  UpdateSiteData,
}) {
  const [regions, setRegions] = useState([
    {
      id: "Tanger - Tétouan - Al Hoceima",
      name: "Tanger - Tétouan - Al Hoceima",
    },
    {
      id: "L'Oriental",
      name: "L'Oriental",
    },
    { id: "Fès - Meknès", name: "Fès - Meknès" },
    { id: "Rabat - Salé - Kénitra", name: "Rabat - Salé - Kénitra" },
    { id: "Beni Mellal - Khénifra", name: "Beni Mellal - Khénifra" },
    { id: "Casablanca - Settat", name: "Casablanca - Settat" },
    { id: "Marrakech - Safi", name: "Marrakech - Safi" },
    { id: "Drâa - Tafilalet", name: "Drâa - Tafilalet" },
    { id: "Souss -Massa", name: "Souss -Massa" },
    { id: "Guelmim - Oued Noun", name: "Guelmim - Oued Noun" },
    { id: "Laâyoune - Saguia al Hamra", name: "Laâyoune - Saguia al Hamra" },
    { id: "Dakhla - Oued Ed-Dahab", name: "Dakhla - Oued Ed-Dahab" },
  ]);

  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  let siteId = useSelector((state) => state.getSiteData.siteId);
  let siteName = useSelector((state) => state.getSiteData.siteName);
  let sitePhone = useSelector((state) => state.getSiteData.sitePhone);
  let region = useSelector((state) => state.getSiteData.region);

  const newRegions = regions.filter((reg) => reg.id !== region);
  const currentRegion = regions.filter((reg) => reg.id === region);

  const handleClose = () => setOpen(false);

  let siteNameRef = useRef();
  let sitePhoneRef = useRef();
  let regionRef = useRef();

  if (inputs) {
    siteNameRef.current.value = "";
    sitePhoneRef.current.value = "";
    regionRef.current.value = "";
  }
  const sendData = () => {
    let siteData = {
      id: siteId,
      name: siteNameRef.current.value,
      region: sitePhoneRef.current.value,
      phone: regionRef.current.value,
    };

    if (
      siteData.name.trim() &&
      siteData.region.trim() &&
      siteData.phone.trim()
    ) {
      UpdateSiteData(siteData);
      // console.log(siteData);
    } else {
      setAlert(true);
    }
  };

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
            <div className="edit-site slit-in-horizontal">
              <h3>Modifier Site</h3>
              {/* <ConfirmModal setOpen={setOpen} open={open} /> */}
              <form action="">
                <div className="input-container ic2">
                  <input
                    ref={siteNameRef}
                    id="siteName"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={siteName}
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="siteName" className="placeholder">
                    Site*
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    ref={sitePhoneRef}
                    id="sitePhone"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={sitePhone}
                    // onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="sitePhone" className="placeholder">
                    Télephone*
                  </label>
                </div>

                <div className="input-container ic2">
                  <select
                    ref={regionRef}
                    id="siteSities"
                    className="input"
                    // onFocus={() => dispatch(clearInputs(false))}
                  >
                    {currentRegion.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                    {newRegions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="siteSities" className="placeholder">
                    Region*
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
                      sendData();
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
