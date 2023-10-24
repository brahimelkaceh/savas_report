import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";
import ConfirmModal from "../modals/ConfirmModal";
import { clearInputs } from "../../../slices/LeftBar";

export default function BatsManage({ CreateBatiments, setAlert, siteName }) {
  const [open, setOpen] = useState(false);
  const [site, SetSite] = useState("");

  let batmntRef = useRef();
  let siteNameRef = useRef();
  let typeRef = useRef();
  const dispatch = useDispatch();

  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  if (inputs) {
    batmntRef.current.value = "";
    siteNameRef.current.value = "";
    typeRef.current.value = "";
  }
  const sendData = () => {
    let batmntData = {
      name: batmntRef.current.value,
      site: parseInt(siteNameRef.current.value),
      typeOf: typeRef.current.value,
    };

    if (batmntData.name.trim() && batmntData.site && batmntData.typeOf.trim()) {
      CreateBatiments(batmntData);
      console.log(batmntData);
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="create-bats">
      <ConfirmModal setOpen={setOpen} open={open} />
      <form className="settings-form">
        <p className="title">Gestion des Bâtiments </p>
        <label>
          <input
            required
            ref={batmntRef}
            id="batiment"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <span>Bâtiment</span>
        </label>
        <label>
          <select
            required
            ref={typeRef}
            id="production"
            className="input"
            onFocus={() => dispatch(clearInputs(false))}
          >
            <option value="" disabled>
              --
            </option>
            <option value="production">Production</option>
            <option value="poussiniere">Poussiniere</option>
          </select>
          <span> Production/Poussiniere*</span>
        </label>
        <label>
          <select
            required
            ref={siteNameRef}
            id="siteNames"
            className="input"
            onFocus={() => dispatch(clearInputs(false))}
            onChange={(e) => SetSite(e.target.value)}
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
          <span> Sites*</span>
        </label>

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
        </div>
      </form>
    </div>
  );
}
