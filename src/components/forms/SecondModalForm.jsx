import React from "react";
import EditBtn from "../buttons/EditBtn";
import SendBtn from "../buttons/SendBtn";
import { useDispatch, useSelector } from "react-redux";
import { setDisabled } from "../../slices/DisabledInput";

const SecondModalForm = () => {
  const disabled = useSelector((state) => state.disabledInput.disabled);
  const dispatch = useDispatch();
  return (
    <form className="form">
      <div className="input-container ic2">
        <select name="souche" id="souche" className="input" disabled={disabled}>
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
          id="effectif"
          className="input"
          type="number"
          placeholder=" "
          name="effectif"
          disabled={disabled}
        />
        <div className="cut"></div>
        <label htmlFor="effectif" className="placeholder">
          Effectif
        </label>
      </div>
      <div className="input-container ic2">
        <input
          name="age"
          id="age"
          className="input"
          type="number"
          placeholder=" "
          disabled={disabled}
        />
        <div className="cut"></div>
        <label htmlFor="age" className="placeholder">
          Age en jour
        </label>
      </div>
      <div className="input-container ic2">
        <input
          name="dateNaissance"
          id="date-naissance"
          className="input"
          type="date"
          placeholder=" "
          disabled={disabled}
        />
        <div className="cut"></div>
        <label htmlFor="date-naissance" className="placeholder">
          Date de naissance
        </label>
      </div>
      <div className="input-container ic2">
        <input
          name="dateMisePlace"
          id="date-mise-place"
          className="input"
          type="date"
          placeholder=" "
          disabled={disabled}
        />
        <div className="cut"></div>
        <label htmlFor="date-mise-place" className="placeholder">
          Date de mise en place
        </label>
      </div>
      <div className="input-container ic2">
        <input
          name="dateTransfert"
          id="date-transfert"
          className="input"
          type="date"
          placeholder=" "
          disabled={disabled}
        />
        <div className="cut"></div>
        <label htmlFor="date-transfert" className="placeholder">
          Date de transfert
        </label>
      </div>

      <div
        className={`${
          disabled
            ? "checkbox-input-container-disabled ic2"
            : "check-input-container ic2"
        }`}
      >
        <label htmlFor="reform-lot" className="placehold">
          En Reformée
        </label>
        <input
          type="checkbox"
          name="reformLot"
          id="reform-lot"
          className="checkbox-input"
          disabled={disabled}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <SendBtn disabled={disabled} />
        <EditBtn disabled={disabled} />
      </div>
    </form>
  );
};

export default SecondModalForm;
