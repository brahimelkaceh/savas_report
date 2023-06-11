import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import "../modals/style.css";
import { useEffect } from "react";
import { clearInputs } from "../../../slices/LeftBar";

let base_url = "https://pouliprod.savas.ma/api/";

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

export default function EditModal({
  UpdateUserData,
  openEditModal,
  setOpenEditModal,
  siteName,
  setAlert,
}) {
  let id = useSelector((state) => state.toggleLeftBar.id);
  let userName = useSelector((state) => state.toggleLeftBar.userName);
  let email = useSelector((state) => state.toggleLeftBar.email);
  let phone = useSelector((state) => state.toggleLeftBar.phone);
  let firstName = useSelector((state) => state.toggleLeftBar.firstName);
  let lastName = useSelector((state) => state.toggleLeftBar.lastName);
  let isAdmin = useSelector((state) => state.toggleLeftBar.isAdmin);
  let site = useSelector((state) => state.toggleLeftBar.site);
  let siteId = useSelector((state) => state.toggleLeftBar.siteId);
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);
  let editModal = useSelector((state) => state.toggleLeftBar.editModal);

  const handleClose = () => setOpenEditModal(false);
  const newSiteName = siteName.filter((site) => site.id !== siteId);
  const currentSiteName = siteName.filter((site) => site.id === siteId);
  const [newUsername, setNewUsername] = useState(userName);
  const [name, setName] = useState(siteId);
  const [is_Admin, SetIsAdmin] = useState("");

  // const [loading, setLoading] = useState(false);
  // const [usersData, setUsersData] = useState();

  const dispatch = useDispatch();

  let usernameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let isAdimnRef = useRef();
  let siteRef = useRef();

  // if (inputs) {
  //   usernameRef.current.value = "";
  //   emailRef.current.value = "";
  //   phoneRef.current.value = "";
  //   firstNameRef.current.value = "";
  //   lastNameRef.current.value = "";
  //   isAdimnRef.current.value = "";
  //   siteRef.current.value = "";
  // }

  const sendData = () => {
    let userData = {
      user_id: id,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      isAdmin: Boolean(isAdimnRef.current.value),
      site: parseInt(siteRef.current.value),
    };

    if (
      userData.username.trim() &&
      userData.first_name.trim() &&
      userData.last_name.trim() &&
      (userData.isAdmin === true || userData.isAdmin === false) &&
      userData.site
    ) {
      UpdateUserData(userData);
      // console.log(userData.username);
    } else {
      setAlert(true);
    }
  };

  return (
    <div>
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
            <div className="create-user slit-in-horizontal">
              <h3>Modifier l'utilisateur {id}</h3>

              <form action="">
                <div className="input-container ic2">
                  <input
                    ref={usernameRef}
                    id="identifiant"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={newUsername}
                    onFocus={() => dispatch(clearInputs(false))}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="identifiant" className="placeholder">
                    Identifiant*
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    ref={emailRef}
                    id="email"
                    className="input"
                    type="email"
                    placeholder=" "
                    defaultValue={email}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="email" className="placeholder">
                    E-mail
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    ref={phoneRef}
                    id="phone"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={phone}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="phone" className="placeholder">
                    Télephone
                  </label>
                </div>

                <div className="input-container ic2">
                  <input
                    ref={firstNameRef}
                    id="firstName"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={firstName}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="firstName" className="placeholder">
                    Nom*
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    ref={lastNameRef}
                    id="lastName"
                    className="input"
                    type="text"
                    placeholder=" "
                    defaultValue={lastName}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <div className="cut"></div>
                  <label htmlFor="lastName" className="placeholder">
                    Prénom*
                  </label>
                </div>
                <div className="input-container ic2">
                  <select
                    id="admin"
                    className="input"
                    ref={isAdimnRef}
                    // defaultValue={isAdmin}
                    // value={isAdmin}
                    onFocus={() => dispatch(clearInputs(false))}
                    onChange={(e) => SetIsAdmin(e.target.value)}
                  >
                    <option value={is_Admin}>
                      {isAdmin === true ? "Oui" : "Non"}
                    </option>
                    <option value={!is_Admin}>
                      {!isAdmin ? "Oui" : "Non"}
                    </option>

                    {/* <option value="true">Oui</option>
                    <option value="">Non</option> */}
                  </select>
                  <label htmlFor="admin" className="placeholder">
                    Admin*
                  </label>
                </div>
                <div className="input-container ic2">
                  <select
                    ref={siteRef}
                    id="site"
                    className="input"
                    value={name}
                    onFocus={() => dispatch(clearInputs(false))}
                    onChange={(e) => setName(e.target.value)}
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
// update-user-site/
