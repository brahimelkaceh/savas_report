import React from "react";
import { BiBulb } from "react-icons/bi";
import { GrTechnology, GrMoney } from "react-icons/gr";
import { GiGrain } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "./card.css";

function Cards() {
  return (
    <div className="card-item">
      <div className="card-item-content">
        <div>
          <p className="card-title">
            <span> Zoo-Tech</span>
          </p>
        </div>
        <div className="card-item-icon">
          <VscSettings style={{ fontSize: "25px" }} />
        </div>
      </div>
      <div className="card-item-footer">
        <p className="ponte">
          <span>Ponte: </span>
          <TrendingUpIcon fontSize="small" sx={{ color: "#15803d" }} />
          45%
        </p>
        <p className="moy-production">
          <span>Production Moyen:</span> 145000/j
        </p>
        <p className="moy-age">
          <span>Age Moyen:</span> 35 Sem
        </p>
        <p className="total-eff">
          <span>Total Effectif:</span> 150000
        </p>
      </div>
    </div>
  );
}

export default Cards;
