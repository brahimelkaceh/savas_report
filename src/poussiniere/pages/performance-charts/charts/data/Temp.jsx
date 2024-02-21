/**
 * Sample for RangeColumn series
 */
import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Highlight,
  DataLabel,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
  RangeColumnSeries,
  templateAnimate,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export const color1 = ["#F9D422"];
export const color2 = ["#F28F3F"];
export const color3 = ["#E94F53"];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const TempChart = ({ data, show }) => {
  const onChartLoad = (args) => {
    let chart = document.getElementById("chart_temp");
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

  return (
    <ChartComponent
      id="chart_temp"
      style={{ textAlign: "center", height: show ? "600px" : "100%" }}
      highlightMode="Point"
      highlightPattern="DiagonalForward"
      primaryXAxis={{
        valueType: "Category",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      }}
      primaryYAxis={{
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: "{value}°C",
      }}
      title="Temperature"
      loaded={onChartLoad.bind(this)}
      load={load.bind(this)}
      chartArea={{ border: { width: 0 } }}
      width={Browser.isDevice ? "100%" : "100%"}
      height={"100%"}
      legendSettings={{
        mode: "range",
        visible: false,
        toggleVisibility: false,
      }}
    >
      <Inject
        services={[
          ColumnSeries,
          Highlight,
          DataLabel,
          Tooltip,
          Category,
          Legend,
          RangeColumnSeries,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          name="USA"
          xName="age"
          high="tempMax"
          low="tempMin"
          type="RangeColumn"
          animation={{ enable: false }}
          pointColorMapping="color"
          cornerRadius={{
            topLeft: 10,
            topRight: 10,
            bottomLeft: 10,
            bottomRight: 10,
          }}
          columnWidth={0.5}
          marker={{ dataLabel: { visible: true, position: "Outer" } }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default TempChart;
