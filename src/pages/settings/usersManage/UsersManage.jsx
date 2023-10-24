import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { clearInputs } from "../../../slices/LeftBar";
import ConfirmModal from "../modals/ConfirmModal";
let base_url = "https://farmdriver.savas.ma/api/";

function UsersManage({ setAlert, siteName }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      first_name: "",
      last_name: "",
      role: "",
      site: "",
    },
    onSubmit: (values) => {
      CreateUsers(formik.values);
      formik.handleReset();
    },
  });

  const CreateUsers = async (data) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}user-register/`, {
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
      if (response.ok) {
        console.log("L'utilisateur a été ajouté au système");
        handleOpen();
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
    formik.initialValues;
  }, []);
  return (
    <div className="create-user slit-in-horizontal">
      {open && (
        <ConfirmModal
          open={open}
          setOpen={setOpen}
          onSubmit={formik.handleSubmit}
          message={"are you sure you want to submit this"}
        />
      )}
      <form
        className="settings-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="title">Gestion d'utilisateurs </p>
        {/* <p className="message">Login now and get full access to our app. </p> */}

        <label>
          <input
            required
            name="username"
            value={formik?.values.username}
            onChange={formik?.handleChange}
            id="username"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span>Identifiant</span>
        </label>

        <label>
          <input
            required
            value={formik?.values.email}
            onChange={formik?.handleChange}
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            id="phone"
            name="phone"
            value={formik?.values.phone}
            onChange={formik?.handleChange}
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span>Telephone</span>
        </label>
        <label>
          <input
            placeholder=""
            type="password"
            className="input"
            name="password"
            value={formik?.values.password}
            onChange={formik?.handleChange}
            id="password"
            required
          />
          <span>Password</span>
        </label>
        <div className="flex">
          <label>
            <input
              required
              id="firstName"
              name="first_name"
              value={formik?.values.first_name}
              onChange={formik?.handleChange}
              className="input"
              type="text"
              placeholder=" "
              onFocus={() => dispatch(clearInputs(false))}
            />
            <span>Prénom</span>
          </label>
          <label>
            <input
              required
              id="lastName"
              className="input"
              name="last_name"
              value={formik?.values.last_name}
              onChange={formik?.handleChange}
              type="text"
              placeholder=" "
              onFocus={() => dispatch(clearInputs(false))}
            />
            <span>Nom</span>
          </label>
        </div>
        <div className="flex">
          <label className="select">
            <select
              className="input"
              name="isAdmin"
              onFocus={() => dispatch(clearInputs(false))}
              value={formik?.values.role}
              onChange={(e) => {
                formik?.handleChange(e);
              }}
            >
              <option value={2}>Admin</option>
              <option value={3}>Technicien</option>
              <option value={4}>Consultant d'un site</option>
              <option value={5}>Consultant global</option>
            </select>
            <span>Role</span>
          </label>
          <label className="select">
            <select
              id="site "
              className="input"
              name="site"
              value={formik?.values.site}
              onChange={formik?.handleChange}
              onFocus={() => dispatch(clearInputs(false))}
            >
              <option value="" disabled>
                --
              </option>
              {siteName?.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name}
                </option>
              ))}
            </select>
            <span>Site</span>
          </label>
        </div>
        <div className="btns" onClick={(e) => setOpen(true)}>
          <button type="submit" className="edit-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <AiOutlineSend />
              </div>
            </div>
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UsersManage;
