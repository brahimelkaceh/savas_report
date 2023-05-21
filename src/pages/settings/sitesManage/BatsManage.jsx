import React from "react";
import { AiOutlineSend } from "react-icons/ai";

function BatsManage() {
  return (
    <div className="manage-bats slit-in-horizontal">
      <h3>Gestion des Bâtiments</h3>
      <form action="">
        <div className="input-container ic2">
          <input id="batiment" className="input" type="text" placeholder=" " />
          <div className="cut"></div>
          <label htmlFor="batiment" className="placeholder">
            Bâtiment
          </label>
        </div>

        <div className="input-container ic2">
          <select id="production  " className="input">
            <option value="production">Production</option>
            <option value="poussiniere">Poussiniere</option>
          </select>
          <label htmlFor="production  " className="placeholder">
            Production/Poussiniere
          </label>
        </div>
        <div className="input-container ic2">
          <select id="sitesName" className="input">
            <option value="">--</option>
            <option value="site1">site1</option>
            <option value="site2">site2</option>
            <option value="site3">site3</option>
            <option value="site4">site4</option>
            <option value="site5">site5</option>
          </select>
          <label htmlFor="site" className="placeholder">
            Sites
          </label>
        </div>
        <button type="submit" className="send-btn">
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

export default BatsManage;
