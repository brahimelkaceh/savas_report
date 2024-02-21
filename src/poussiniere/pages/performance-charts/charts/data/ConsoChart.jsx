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
  console.log(guide);
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
    <div className="control-pane">
      <div className="control-section">
        <ChartComponent
          id="conso-chart"
          style={{ textAlign: "center", height: show ? "600px" : "100%" }}
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
            maximum: 300,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          load={load.bind(this)}
          width={Browser.isDevice ? "100%" : "100%"}
          legendSettings={{ enableHighlight: true }}
          chartArea={{ border: { width: 0 } }}
          title="Consommation"
          loaded={onChartLoad.bind(this)}
          tooltip={{ header: "Consommation", enable: true, shared: true }}
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
              lineStyle={{ width: 0 }}
              minimum={0}
              maximum={2500}
              interval={500}
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
              majorGridLines={{ width: 0 }}
              minorTickLines={{ width: 0 }}
              lineStyle={{ width: 0 }}
              minimum={0}
              maximum={70}
              interval={10}
            ></AxisDirective>
            <AxisDirective
              rowIndex={0}
              name="yAxis3"
              opposedPosition={true}
              title="Ration (Eau/Alt)"
              titleStyle={{
                textAlignment: "Center",
                size: "11px",
                fontWeight: "400",
                color: "#00668c",
              }}
              majorGridLines={{ width: 0 }}
              minorTickLines={{ width: 0 }}
              lineStyle={{ width: 0 }}
              minimum={0}
              maximum={10}
              interval={2}
            ></AxisDirective>
          </AxesDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={reel}
              xName="age"
              yName="epsSem"
              width={2}
              name="Eau"
              type="Line"
              dashArray="5,5"
              fill="#83A2FF"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={reel}
              xName="age"
              yName="aps"
              width={2}
              name="Aliment/sujet"
              type="Line"
              yAxisName="yAxis1"
              fill="#17594A"
            ></SeriesDirective>

            <SeriesDirective
              dataSource={guide}
              xName="G_age"
              high="G_consoSemMax"
              low="G_consoSemMin"
              name="Guide: Aliment/sujet"
              opacity={0.4}
              type="SplineRangeArea"
              yAxisName="yAxis1"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={guide}
              xName="G_age"
              high="G_consoCumlMax"
              low="G_consoCumlMin"
              name="Guide: ∑ Aliment/sujet"
              opacity={0.4}
              type="SplineRangeArea"
              yAxisName="yAxis3"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={reel}
              xName="age"
              yName="ratio"
              width={2}
              name="Ratio Eau/Aliment"
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
              width={2}
              name="∑ Aliment/sujet"
              type="Line"
              yAxisName="yAxis2"
              fill="#008000"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}
export default ConsoChart;
