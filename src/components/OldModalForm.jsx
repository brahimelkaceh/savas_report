import { useRef, useState } from "react";
import { useGlobalContext } from "../hooks/Context";
import { FaTimes } from "react-icons/fa";
import SendBtn from "./buttons/SendBtn";

const OldModalForm = ({ CreateReports, currentBat }) => {
  const { closeModal } = useGlobalContext();

  let soucheRef = useRef();
  let effectifRef = useRef();
  let ageRef = useRef();
  let dateNsnRef = useRef();
  let dateMisPlcRef = useRef();
  let dateTrnsRef = useRef();
  let reformRef = useRef();
  const modifieLot = (e) => {
    e.preventDefault();
    let url =
      "https://savas-app-2000-default-rtdb.firebaseio.com/lotReform.json";

    let lot = {
      lotId: currentBat + soucheRef.current.value.split(" ").join(""),
      batiment: currentBat,
      souche: soucheRef.current.value,
      effectif: effectifRef.current.value,
      age: ageRef.current.value,
      dateNsn: dateNsnRef.current.value,
      dateMisPlc: dateMisPlcRef.current.value,
      dateTrns: dateTrnsRef.current.value,
      reform: reformRef.current.value,
    };
    // console.log(lot);

    CreateReports(lot, url);
  };
  return (
    <div className="modal-container">
      <div style={{ width: "70%" }}>
        <h3> {currentBat} Déja Existe</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <form className="form">
          <div className="input-container ic2">
            <select ref={soucheRef} name="souche" id="souche" className="input">
              <option value="">--</option>
              <option value="HISEX 2022">HISEX 2022</option>
              <option value="HYLINE 2018">HYLINE 2018</option>
              <option value="HYLINE 2022">HYLINE 2022</option>
              <option value="LOHMANNE 2022">LOHMANNE 2022</option>
            </select>
            <label htmlFor="souche" className="placeholder">
              Souches
            </label>
          </div>
          <div className="input-container ic2">
            <input
              ref={effectifRef}
              id="effectif"
              className="input"
              type="number"
              placeholder=" "
              name="effectif"
            />
            <div className="cut"></div>
            <label htmlFor="effectif" className="placeholder">
              Effectif
            </label>
          </div>
          <div className="input-container ic2">
            <input
              ref={ageRef}
              name="age"
              id="age"
              className="input"
              type="number"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="age" className="placeholder">
              Age en jour
            </label>
          </div>
          <div className="input-container ic2">
            <input
              ref={dateNsnRef}
              name="dateNaissance"
              id="date-naissance"
              className="input"
              type="date"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="date-naissance" className="placeholder">
              Date de naissance
            </label>
          </div>
          <div className="input-container ic2">
            <input
              ref={dateMisPlcRef}
              name="dateMisePlace"
              id="date-mise-place"
              className="input"
              type="date"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="date-mise-place" className="placeholder">
              Date de mise en place
            </label>
          </div>
          <div className="input-container ic2">
            <input
              ref={dateTrnsRef}
              name="dateTransfert"
              id="date-transfert"
              className="input"
              type="date"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="date-transfert" className="placeholder">
              Date de transfert
            </label>
          </div>

          <div className="check-input-container ic2">
            <label htmlFor="reform-lot" className="placehold">
              En Reformée
            </label>
            <input
              ref={reformRef}
              type="checkbox"
              name="reformLot"
              id="reform-lot"
              className="checkbox-input"
            />
          </div>

          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
export default OldModalForm;
