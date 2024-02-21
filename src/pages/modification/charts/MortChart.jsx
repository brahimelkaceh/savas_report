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
  AreaSeries,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const MortChart = ({ data, show }) => {
  const lines = { width: 1 };
  const style = {
    " #chart_ChartTitle": {
      color: "red !important",
    },
  };

  return (
    <ChartComponent
      id={`chart_mort`}
      style={style}
      legendSettings={{ enableHighlight: true }}
      primaryXAxis={{
        labelIntersectAction: Browser.isDevice ? "None" : "Trim",
        labelRotation: Browser.isDevice ? -45 : 0,
        valueType: "Double",
        title: "",
        rangePadding: "Round",
        interval: 5,
        majorGridLines: { width: 1 },
        majorTickLines: { width: 1 },
        rangePadding: "None",
      }}
      primaryYAxis={{
        title: "∑ % Mortalité PD",
        // rangePadding: "None",
        opposedPosition: true,
        minimum: null,
        maximum: null,
        interval: null,
        lineStyle: { width: 1 },
        majorTickLines: { width: 1 },
        majorGridLines: {
          width: 0,
        },
        minorTickLines: { width: 0, color: "#79AC78" },
        titleStyle: {
          textAlignment: "Center",
          size: "12px",
          fontWeight: "bold",
          color: "#79AC78",
        },
        labelStyle: {
          color: "#79AC78",
          size: "11px",
        },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true }}
      width={Browser.isDevice ? "100%" : "100%"}
      // title={`Mortalité`}
      titleStyle={{
        textAlignment: "Center",
        size: "15px",
        fontWeight: "bold",
        color: "#F48FB1",
      }}

      // loaded={onChartLoad.bind(this)}
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
          AreaSeries,
          ColumnSeries,
        ]}
      />
      <AxesDirective>
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
        <AxisDirective
          rowIndex={0}
          name="yAxisC"
          opposedPosition={false}
          title="Mortalité / Semaine (%)"
          titleStyle={{
            textAlignment: "Center",
            size: "12px",
            fontWeight: "bold",
            color: "#F48FB1",
          }}
          labelStyle={{
            color: "#F48FB1",
            size: "12px",
          }}
          majorGridLines={{ width: 0, color: "#000" }}
          minorTickLines={{ width: 0, color: "#F48FB1" }}
          lineStyle={{ width: 1, color: "#F48FB1" }}
          minimum={null}
          maximum={null}
          interval={null}
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
          majorGridLines={lines}
          minorTickLines={lines}
          lineStyle={{
            width: 0,
          }}
          majorTickLines={{
            width: 0,
          }}
          minimum={0}
          maximum={10}
          interval={0.25}
          visible={show}
        ></AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={"mortSem"}
          name={show ? "% Mortalité / Semaine" : " "}
          width={3.5}
          fill="#F48FB1"
          type="Column"
          yAxisName="yAxisB"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={"bar3"}
          name={" "}
          width={2.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          fill="#D80032"
          type="Line"
          dashArray="5,5"
          yAxisName="yAxisC"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={"bar2"}
          name={" "}
          width={2.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          fill="#EC8F5E"
          type="Line"
          dashArray="5,5"
          yAxisName="yAxisC"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={"bar1"}
          name={" "}
          width={2.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          fill="#9ADE7B"
          type="Line"
          dashArray="5,5"
          yAxisName="yAxisC"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={data?.reel}
          xName="age"
          yName={"mortCuml"}
          name={show ? "∑ % Mortalité PD" : " "}
          width={3.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          fill="#79AC78"
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName={"gMortCuml"}
          name={show ? "Guide: ∑ % Mortalité PD" : " "}
          width={5.5}
          marker={{
            visible: false,
            width: 7,
            height: 7,
            shape: "Circle",
            isFilled: true,
          }}
          fill="#79AC78"
          opacity={0.5}
          type="Line"
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data?.guide}
          xName="age"
          yName=""
          name=""
          type="Line"
          columnSpacing={0.1}
          yAxisName="yAxisA"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default MortChart;
