import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLotId, getMsgContent } from "../../slices/LeftBar";
let base_url = "https://farmdriver.savas.ma/api/";

import "./style.css";
import UseFetchData from "../../hooks/UseFetchData";
import { Skeleton } from "@mui/material";
function Header() {
  const dispatch = useDispatch();
  const [lotId, setLotId] = useState("");

  const lotIdentificationApiUrl = useMemo(
    () => `${base_url}get-lot-identification/?lotId=${lotId}`,
    [base_url, lotId]
  );
  const {
    data: lotIdentificationData,
    loading: lotIdentificationLoading,
    error: lotIdentificationError,
  } = UseFetchData(lotIdentificationApiUrl, "GET");

  dispatch(getMsgContent(lotIdentificationData?.msg?.content));

  // console.log();
  // Second API call
  const lotTitlesApiUrl = useMemo(
    () => `${base_url}get-lots-titles/`,
    [base_url]
  );
  const {
    data: lotTitlesData,
    loading: lotTitlesLoading,
    error: lotTitlesError,
  } = UseFetchData(lotTitlesApiUrl, "GET");

  console.log(lotTitlesData);

  if (lotIdentificationError || lotTitlesError) {
    return (
      <div
        className="modification-table-header"
        style={{ paddingBottom: "5px" }}
      >
        <Skeleton variant="rounded" width="100%" height={70} animation="wave" />
      </div>
    );
  }

  if (!lotIdentificationData || !lotTitlesData) {
    return (
      <div
        className="modification-table-header"
        style={{ paddingBottom: "5px" }}
      >
        <Skeleton variant="rounded" width="100%" height={70} animation="wave" />
      </div>
    );
  }

  return (
    <div className="modification-table-header">
      <div className="input-container">
        <label>
          <select
            required
            disabled={lotTitlesLoading}
            className="input"
            onChange={(e) => {
              setLotId(parseInt(e.target.value));
            }}
          >
            <option value="">--</option>
            {lotTitlesData &&
              lotTitlesData?.map((title) => {
                return (
                  <option key={title.id} value={title.id}>
                    {title.code}
                  </option>
                );
              })}
          </select>
          <span> Sélectionnez un LOT</span>
        </label>
        <button
          className="fetch-btn"
          onClick={() => {
            dispatch(getLotId(lotId));
          }}
        >
          Afficher les donnees
        </button>
      </div>

      <div className="header-lot-container">
        <div className="content-box slide-in-blurred-right">
          <div className="header-content">
            <p>Site :</p>{" "}
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.site_name
                  ? lotIdentificationData?.site_name
                  : "--"}
              </span>
            )}
          </div>
          <div className="header-content">
            <p>Bâtiment :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.batiment
                  ? lotIdentificationData?.batiment
                  : "--"}
              </span>
            )}
          </div>
        </div>
        <div className="content-box slide-in-blurred-right ">
          <div className="header-content">
            <p>Souche :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.souche
                  ? lotIdentificationData?.souche
                  : "--"}
              </span>
            )}
          </div>
          <div className="header-content">
            <p>Date naissance :</p>{" "}
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.birth_date
                  ? lotIdentificationData?.birth_date
                  : "--"}
              </span>
            )}
          </div>
        </div>
        <div className="content-box slide-in-blurred-right">
          <div className="header-content">
            <p>Age Actuel :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.curr_age
                  ? lotIdentificationData?.curr_age
                  : "--"}
              </span>
            )}
          </div>
          <div className="header-content">
            <p>Effectif Départ :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.effectifD
                  ? lotIdentificationData?.effectifD
                  : "--"}
              </span>
            )}
          </div>
        </div>
        <div className="content-box slide-in-blurred-right">
          <div className="header-content">
            <p>Date mise en place :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.birth_mep
                  ? lotIdentificationData?.birth_mep
                  : "--"}
              </span>
            )}
          </div>
          <div className="header-content">
            <p>Code lot :</p>
            {lotTitlesLoading ? (
              <span className="loading-text">Loading...</span>
            ) : (
              <span>
                {lotIdentificationData?.lot ? lotIdentificationData?.lot : "--"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
