import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  DateTime,
  SeriesDirective,
  Inject,
  Tooltip,
  RangeStepAreaSeries,
  StepLineSeries,
  StepAreaSeries,
  LineSeries,
  AxesDirective,
  AxisDirective,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

const RangeStepArea = ({ data }) => {
  console.log(data);

  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
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
    switch (selectedTheme) {
      case "bootstrap5":
        {
          args.chart.series[0].fill = "#BDD9F5";
          args.chart.series[0].border.color = "#539DE3";
        }
        break;
      case "fluent":
        {
          args.chart.series[0].fill = "#C3A6DB";
          args.chart.series[0].border.color = "#9E71C2";
        }
        break;
    }
  };
  const tooltipRender = (args) => {
    if (args.series.name === "intensité") {
      args.text = `Intensité: ${args.point.y}`;
    } else if (
      args.series.name === "lightDur" ||
      args.series.name === "flashDur"
    ) {
      args.text = `On: ${args.point.high}, Off: ${args.point.low}`;
    }
  };
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{
            textAlign: "center",
            height: "100% !important",
          }}
          load={load.bind(this)}
          primaryYAxis={{
            labelFormat: "{value}h",
            title: "Durée lumière",
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 24,
            interval: 2,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: false,
            enableAnimation: false,
            format: "",
            header: "",
            location: "Center",
            displayMode: "Always",
            opacity: 0.9,
            textRender: tooltipRender.bind(this),
          }}
          width={Browser.isDevice ? "100%" : "100%"}
          title="Courbe de Lumiére & Intensité"
          loaded={onChartLoad.bind(this)}
        >
          <defs>
            <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#BDEDE9" stopOpacity="0.75" />
              <stop offset="1" stopColor="#BDEDE9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <Inject
            services={[
              RangeStepAreaSeries,
              StepLineSeries,
              StepAreaSeries,
              DateTime,
              Tooltip,
              Highlight,
              LineSeries,
              SplineAreaSeries,
            ]}
          />
          <AxesDirective>
            <AxisDirective
              ajorGridLines={{ width: 0 }}
              rowIndex={0}
              opposedPosition={true}
              lineStyle={{ width: 0 }}
              maximum={100}
              interval={10}
              majorTickLines={{ width: 0 }}
              majorGridLines={{ width: 2 }}
              name="yAxis1"
              labelFormat="{value}"
              title="Intensité (%)"
            />
            <AxisDirective
              ajorGridLines={{ width: 0 }}
              rowIndex={0}
              opposedPosition={true}
              lineStyle={{ width: 0 }}
              maximum={100}
              interval={2.5}
              majorTickLines={{ width: 0 }}
              majorGridLines={{ width: 1 }}
              labelStyle={{
                color: "transparent",
              }}
              name="yAxis1"
              labelFormat=""
              title=""
            />
          </AxesDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              border={{ width: 2 }}
              xName="age"
              yName="intens_bg"
              name="intens_bg"
              marker={{ visible: false }}
              animation={{ enable: true }}
              type="StepArea"
              fill="url(#gradient-hart)"
            />

            <SeriesDirective
              dataSource={data}
              border={{ width: 2 }}
              xName="age"
              high="lightOn"
              yName="lightDur"
              opacity={0.9}
              marker={{ visible: false }}
              low="lightOff"
              fill="#0174BE"
              animation={{ enable: true }}
              tooltip={{ enable: true, header: "Light Duration" }}
              type="RangeStepArea"
            />
            <SeriesDirective
              dataSource={data}
              border={{ width: 2 }}
              xName="age"
              high="flashOn"
              yName="flashDur"
              fill="#0174BE"
              opacity={0.8}
              marker={{ visible: false }}
              low="flashOff"
              animation={{ enable: true }}
              type="RangeStepArea"
              tooltip={{ enable: true, header: "Flash Duration" }}
            />

            <SeriesDirective
              dataSource={data}
              xName="age"
              yName="intensite"
              name="intensité"
              marker={{
                visible: false,
                isFilled: true,
                height: 7,
                width: 7,
                shape: "Diamond",
              }}
              opacity={1}
              type="StepLine"
              fill="#F8DE22"
              yAxisName="yAxis1"
              width={4}
              border={{ width: 2 }}
              tooltip={{ enable: true, header: "Intensity" }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default RangeStepArea;
