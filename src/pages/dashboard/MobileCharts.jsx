import React from "react";

import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import BarCharts2 from "../../components/charts/BarCharts2";
import LineCharts2 from "../../components/charts/LineCharts2";
import ComposedCharts from "../../components/charts/ComposedCharts";
import LinearChart from "../../components/charts/LinearChart";
import BarCharts from "../../components/charts/BarCharts";

function MobileCharts() {
  return (
    <>
      <div className="box-container">
        <div className="box-1">
          <LinearChart />
        </div>
      </div>
      <div className="box-container2">
        <div className="box-2">
          <BarCharts />
        </div>
      </div>
      <div className="box-container3">
        <div className="box-3">
          <BarCharts2 />
        </div>
      </div>
      <div className="box-container4">
        <div className="box-4">
          <LineCharts2 />
        </div>
      </div>
      <div className="box-container5">
        <div className="box-4">
          <ComposedCharts />
        </div>
      </div>
    </>

    //   {/* <div className="box-2 ">
    //
    //   </div> */}
    //   {/* <div className="box-3">
    //     <BarCharts2 />
    //   </div>

    //   <div className="box-4">
    //     <LineCharts2 />
    //   </div>
    //   <div className="box-5">
    //     <ComposedCharts />
    //   </div> */}
  );
}

export default MobileCharts;
