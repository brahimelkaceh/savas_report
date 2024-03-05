/**
 * Sample for Area series
 */
import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  SplineAreaSeries,
  Legend,
  AxesDirective,
  AxisDirective,
  LineSeries,
  SplineRangeAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const IcChart = ({ reel, guide, show }) => {
  console.log(guide);
  const onChartLoad = (args) => {
    let chart = document.getElementById("ic-chart");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
  };
  const lines = { width: 0 };
  return (
    <ChartComponent
      id="ic-chart"
      style={{ textAlign: "center", height: show ? "600px" : "100%" }}
      primaryxAxis={{
        valueType: "Double",
        title: "Overs",
        labelFormat: "G_age",
      }}
      primaryYAxis={{
        title: "ic",
        titleStyle: {
          textAlignment: "Center",
          size: "11px",
          fontWeight: "400",
          color: "#00668c",
        },
        labelFormat: "{value}",
        lineStyle: { width: 0 },
        maximum: null,
        interval: null,
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
      }}
      load={load.bind(this)}
      width={Browser.isDevice ? "100%" : "100%"}
      // height={Browser.isDevice ? "100%" : "100%"}
      legendSettings={{ enableHighlight: true }}
      chartArea={{ border: { width: 0 } }}
      // title="Indice de conversion"
      loaded={onChartLoad.bind(this)}
      tooltip={{
        enable: true,
        shared: true,
        fill: "#fff",
        color: "#000",
        textStyle: {
          color: "#000",
        },
        border: {
          width: 1,
          color: "black",
        },
        opacity: 0.5,
      }}
    >
      <Inject
        services={[
          SplineAreaSeries,
          DateTime,
          LineSeries,
          Tooltip,
          Legend,
          Highlight,
          SplineRangeAreaSeries,
        ]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis1"
          opposedPosition={true}
          title="Guide : Indice de conversion"
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          majorGridLines={{ width: show ? 0 : 1 }}
          minorTickLines={{ width: 0 }}
          lineStyle={{ width: 1 }}
          minimum={null}
          maximum={null}
          interval={null}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisdate"
          opposedPosition={true}
          majorGridLines={{ width: 1 }}
          minorTickLines={{ width: 0 }}
          majorTickLines={{ width: 0 }}
          labelStyle={{
            color: "transparent",
          }}
          lineStyle={{ width: 0 }}
          minimum={0}
          maximum={100}
          interval={2.5}
          visible={show}
        ></AxisDirective>
      </AxesDirective>

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName="ic"
          name={show ? "Guide : Indice de conversion" : " "}
          type="Line"
          width={show ? 6 : 4}
          opacity={0.5}
          yAxisName="yAxis1"
          border={{ width: 2 }}
          fill="#65B741"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="ic"
          name={show ? "Indice de conversion" : " "}
          type="Line"
          width={show ? 4 : 2}
          fill="#65B741"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName=""
          name={""}
          type="Line"
          yAxisName="yAxisdate"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default IcChart;
