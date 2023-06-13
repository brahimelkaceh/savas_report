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
      <h3>Gestion des Bâtiments</h3>
      <ConfirmModal setOpen={setOpen} open={open} />
      <form action="">
        <div className="input-container ic2">
          <input
            ref={batmntRef}
            id="batiment"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
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
            onFocus={() => dispatch(clearInputs(false))}
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
            ref={siteNameRef}
            id="siteNames"
            className="input"
            onFocus={() => dispatch(clearInputs(false))}
            onChange={(e) => SetSite(e.target.value)}
          >
            <option value="">--</option>
            {siteName?.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
          <label htmlFor="site" className="placeholder">
            Sites*
          </label>
        </div>
        <button
          className="send-btn"
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
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}
