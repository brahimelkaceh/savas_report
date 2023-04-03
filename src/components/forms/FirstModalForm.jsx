import React from "react";
import SendBtn from "../buttons/SendBtn";
const FirstModalForm = () => {
  return (
    <form className="form">
      <div className="input-container ic2">
        <select name="souche" id="souche" className="input">
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
        />
        <div className="cut"></div>
        <label htmlFor="date-transfert" className="placeholder">
          Date de transfert
        </label>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <SendBtn />
      </div>
    </form>
  );
};

export default FirstModalForm;
