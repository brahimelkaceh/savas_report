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

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
/**
 * Area sample
 */
const HomogPvChart = ({ reel, guide, show }) => {
  console.log(guide);
  const onChartLoad = (args) => {
    let chart = document.getElementById("chart_homog");
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
      id="chart_homog"
      style={{ textAlign: "center", height: show ? "600px" : "100%" }}
      primaryxAxis={{
        valueType: "Double",
        title: "Overs",
        labelFormat: "G_age",
      }}
      primaryYAxis={{
        title: "Homogénéité",
        titleStyle: {
          textAlignment: "Center",
          size: "11px",
          fontWeight: "400",
          color: "#00668c",
        },
        labelFormat: "{value}%",
        lineStyle: { width: 0 },
        maximum: 100,
        interval: 10,
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorGridLines: { width: 2 },
      }}
      load={load.bind(this)}
      width={Browser.isDevice ? "100%" : "100%"}
      height={"100%"}
      // height={Browser.isDevice ? "100%" : "100%"}
      legendSettings={{ enableHighlight: true }}
      chartArea={{ border: { width: 0 } }}
      title="Poids corporel & Homogénéité"
      loaded={onChartLoad.bind(this)}
      tooltip={{ enable: true }}
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
          title="Poids corporel (g)"
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          majorGridLines={lines}
          minorTickLines={lines}
          lineStyle={lines}
          minimum={0}
          maximum={2500}
          interval={500}
          // visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          labelStyle={{
            color: "transparent",
          }}
          majorGridLines={{
            width: 1,
          }}
          majorTickLines={{ width: 0 }}
          minorTickLines={{ width: 0 }}
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
          yName="G_homog"
          name={show ? "Guide: Homogénéité (%)" : " "}
          opacity={0.05}
          type="SplineArea"
          width={2}
          border={{ width: 2 }}
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="homog"
          name={show ? "Homogénéité (%)" : " "}
          fill="#C1F2B0"
          opacity={0.3}
          type="SplineArea"
          width={2}
          border={{ width: 2, color: "#65B741" }}
          yAxisName="yAxisA"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          high="G_poidVifMax"
          low="G_poidVifMin"
          name={show ? "Guide : Poids corporel (g)" : " "}
          opacity={0.4}
          type="SplineRangeArea"
          yAxisName="yAxis1"
          fill="#5FBDFF"
          border={{ width: 1 }}
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="pv"
          name={show ? "Poids corporel (g)" : " "}
          width={1.5}
          fill="#00668c"
          type="Line"
          yAxisName="yAxis1"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default HomogPvChart;
