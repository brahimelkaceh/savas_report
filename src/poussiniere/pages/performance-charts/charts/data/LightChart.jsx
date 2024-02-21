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

const LightChart = ({ data, show }) => {
  const onChartLoad = (args) => {
    let chart = document.getElementById("chart_light");
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
  const tooltip = {
    enable: true,
    shared: true,
    enableAnimation: false,
    format: "<b>Sem : ${point.x} - ${point.y}</b>",
    displayMode: "Always",
    opacity: 0.9,
  };
  return (
    <ChartComponent
      id="chart_light"
      style={{
        textAlign: "center",
        height: show ? "600px" : "100% !important",
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
      tooltip={tooltip}
      width={Browser.isDevice ? "100%" : "100%"}
      height="100%"
      title="Courbe de Lumiére & Intensité"
      loaded={onChartLoad.bind(this)}
    >
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
          majorGridLines={{ width: 2 }}
          maximum={100}
          interval={10}
          majorTickLines={{ width: 0 }}
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
          name="yAxis1"
          labelFormat=""
          title=""
          labelStyle={{
            color: "transparent",
          }}
          visible={show}
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
          // tooltipFormat="Intensité : ${point.y}"
        />

        <SeriesDirective
          dataSource={data}
          border={{ width: 2 }}
          xName="age"
          high="lightOn"
          yName="lightDur"
          low="lightOff"
          opacity={0.9}
          fill="#0174BE"
          animation={{ enable: true }}
          type="RangeStepArea"
          tooltipFormat="Lumiere On : ${point.x}h Lumiere Off : ${point.y}"
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
          tooltipFormat="Flash On : ${point.x}h Flash Off : ${point.y}"
        />

        <SeriesDirective
          dataSource={data}
          xName="age"
          yName="intensite"
          name="intensité"
          opacity={1}
          type="StepLine"
          fill="#F8DE22"
          yAxisName="yAxis1"
          width={4}
          border={{ width: 2 }}
          tooltipFormat="Intensité : ${point.y} "
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LightChart;
