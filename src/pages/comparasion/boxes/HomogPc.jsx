import React from "react";
import HomogPcChart from "../charts/HomogPcChart";
const HomogPc = ({ data }) => {
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
      <HomogPcChart code={code} i={i} />
    </div>
  ));
};

export default HomogPc;
