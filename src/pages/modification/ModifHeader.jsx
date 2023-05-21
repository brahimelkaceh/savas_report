import React, { useRef } from "react";
import { useSelector } from "react-redux";

function ModifHeader({ data, FetchData }) {
  console.log(data);
  let lotIdRef = useRef();

  return (
    <>
      {data !== null && (
        <div className="modification-header">
          <div className="content-container">
            <div className="input-container ic2">
              <select
                name=""
                className="input"
                // id="coloration"
                ref={lotIdRef}
                onChange={() => FetchData(parseInt(lotIdRef.current.value))}
                required
              >
                <option value="">--</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <label htmlFor="coloration" className="placeholder">
                Lot (bâtiment)
              </label>
            </div>

            <>
              <div className="content-box slide-in-blurred-right">
                <div className="header-content">
                  <p>Site :</p> <span>{data?.site_name}</span>
                </div>
                <div className="header-content">
                  <p>Bâtiment :</p>
                  <span>{data?.identification?.batiment}</span>
                </div>
              </div>
              <div className="content-box slide-in-blurred-right ">
                <div className="header-content">
                  <p>Souche :</p> <span>{data?.identification?.souche}</span>
                </div>
                <div className="header-content">
                  <p>Date naissance :</p>
                  <span>{data?.identification?.birth_date}</span>
                </div>
              </div>
              <div className="content-box slide-in-blurred-right">
                <div className="header-content">
                  <p>Age Actuel :</p>
                  <span>{data?.identification?.curr_age}</span>
                </div>
                <div className="header-content">
                  <p>Effectif Départ :</p>
                  <span>{data?.identification?.effectifD}</span>
                </div>
              </div>
              <div className="content-box slide-in-blurred-right">
                <div className="header-content">
                  <p>Date mise en place :</p>
                  <span>{data?.identification?.birth_mep}</span>
                </div>
                <div className="header-content">
                  <p>Code lot :</p>
                  <span>{data?.identification?.lot}</span>
                </div>
              </div>
            </>

            {loading && (
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ModifHeader;
