import ConfirmModal from "../modals/ConfirmModal";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { clearInputs } from "../../../slices/LeftBar";
import { useState } from "react";
import { useFormik } from "formik";
let base_url = "https://farmdriver.savas.ma/api/";

function SitesManage({ setOpen, open }) {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    onSubmit: (values) => {
      CreateSite(values);
      formik.handleReset();
    },
  });
  const CreateSite = async (data) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}create-site/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        console.log("Le site a été ajouté au système");
      } else {
        data = {};
        const errorMessage = "Site existe déjà";
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="create-site slit-in-horizontal">
      {open && (
        <ConfirmModal
          setOpen={setOpen}
          open={open}
          onSubmit={formik.handleSubmit}
          message={message}
        />
      )}
      <form
        className="settings-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="title">Gestion des sites </p>
        <label>
          <input
            required
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span>Site</span>
        </label>
        <label>
          <input
            required
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="input"
            type="text"
            placeholder=""
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span> Télephone*</span>
        </label>

        <div className="btns">
          <button
            className="edit-btn"
            type="submit"
            disabled={
              formik.values.name.length == 0 || formik.values.phone.length == 0
            }
            onClick={(e) => {
              setMessage(
                "Êtes-vous sûr(e) de vouloir soumettre ce formulaire ?"
              );
              setOpen(true);
            }}
          >
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

export default SitesManage;
