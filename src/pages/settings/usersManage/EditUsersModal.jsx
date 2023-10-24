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
import { useFormik } from "formik";

let base_url = "https://farmdriver.savas.ma/api/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // border: "2px solid transparent",
  boxShadow: 24,
  width: 600,
  // p: 1,
};

export default function EditModal({
  openEditModal,
  setOpenEditModal,
  siteName,
}) {
  let userName = useSelector((state) => state.toggleLeftBar.userName);
  let email = useSelector((state) => state.toggleLeftBar.email);
  let phone = useSelector((state) => state.toggleLeftBar.phone);
  let firstName = useSelector((state) => state.toggleLeftBar.firstName);
  let lastName = useSelector((state) => state.toggleLeftBar.lastName);
  let isAdmin = useSelector((state) => state.toggleLeftBar.isAdmin);
  let site = useSelector((state) => state.toggleLeftBar.site);
  let siteId = useSelector((state) => state.toggleLeftBar.siteId);

  const handleClose = () => setOpenEditModal(false);
  const newSiteName = siteName.filter((site) => site.id !== siteId);
  const currentSiteName = siteName.filter((site) => site.id === siteId);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      first_name: "",
      last_name: "",
      isAdmin: "",
      site: "",
    },
    onSubmit: (values) => {
      console.log(values);
      UpdateUser(values);
    },
  });
  const UpdateUser = async (data) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}update-user-site/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        data = {};
      }
      const datas = await response.data;
      console.log(datas);
      if (response.ok) {
        console.log("L'utilisateur a été modifié ");
        // handleOpen();
      } else {
        setLoading(false);
        const errorMessage = "Un utilisateur avec ce identifiant existe déjà";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    formik.setValues({
      ...formik.values,
      username: userName,
      email: email,
      phone: phone,
      first_name: firstName,
      last_name: lastName,
      isAdmin: isAdmin,
      site: site,
    });
    console.log(formik.values.isAdmin);
  }, []);
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
            <div className="edit-user slit-in-horizontal">
              <h3>Modifier l'utilisateur </h3>

              <form
                className="settings-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <label>
                  <input
                    id="username"
                    name="username"
                    className="input"
                    type="text"
                    placeholder=" "
                    onFocus={() => dispatch(clearInputs(false))}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <span>Identifiant*</span>
                </label>

                <label>
                  <input
                    id="email"
                    name="email"
                    className="input"
                    type="email"
                    placeholder=" "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <span>E-mail</span>
                </label>
                <label>
                  <input
                    id="phone"
                    name="phone"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <span>Télephone</span>
                </label>

                <label>
                  <input
                    id="firstName"
                    name="first_ame"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <span>Nom*</span>
                </label>
                <label>
                  <input
                    id="lastName"
                    name="last_name"
                    className="input"
                    type="text"
                    placeholder=" "
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onFocus={() => dispatch(clearInputs(false))}
                  />
                  <span>Prénom*</span>
                </label>
                <div className="flex">
                  <label>
                    <select
                      id="admin"
                      name="isAdmin"
                      className="input"
                      onFocus={() => dispatch(clearInputs(false))}
                      value={formik.values.isAdmin}
                      onChange={formik.handleChange}
                    >
                      <option value={formik.values.isAdmin}>
                        {formik.values.isAdmin == true ? "Oui" : "Non"}
                      </option>
                      <option value={!formik.values.isAdmin}>
                        {!formik.values.isAdmin ? "Oui" : "Non"}
                      </option>
                    </select>
                    <span>Admin*</span>
                  </label>
                  <label>
                    <select
                      id="site"
                      name="site"
                      className="input"
                      onFocus={() => dispatch(clearInputs(false))}
                      value={formik.values.site}
                      onChange={formik.handleChange}
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
                    <span>Sites*</span>
                  </label>
                </div>
                <div className="btns">
                  <button type="submit" className="edit-btn">
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
