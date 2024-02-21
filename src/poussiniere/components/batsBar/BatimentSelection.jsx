import { useMemo, useState, useEffect } from "react";
let base_url = "https://farmdriver.savas.ma/api/";
import { useSelector, useDispatch } from "react-redux";
import FormHeader from "../../../pages/reports/Components/FormHeader";
import { getBatimentName } from "../../../slices/SiteData";
import { useData } from "../../context/DataProvider";
import { Card, CardContent, CircularProgress } from "@mui/material";
const BatimentSelection = ({
  BatimentIdent,
  siteId,
  batimentId,
  setBatimentId,
  nextSendData,
  setId,
  loading,
}) => {
  const { dispatch } = useData();

  // const apiUrl
  return (
    <div
      className="batiment-selection"
      style={{
        display: "flex",
        alignItems: "end",
      }}
    >
      <label>
        <select
          required
          // ref={typeRef}
          value={batimentId}
          id="production"
          className="input"
          onChange={(e) => {
            setBatimentId(e.target.value);
            dispatch(getBatimentName(e.target.value));
            setId(e.target.value);
          }}
        >
          <option value="">--</option>

          {BatimentIdent?.map((batiment) => {
            return (
              <option key={batiment.id} value={batiment.id} className="input">
                {batiment.name} ({batiment?.code})
              </option>
            );
          })}
        </select>
        <span> Select bâtiment*</span>
      </label>
      {loading && <CircularProgress size={22} />}
    </div>
  );
};

export default BatimentSelection;
