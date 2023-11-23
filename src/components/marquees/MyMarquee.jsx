import React from "react";
import Marquee from "react-fast-marquee";
import { useMemo } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
let base_url = "https://farmdriver.savas.ma/api/";

// dash-marquee-data/
const MyMarquee = () => {
  const ApiUrl = useMemo(() => `${base_url}dash-marquee-data/`, [base_url]);

  const { data, loading, error } = UseFetchData(ApiUrl, "GET");
  if (error) {
    return (
      <Marquee
        style={{
          backgroundColor: "#E96D711a",
          color: "#c21d03",
        }}
      >
        <div>
          <p>Aucune donnée à afficher</p>
        </div>
      </Marquee>
    );
  }
  return (
    <Marquee speed={30}>
      {loading && <p>loading...</p>}

      {data && (
        <div className="good-marquee">
          <span className="">{data[0]?.site} :</span>
          <span className="param-title"> ponte : </span>
          {data[0]?.ponte?.map((p, i) => {
            console.log(p);
            return (
              <div
                key={i}
                style={{
                  padding: "0 2px",
                  display: "flex",
                  gap: "6px",
                }}
              >
                {p?.best_ponte && (
                  <span className="good-param">
                    {p?.best_ponte?.bat} : {p?.best_ponte?.reel}
                    {p?.best_ponte && (
                      <ArrowDropUpIcon className="param-icon" />
                    )}
                  </span>
                )}
                {p?.worst_ponte && (
                  <span className="bad-param">
                    {p?.worst_ponte?.bat} : {p?.worst_ponte?.reel}
                    {p?.worst_ponte && (
                      <ArrowDropDownIcon className="param-icon" />
                    )}
                  </span>
                )}
              </div>
            );
          })}
          |<span className="param-title"> PMO : </span>
          {data[0]?.pmo?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_pmo && (
                  <span className="good-param">
                    {p?.best_pmo?.bat} : {p?.best_pmo?.reel}
                  </span>
                )}

                {p?.worst_pmo && (
                  <span className="bad-param">
                    {p?.worst_pmo?.bat} : {p?.worst_pmo?.reel}
                    {p?.worst_pmo && (
                      <ArrowDropDownIcon
                        className="param-icon"
                        fontSize="10px"
                      />
                    )}
                  </span>
                )}
              </div>
            );
          })}
          |<span className="param-title"> mortalité : </span>
          {data[0]?.mort?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_mort && (
                  <span className="good-param">
                    {p?.best_mort?.bat} : {p?.best_mort?.reel}
                  </span>
                )}
                {p?.worst_mort && (
                  <span className="bad-param">
                    {p?.worst_mort?.bat} : {p?.worst_mort?.reel}
                    {p?.worst_mort && (
                      <ArrowDropDownIcon
                        className="param-icon"
                        fontSize="10px"
                      />
                    )}
                  </span>
                )}
              </div>
            );
          })}
          |<span className="param-title"> aliment / oeuf : </span>
          {data[0]?.altOeuf?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_altOeuf && (
                  <span className="good-param">
                    {p?.best_altOeuf?.bat} : {p?.best_altOeuf?.reel}
                  </span>
                )}
                {p?.worst_altOeuf && (
                  <span className="bad-param">
                    {p?.worst_altOeuf?.bat} : {p?.worst_altOeuf?.reel}
                    {p?.worst_altOeuf && (
                      <ArrowDropDownIcon
                        className="param-icon"
                        fontSize="10px"
                      />
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Marquee>
  );
};

export default MyMarquee;
