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
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
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
            maximum: 10,
            interval: 2,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          load={load.bind(this)}
          width={Browser.isDevice ? "100%" : "100%"}
          // height={Browser.isDevice ? "100%" : "100%"}
          legendSettings={{ enableHighlight: true }}
          chartArea={{ border: { width: 0 } }}
          title="Indice de conversion"
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
              title="Guide : Indice de conversion"
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
            ></AxisDirective>
          </AxesDirective>

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={guide}
              xName="G_age"
              yName="ic"
              name="Guide : Indice de conversion"
              type="Line"
              width={2}
              fill="red"
              yAxisName="yAxis1"
              border={{ width: 2 }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={reel}
              xName="age"
              yName="ic"
              name="Indice de conversion"
              type="Line"
              width={2}
              fill="#65B741"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default IcChart;
