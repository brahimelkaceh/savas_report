/**
 * Sample for Line Series
 */
import * as React from "react";
import { useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Legend,
  DateTime,
  Tooltip,
  Highlight,
  Double,
  DataLabel,
  AxesDirective,
  AxisDirective,
  SplineSeries,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const MasseChart = ({ code, i }) => {
  const onChartLoad = (args) => {
    let chart = document.getElementById(`chart${i}`);
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
  const style = {
    " #chart0_ChartTitle": {
      color: "red !important",
    },
  };

  return (
    <ChartComponent
      id={`chart${i}`}
      style={style}
      primaryxAxis={{
        valueType: "Double",
        title: "Overs",
        labelFormat: "age",
      }}
      load={load.bind(this)}
      primaryYAxis={{
        title: "Masse d'oeuf hebdomadaire (g)",
        rangePadding: "None",
        minimum: 0,
        maximum: 500,
        interval: 50,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        titleStyle: {
          textAlignment: "Center",
          size: "10px",
          fontWeight: "400",
          color: "#8B4513",
        },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ enableHighlight: true }}
      width={Browser.isDevice ? "100%" : "100%"}
      title={`Masse d'Oeuf ${code.lot} `}
      titleStyle={{
        textAlignment: "Center",
        size: "12px",
        fontWeight: "600",
        color: "#FF5B22",
      }}
      loaded={onChartLoad.bind(this)}
    >
      <Inject
        services={[
          LineSeries,
          DateTime,
          Legend,
          Tooltip,
          Highlight,
          DataLabel,
          SplineAreaSeries,
        ]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis1"
          opposedPosition={true}
          title="∑ Masse Oeuf (kg)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
            color: "#FF5B22",
          }}
          majorGridLines={lines}
          minorTickLines={lines}
          lineStyle={lines}
          minimum={0}
          maximum={35}
          interval={5}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective style={{ background: "red" }}>
        <SeriesDirective
          dataSource={code?.massSem}
          xName="age"
          yName="massSem"
          name="Masse Oeuf"
          width={1.5}
          fill="#8B4513"
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName="g_masse_sem"
          name="Guide : Masse Oeuf"
          width={2.5}
          fill="#C69774"
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.massCuml}
          xName="age"
          yName="massCuml"
          name="∑ Masse Oeuf"
          width={1.5}
          fill="#FF5B22"
          type="Line"
          yAxisName="yAxis1"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName="g_masse_cuml"
          name="Guide : ∑ Masse Oeuf"
          width={2.5}
          opacity={0.5}
          fill="#FF5B22"
          type="Line"
          yAxisName="yAxis1"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={code?.ages}
          xName="age"
          yName="y"
          name=""
          width={1.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          type="Line"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MasseChart;
