import React from "react";
import EventIcon from "@mui/icons-material/Event";
import PlaceIcon from "@mui/icons-material/Place";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";

function SelectCard() {
  return (
    <div className="select-card">
      <div className="icon">
        <span>b1</span>
      </div>
      <div className="content">
        <span className="title">LOT_IN_B1_TALMOUST</span>
        <div className="desc">
          <div>
            <EventIcon sx={{ fontSize: 15 }} /> <span>02/11/2022</span>
          </div>
          <div>
            <PlaceIcon sx={{ fontSize: 15 }} /> <span>DOMAINE AL FADEL</span>
          </div>
          <div>
            <EventRepeatIcon sx={{ fontSize: 15 }} /> <span>47</span>
          </div>
        </div>
      </div>
      <button type="button" className="close">
        <svg
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SelectCard;
