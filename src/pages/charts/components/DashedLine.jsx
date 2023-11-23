/**
 * Sample for Stock Chart with Hilo open close
 */
import * as React from "react";
import { useEffect } from "react";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Inject,
  DateTime,
  Tooltip,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
} from "@syncfusion/ej2-react-charts";
import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";
// import { googl } from "./stock-data";
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .charts {
        align :center
    }`;
const DashedLine = () => {
  const load = (args) => {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.stockChart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
  };
  const tooltipRender = (args) => {
    if (args.text.split("<br/>")[4]) {
      let target = parseInt(
        args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0]
      );
      let value = (target / 100000000).toFixed(1) + "B";
      args.text = args.text.replace(
        args.text.split("<br/>")[4].split("<b>")[1].split("</b>")[0],
        value
      );
    }
  };
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <StockChartComponent
          id="stockchartDashedLine"
          primaryXAxis={{
            valueType: "DateTime",
            majorGridLines: { width: 0 },
            majorTickLines: { color: "transparent" },
            crosshairTooltip: { enable: true },
          }}
          primaryYAxis={{
            labelFormat: "n0",
            lineStyle: { width: 0 },
            rangePadding: "None",
            majorTickLines: { height: 0 },
          }}
          load={load.bind(this)}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true, position: "Nearest" }}
          tooltipRender={tooltipRender}
          crosshair={{ enable: true }}
          title="AAPL Stock Price"
        >
          <Inject
            services={[
              DateTime,
              Tooltip,
              RangeTooltip,
              Crosshair,
              LineSeries,
              SplineSeries,
              CandleSeries,
              HiloOpenCloseSeries,
              HiloSeries,
              RangeAreaSeries,
              Trendlines,
              EmaIndicator,
              RsiIndicator,
              BollingerBands,
              TmaIndicator,
              MomentumIndicator,
              SmaIndicator,
              AtrIndicator,
              Export,
              AccumulationDistributionIndicator,
              MacdIndicator,
              StochasticIndicator,
            ]}
          />
          <StockChartSeriesCollectionDirective>
            <StockChartSeriesDirective
              dataSource={googl}
              xName="x"
              high="high"
              low="low"
              open="open"
              close="close"
              type="HiloOpenClose"
              bearFillColor={"#2ecd71"}
              bullFillColor={"#e74c3d"}
              animation={{ enable: true }}
            />
          </StockChartSeriesCollectionDirective>
        </StockChartComponent>
      </div>
    </div>
  );
};
export default DashedLine;
