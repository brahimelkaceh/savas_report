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

const Chart = ({ data, paramId }) => {
  const onChartLoad = (args) => {
    let chart = document.getElementById(`chart`);
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

  const style = {
    color: "red !important",
    height: "100% !important",
    backgroundColor: "red !important ",
  };

  let display;
  const tooltip = { enable: true, shared: true, location, x: 20, y: 10 };
  return (
    <ChartComponent
      id={`chart`}
      style={style}
      primaryxAxis={{
        valueType: "Double",
        title: "Overs",
        labelFormat: "age",
      }}
      load={load.bind(this)}
      primaryYAxis={{
        maximum: 500,
        title: "title",
        interval: 50,
        rangePadding: "None",
        lineStyle: { width: 1 },
        majorTickLines: { width: 1 },
        minorTickLines: { width: 1 },
        titleStyle: {
          textAlignment: "Center",
          size: "10px",
          fontWeight: "400",
        },
        visible: false, // Set the visible property to false to disable the primaryYAxis
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={tooltip}
      legendSettings={{ enableHighlight: true }}
      width={Browser.isDevice ? "100%" : "100%"}
      height={"100%"}
      title={"Courbe de comparaison"}
      titleStyle={{
        textAlignment: "Center",
        size: "18px",
        fontWeight: "600",
        color: "rgb(131, 53, 0)",
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
          SplineSeries,
        ]}
      />
      <AxesDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={false}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          labelStyle={{
            color: "transparent",
          }}
          majorGridLines={{ width: 2 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={100}
          interval={10}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxisA"
          opposedPosition={true}
          labelStyle={{
            color: "transparent",
          }}
          title=""
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0.5 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={100}
          interval={2.5}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis0"
          opposedPosition={false}
          title="Ponte (%)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 0 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={100}
          interval={5}
        ></AxisDirective>
        <AxisDirective
          rowIndex={1}
          name="yAxis1"
          opposedPosition={true}
          title="∑ NOPPD"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
            // color: "white",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 0 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={500}
          // visible={false}
          interval={50}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis2"
          opposedPosition={false}
          title="PMO (g)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 1 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={100}
          interval={10}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis3"
          opposedPosition={true}
          title="Blancs"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={15}
          interval={3}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis4"
          opposedPosition={true}
          title="Declassés"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={15}
          interval={3}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis5"
          opposedPosition={false}
          title="Mortalité / Semaine (%)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={1}
          interval={0.1}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis6"
          opposedPosition={true}
          title="∑ Mortalité / PD (%)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={15}
          interval={3}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis7"
          opposedPosition={false}
          title="Eau consommée (ml/j)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={300}
          interval={50}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis8"
          opposedPosition={false}
          title="Aliment consommé (g/j)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={150}
          interval={30}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis9"
          opposedPosition={true}
          title="∑ Aliment consommé (kg)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={150}
          interval={30}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis10"
          opposedPosition={false}
          title="Ratio (Eau/Alt)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={5}
          interval={0.5}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis11"
          opposedPosition={false}
          title="Homogénéité (%)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={100}
          interval={10}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis12"
          opposedPosition={true}
          title="Poids corporel (g)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={2500}
          interval={500}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis13"
          opposedPosition={false}
          title="Masse d'oeuf hebdomadaire (g)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={500}
          interval={50}
        ></AxisDirective>
        <AxisDirective
          rowIndex={0}
          name="yAxis14"
          opposedPosition={true}
          title="∑ Masse Oeuf (kg)"
          titleStyle={{
            textAlignment: "Center",
            size: "10px",
            fontWeight: "400",
          }}
          majorGridLines={{ width: 0 }}
          minorTickLines={{ width: 1 }}
          lineStyle={{ width: 1 }}
          minimum={0}
          maximum={35}
          interval={5}
        ></AxisDirective>
      </AxesDirective>

      <SeriesCollectionDirective>
        {data?.map((d) => {
          display = d?.data?.map((data, i) => {
            return (
              <SeriesDirective
                key={data?.bat}
                dataSource={data?.data}
                xName="age"
                yName={"value"}
                name={`${data.bat}-${data.site}`}
                width={3}
                marker={{
                  visible: false,
                  width: 7,
                  height: 7,
                  shape: "Circle",
                  isFilled: false,
                }}
                type="Spline"
                yAxisName={`yAxis${d?.param}`}
              ></SeriesDirective>
            );
          });
          return display;
        })}
        {data && (
          <SeriesDirective
            dataSource={data[0]}
            xName="age"
            yName="y"
            name=""
            width={3}
            marker={{
              visible: true,
              width: 7,
              height: 7,
              shape: "Circle",
              isFilled: true,
            }}
            type="Line"
            yAxisName={`yAxisA`}
          ></SeriesDirective>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default Chart;
