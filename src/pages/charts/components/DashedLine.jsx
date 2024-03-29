/**
 * Sample for Line Series with dashed line
 */
import * as React from "react";
import { useEffect, useState } from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  AnnotationDirective,
  AnnotationsDirective,
  Inject,
  ChartAnnotation,
  LineSeries,
  Crosshair,
  Category,
  Tooltip,
  Highlight,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
export let data1 = [
  { x: "Jan", y: 100 },
  { x: "Feb", y: 110 },
  { x: "Mar", y: 125 },
  { x: "Apr", y: 150 },
  { x: "May", y: 140 },
  { x: "Jun", y: 160 },
];
export let data2 = [
  { x: "Jun", y: 160 },
  { x: "Jul", y: 170 },
  { x: "Aug", y: 180 },
  { x: "Sep", y: 190 },
  { x: "Oct", y: 200 },
  { x: "Nov", y: 230 },
  { x: "Dec", y: 270 },
];
export let data3 = [
  { x: "Jan", y: 200 },
  { x: "Feb", y: 210 },
  { x: "Mar", y: 225 },
  { x: "Apr", y: 250 },
  { x: "May", y: 240 },
  { x: "Jun", y: 260 },
];
export let data4 = [
  { x: "Jun", y: 260 },
  { x: "Jul", y: 270 },
  { x: "Aug", y: 280 },
  { x: "Sep", y: 290 },
  { x: "Oct", y: 300 },
  { x: "Nov", y: 330 },
  { x: "Dec", y: 370 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    #charts_Series_1 {
        stroke-dasharray: 10px 10px;
        stroke-linejoin: round; stroke-linecap: round;
        -webkit-animation: dash 1s linear infinite;
        animation: dash 1s linear infinite;
    }
 
    #charts_Series_0_Point_3_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }
 
    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
 
    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }`;
const DashedLine = () => {
  const [content, setContent] = useState("<div>Actual</div>");
  const [content1, setContent1] = useState("<div>Forecast</div>");
  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };
  const load = (args) => {
    let annotationColor = "light";
    args.chart.annotations[0].content =
      '<div style="color:black; font-weight:bold;">Actual</div>';
    args.chart.annotations[1].content =
      '<div style="color:black; font-weight:bold;">Forecast</div>';
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
    if (
      selectedTheme === "highcontrast" ||
      selectedTheme.indexOf("dark") > -1
    ) {
      args.chart.annotations[0].content =
        '<div style="color:white; font-weight:bold;">Actual</div>';
      args.chart.annotations[1].content =
        '<div style="color:white; font-weight:bold;">Forecast</div>';
    }
    if (selectedTheme && selectedTheme.indexOf("fabric-dark") > -1) {
      annotationColor = "dark";
    } else if (selectedTheme && selectedTheme.indexOf("fabric") > -1) {
      annotationColor = "light";
    } else if (selectedTheme === "material-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "material") {
      annotationColor = "light";
    } else if (selectedTheme === "bootstrap5-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "bootstrap5") {
      annotationColor = "light";
    } else if (selectedTheme === "bootstrap-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "bootstrap") {
      annotationColor = "light";
    } else if (selectedTheme === "highcontrast") {
      annotationColor = "dark";
    } else if (selectedTheme === "fluent-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "fluent") {
      annotationColor = "light";
    } else if (selectedTheme === "tailwind-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "tailwind") {
      annotationColor = "light";
    } else if (selectedTheme === "material3-dark") {
      annotationColor = "dark";
    } else if (selectedTheme === "material3") {
      annotationColor = "light";
    } else {
      annotationColor = "light";
    }
    if (annotationColor == "light") {
      setContent('<div style="color:black; font-weight:bold;">Actual</div>');
      setContent1('<div style="color:black; font-weight:bold;">Forecast</div>');
    } else {
      setContent(
        '<div style="color:whitesmoke; font-weight:bold;">Actual</div>'
      );
      setContent1(
        '<div style="color:whitesmoke; font-weight:bold;">Forecast</div>'
      );
    }
  };
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            majorGridLines: { width: 0 },
            interval: 1,
            labelIntersectAction: Browser.isDevice ? "None" : "Trim",
            labelRotation: Browser.isDevice ? -45 : 0,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          load={load.bind(this)}
          primaryYAxis={{
            labelFormat: "{value}k",
            rangePadding: "None",
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 300,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: true,
            format: "${point.x} : <b>${point.y}</b>",
            header: "<b>Fruits Production</b>",
          }}
          legendSettings={{ enableHighlight: true }}
          crosshair={{
            enable: false,
            line: {
              color: "rgba(204,214,235,0.25)",
              width: Browser.isDevice ? 50 : 20,
            },
            lineType: "Vertical",
          }}
          width={Browser.isDevice ? "100%" : "75%"}
          title="Fruits Production Statistics"
          loaded={onChartLoad.bind(this)}
        >
          <Inject
            services={[
              LineSeries,
              Category,
              Tooltip,
              Crosshair,
              ChartAnnotation,
              Highlight,
              Legend,
            ]}
          />
          <AnnotationsDirective>
            <AnnotationDirective
              content={content}
              region="Series"
              x="15%"
              y="55%"
            ></AnnotationDirective>
            <AnnotationDirective
              content={content1}
              region="Series"
              x="65%"
              y="30%"
            ></AnnotationDirective>
          </AnnotationsDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              name="data1"
              width={2}
              marker={{ visible: true, width: 7, height: 7, shape: "Diamond" }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data2}
              xName="x"
              yName="y"
              name="data2"
              width={2}
              marker={{ visible: false, width: 7, height: 7, shape: "Diamond" }}
              dashArray="10"
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data3}
              xName="x"
              yName="y"
              name="data3"
              width={2}
              marker={{ visible: true, width: 7, height: 7, shape: "Diamond" }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={data4}
              xName="x"
              yName="y"
              name="data4"
              width={2}
              marker={{ visible: false, width: 7, height: 7, shape: "Diamond" }}
              dashArray="10"
              type="Line"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default DashedLine;
