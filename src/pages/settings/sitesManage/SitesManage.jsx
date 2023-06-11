import { useRef, useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { clearInputs } from "../../../slices/LeftBar";

function SitesManage({ CreateSite, setAlert }) {
  const [open, setOpen] = useState(false);

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
            <option value="Tanger - Tétouan - Al Hoceima">
              Tanger - Tétouan - Al Hoceima
            </option>
            <option value="L'Oriental">L'Oriental</option>
            <option value="Fès - Meknès">Fès - Meknès</option>
            <option value="Rabat - Salé - Kénitra">
              Rabat - Salé - Kénitra
            </option>
            <option value="Beni Mellal - Khénifra">
              Beni Mellal - Khénifra
            </option>
            <option value="Casablanca - Settat">Casablanca - Settat</option>
            <option value="Marrakech - Safi">Marrakech - Safi</option>
            <option value="Drâa - Tafilalet">Drâa - Tafilalet</option>
            <option value="Souss -Massa">Souss -Massa</option>
            <option value="Guelmim - Oued Noun">Guelmim - Oued Noun</option>
            <option value="Laâyoune - Saguia al Hamra">
              Laâyoune - Saguia al Hamra
            </option>
            <option value="Dakhla - Oued Ed-Dahab">
              Dakhla - Oued Ed-Dahab
            </option>
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
