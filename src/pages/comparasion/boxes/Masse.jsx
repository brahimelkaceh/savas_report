import React from "react";
import MasseChart from "../charts/MasseChart";
const Masse = ({ data }) => {
  return data?.map((code, i) => (
    <div
      key={i}
      style={{
        background: "#fff",
        width: `${100 / 3 - 1}%`,
        height: "300px",
        color: "white",
        margin: " 5px",
        borderRadius: "var(--border-radius)",
        boxShadow: "var(--box-shadow)",
      }}
    >
      <MasseChart code={code} i={i} />
    </div>
  ));
};

export default Masse;
