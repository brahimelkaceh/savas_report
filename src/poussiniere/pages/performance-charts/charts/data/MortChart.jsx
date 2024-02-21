/**
 * Sample for Column series
 */
import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
  LineSeries,
  AxesDirective,
  AxisDirective,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
export let data1 = [
  { x: "GBR", y: 27, toolTipMappingName: "Great Britain" },
  { x: "CHN", y: 26, toolTipMappingName: "China" },
  { x: "AUS", y: 8, toolTipMappingName: "Australia" },
  { x: "RUS", y: 19, toolTipMappingName: "Russia" },
  { x: "GER", y: 17, toolTipMappingName: "Germany" },
  { x: "UA", y: 2, toolTipMappingName: "Ukraine" },
  { x: "ES", y: 7, toolTipMappingName: "Spain" },
  { x: "UZB", y: 4, toolTipMappingName: "Uzbekistan" },
  { x: "JPN", y: 12, toolTipMappingName: "Japan" },
  { x: "NL", y: 8, toolTipMappingName: "NetherLand" },
  { x: "USA", y: 46, toolTipMappingName: "United States" },
];
export let data2 = [
  { x: "GBR", y: 23, toolTipMappingName: "Great Britain" },
  { x: "CHN", y: 18, toolTipMappingName: "China" },
  { x: "AUS", y: 11, toolTipMappingName: "Australia" },
  { x: "RUS", y: 17, toolTipMappingName: "Russia" },
  { x: "GER", y: 10, toolTipMappingName: "Germany" },
  { x: "UA", y: 5, toolTipMappingName: "Ukraine" },
  { x: "ES", y: 4, toolTipMappingName: "Spain" },
  { x: "UZB", y: 2, toolTipMappingName: "Uzbekistan" },
  { x: "JPN", y: 8, toolTipMappingName: "Japan" },
  { x: "NL", y: 7, toolTipMappingName: "NetherLand" },
  { x: "USA", y: 37, toolTipMappingName: "United States" },
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const MortChart = ({ reel, guide, show }) => {
  const loaded = (args) => {
    let chart = document.getElementById("chart_mort");
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
    if (selectedTheme === "highcontrast") {
      args.chart.series[0].marker.dataLabel.font.color = "#000000";
      args.chart.series[1].marker.dataLabel.font.color = "#000000";
      args.chart.series[2].marker.dataLabel.font.color = "#000000";
    }
  };
  return (
    <ChartComponent
      id="chart_mort"
      style={{ textAlign: "center", height: show ? "600px" : "100%" }}
      legendSettings={{ enableHighlight: true }}
      primaryXAxis={{
        labelIntersectAction: Browser.isDevice ? "None" : "Trim",
        labelRotation: Browser.isDevice ? -45 : 0,
        valueType: "Category",
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 1 },
      }}
      primaryYAxis={{
        title: "% Mortalité / Semaine",
        titleStyle: {
          textAlignment: "Center",
          size: "12px",
          fontWeight: "bold",
          color: "#F48FB1",
        },
        majorTickLines: { width: 0 },
        lineStyle: { width: 1 },
        maximum: 0.4,
        interval: 0.05,
      }}
      chartArea={{ border: { width: 0 } }}
      load={load.bind(this)}
      tooltip={{
        enable: true,
        header: "<b>% Mortalité</b>",
        shared: true,
      }}
      width={Browser.isDevice ? "100%" : "100%"}
      title="% Mortalité"
      loaded={loaded.bind(this)}
      titleStyle={{
        textAlignment: "Center",
        size: "15px",
        fontWeight: "bold",
        color: "#F48FB1",
      }}
    >
      <Inject
        services={[
          LineSeries,
          ColumnSeries,
          Legend,
          Tooltip,
          Category,
          DataLabel,
          Highlight,
        ]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis1"
          opposedPosition={true}
          title="∑ % moratilité PD"
          titleStyle={{
            textAlignment: "Center",
            size: "12px",
            fontWeight: "bold",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={6}
          interval={1}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "12px",
            fontWeight: "400",
          }}
          labelStyle={{
            color: "transparent",
          }}
          majorGridLines={{
            width: 1,
          }}
          minorTickLines={{
            width: 1,
          }}
          lineStyle={{
            width: 0,
          }}
          majorTickLines={{
            width: 0,
          }}
          minimum={0}
          maximum={0.4}
          interval={0.01}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName="mort_sem"
          width={2}
          name="Guide : % Mortalité / Semaine"
          type="Column"
          fill="#F48FB1"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          columnSpacing={0.1}
          yName="mort_sem"
          name="% Mortalité / Semaine"
          fill="#880e4f"
          type="Column"
          xAxisName="yAxisA"
        />
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="mort_cuml"
          name="∑ Mortalité / PD (%)"
          type="Line"
          yAxisName="yAxis1"
        />
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          columnSpacing={0.1}
          yName="G_mortCuml"
          name="Guide : ∑ % moratilité PD"
          type="Line"
          yAxisName="yAxisA"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MortChart;
