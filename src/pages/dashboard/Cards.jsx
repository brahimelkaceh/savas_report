import React from "react";
import { BiBulb } from "react-icons/bi";
import { GrTechnology, GrMoney } from "react-icons/gr";
import { GiGrain } from "react-icons/gi";
import barchart from "../../assets/bar-charts.svg";
import { VscSettings } from "react-icons/vsc";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useState, useEffect } from "react";
import SkeletonBlock from "./skeletons/SkeletonBlock";
let base_url = "https://pouliprod.savas.ma/api/";

import "./card.css";

function Cards({ className, data, loading }) {
  return (
    <div className={className}>
      {data && (
        <div className="card-item-content">
          <div className="card-item-footer">
            <p className="moy-age ">
              <span>Total Effectif </span>
              {data?.effectifTot}
            </p>

            <p className="moy-age">
              <span>Age Moyen</span>
              {data?.age_moy}
              {/* <span> Sem </span> */}
            </p>
            <div className="card-item-icon">
              <img src={barchart} alt="" />
            </div>
          </div>
        </div>
      )}
      {loading && <SkeletonBlock />}
    </div>
  );
}

export default Cards;
