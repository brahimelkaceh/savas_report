import React from "react";
import Marquee from "react-fast-marquee";
import { useMemo } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
let base_url = "https://farmdriver.savas.ma/api/";

// dash-marquee-data/
const MyMarquee = () => {
  const ApiUrl = useMemo(() => `${base_url}dash-marquee-data/`, [base_url]);

  const { data, loading, error } = UseFetchData(ApiUrl, "GET");
  if (error) {
    return (
      <div className="card-3">
        <p>there is an error</p>
      </div>
    );
  }
  return (
    <Marquee>
      {loading && <p>loading...</p>}

      {data && (
        <div className="good-marquee">
          <span className="site-title">{data[0]?.site} :</span>
          <span className="param-title"> ponte : </span>
          {data[0]?.ponte?.map((p, i) => {
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
                    {p?.best_ponte?.reel}
                    {p?.best_ponte && <TrendingUpIcon fontSize="10px" />}
                  </span>
                )}
                {p?.worst_ponte && (
                  <span className="bad-param">
                    {p?.worst_ponte?.reel}
                    {p?.worst_ponte && <TrendingDownIcon fontSize="10px" />}
                  </span>
                )}
              </div>
            );
          })}
          ||<span className="param-title"> pmo : </span>
          {data[0]?.pmo?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_pmo && (
                  <span className="good-param">
                    {p?.best_pmo?.reel}
                    {p?.best_pmo && <TrendingUpIcon fontSize="10px" />}
                  </span>
                )}

                {p?.worst_pmo && (
                  <span className="bad-param">
                    {p?.worst_pmo?.reel}
                    {p?.worst_pmo && <TrendingDownIcon fontSize="10px" />}
                  </span>
                )}
              </div>
            );
          })}
          ||<span className="param-title"> mortalité : </span>
          {data[0]?.mort?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_mort && (
                  <span className="good-param">
                    {p?.best_mort?.reel}
                    {p?.best_mort && <TrendingUpIcon fontSize="10px" />}
                  </span>
                )}
                {p?.worst_mort && (
                  <span className="bad-param">
                    {p?.worst_mort?.reel}
                    {p?.worst_mort && <TrendingDownIcon fontSize="10px" />}
                  </span>
                )}
              </div>
            );
          })}
          ||<span className="param-title"> aliment / oeuf : </span>
          {data[0]?.altOeuf?.map((p, i) => {
            return (
              <div
                key={i}
                style={{ padding: "0 2px", display: "flex", gap: "6px" }}
              >
                {p?.best_altOeuf && (
                  <span className="good-param">
                    {p?.best_altOeuf?.reel}
                    {p?.best_altOeuf && <TrendingUpIcon fontSize="10px" />}
                  </span>
                )}
                {p?.worst_altOeuf && (
                  <span className="bad-param">
                    {p?.worst_altOeuf?.reel}
                    {p?.worst_altOeuf && <TrendingDownIcon fontSize="10px" />}
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
