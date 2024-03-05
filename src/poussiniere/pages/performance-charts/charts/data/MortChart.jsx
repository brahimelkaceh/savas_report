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
        majorGridLines: { width: 1 },
        majorTickLines: { width: 1 },
      }}
      primaryYAxis={{
        title: "% Mortalité / Semaine",
        titleStyle: {
          textAlignment: "Center",
          size: "11px",
          fontWeight: "normal",
        },
        majorTickLines: { width: 0 },
        majorGridLines: { width: show ? 0 : 1 },
        lineStyle: { width: 1 },

        maximum: null,
        interval: null,
        labelFormat: "{value}%",
      }}
      chartArea={{ border: { width: 0 } }}
      load={load.bind(this)}
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
      width={Browser.isDevice ? "100%" : "100%"}
      // title="% Mortalité"
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
            size: "11px",
            fontWeight: "normal",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={null}
          interval={1}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "11px",
            fontWeight: "normal",
          }}
          labelStyle={{
            color: "transparent",
          }}
          majorGridLines={{
            width: 0,
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
          maximum={null}
          interval={null}
          // visible={show}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisB"
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
            width: 0,
          }}
          lineStyle={{
            width: 0,
          }}
          majorTickLines={{
            width: 0,
          }}
          minimum={0}
          maximum={100}
          interval={1.5}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName="mort_sem"
          width={2}
          name={show ? "Guide : % Mortalité / Semaine" : " "}
          type="Column"
          fill="#F48FB1"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={reel}
          xName="age"
          columnSpacing={0.1}
          yName="mort_sem"
          name={show ? "% Mortalité / Semaine" : " "}
          fill="#880e4f"
          type="Column"
        />
        <SeriesDirective
          dataSource={reel}
          xName="age"
          yName="mort_cuml"
          name={show ? "∑ Mortalité / PD (%)" : " "}
          type="Line"
          fill="#79AC78"
          width={show ? 5 : 2.5}
          yAxisName="yAxis1"
        />
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName="G_mortCuml"
          name={show ? "Guide : ∑ % moratilité PD" : " "}
          width={show ? 5 : 2.5}
          fill="#79AC78"
          opacity={0.5}
          type="Line"
          yAxisName="yAxisA"
        />
        <SeriesDirective
          dataSource={guide}
          xName="G_age"
          yName=""
          name=""
          opacity={0.5}
          type="Line"
          yAxisName="yAxisB"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MortChart;
