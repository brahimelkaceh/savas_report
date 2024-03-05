import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
  AxesDirective,
  AxisDirective,
  AreaSeries,
  SplineRangeAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

function ConsoChart({ reel, guide, show }) {
  const onChartLoad = (args) => {
    let chart = document.getElementById("conso-chart");
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
      id="conso-chart"
      primaryxAxis={{
        valueType: "Double",
        title: "Overs",
        labelFormat: "age",
      }}
      primaryYAxis={{
        title: "Eau consommée (ml/j)",
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
        majorTickLines: { width: 1 },
        minorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
      }}
      load={load.bind(this)}
      width={Browser.isDevice ? "100%" : "100%"}
      legendSettings={{ enableHighlight: true }}
      chartArea={{ border: { width: 0 } }}
      // title="Consommation"
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
          LineSeries,
          AreaSeries,
          SplineRangeAreaSeries,
          Legend,
          Tooltip,
          DataLabel,
          Category,
        ]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis1"
          opposedPosition={false}
          title="Aliment Consommée (g/j)"
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 0 }}
          minorGridLines={{ width: 0 }}
          lineStyle={{ width: 1 }}
          minimum={null}
          maximum={null}
          interval={null}
          visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis2"
          opposedPosition={true}
          title="∑ Aliment Consommée (kg)"
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          majorGridLines={{ width: show ? 0 : 1 }}
          minorTickLines={{ width: 0 }}
          lineStyle={{ width: 0 }}
          minimum={null}
          maximum={null}
          interval={null}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis3"
          opposedPosition={true}
          title="Ratio (Eau/Alt)"
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 0 }}
          minorGridLines={{ width: 0 }}
          lineStyle={{ width: 1 }}
          minimum={null}
          maximum={null}
          interval={null}
          visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisdate"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "400",
            color: "#00668c",
          }}
          labelStyle={{
            color: "transparent",
          }}
          majorGridLines={{ width: 1 }}
          minorTickLines={{ width: 0 }}
          minorGridLines={{ width: 0 }}
          majorTickLines={{ width: 0 }}
          lineStyle={{ width: 0 }}
          minimum={0}
          maximum={100}
          interval={2.5}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="epsSem"
          width={show ? 6 : 2}
          name={show ? "Eau" : " "}
          type="Line"
          dashArray="6,5"
          fill="#83A2FF"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="aps"
          width={show ? 4 : 2}
          name={show ? "Aliment/sujet" : " "}
          type="Line"
          yAxisName="yAxis1"
          fill="#17594A"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          high="G_consoSemMax"
          low="G_consoSemMin"
          name={show ? "Guide: Aliment/sujet" : " "}
          opacity={0.5}
          fill="#7A9D00"
          type="SplineRangeArea"
          yAxisName="yAxis1"
          tooltipFormat="Guide: Aliment/sujet: Min:${point.low}~~Max:${point.high}"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          high="G_consoCumlMax"
          low="G_consoCumlMin"
          name={show ? "Guide: ∑ Aliment/sujet" : " "}
          opacity={0.4}
          fill="#7A9D54"
          type="SplineRangeArea"
          yAxisName="yAxis3"
          tooltipFormat="Guide: ∑ Aliment/sujet: Min:${point.low}~~Max:${point.high}"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="ratio"
          width={2}
          name={show ? "Ratio Eau/Aliment" : " "}
          type="Area"
          fill="#97e0ff"
          border={{
            width: 2,
            color: "#97e0ff",
          }}
          opacity={0.6}
          yAxisName="yAxis3"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="apsCuml"
          width={show ? 4 : 2}
          name={show ? "∑ Aliment/sujet" : " "}
          type="Line"
          yAxisName="yAxis2"
          fill="#008000"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={guide}
          xName="age"
          yName=""
          width={show ? 4 : 2}
          name={""}
          type="Line"
          yAxisName="yAxisdate"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default ConsoChart;
