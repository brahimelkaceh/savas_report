import { useRef, useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { clearInputs } from "../../../slices/LeftBar";

function SitesManage({ CreateSite, setAlert }) {
  const [open, setOpen] = useState(false);
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

  let siteRef = useRef();
  let regionRef = useRef();
  let phoneRef = useRef();
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);
  const dispatch = useDispatch();

  if (inputs) {
    siteRef.current.value = "";
    regionRef.current.value = "";
    phoneRef.current.value = "";
  }
  const sendData = () => {
    let siteData = {
      name: siteRef.current.value,
      region: regionRef.current.value,
      phone: phoneRef.current.value,
    };

    if (
      siteData.name.trim() &&
      siteData.region.trim() &&
      siteData.phone.trim()
    ) {
      CreateSite(siteData);
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="create-site slit-in-horizontal">
      <h3>Gestion des sites</h3>
      <ConfirmModal setOpen={setOpen} open={open} />
      <form action="">
        <div className="input-container ic2">
          <input
            ref={siteRef}
            id="siteName"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
          />
          <div className="cut"></div>
          <label htmlFor="siteName" className="placeholder">
            Site*
          </label>
        </div>
        <div className="input-container ic2">
          <input
            ref={phoneRef}
            id="sitePhone"
            className="input"
            type="text"
            placeholder=" "
            onFocus={() => dispatch(clearInputs(false))}
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
            onFocus={() => dispatch(clearInputs(false))}
          >
            <option value="">--</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
          <label htmlFor="siteSities" className="placeholder">
            Region*
          </label>
        </div>
        <button
          type="submit"
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

export default SitesManage;
