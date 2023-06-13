import React from "react";
import { BiBulb } from "react-icons/bi";
import { GrTechnology, GrMoney } from "react-icons/gr";
import { GiGrain } from "react-icons/gi";
import donutchart from "../../assets/donut-chart.svg";
import { VscSettings } from "react-icons/vsc";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "./card.css";

function Cards({ className }) {
  return (
    <div className={className}>
      <div className="card-item-content">
        <div className="card-item-footer">
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
        <div className="card-item-icon">
          <img className="card-item-icon" src={donutchart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
