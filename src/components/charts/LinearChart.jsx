import React from "react";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    "id": "Ponte [guide]",
    "color": "hsl(265, 70%, 50%)",
    "data": [
      {
        "x": "Sem1",
        "y": 30,
      },
      {
        "x": "Sem2",
        "y": 20,
      },
      {
        "x": "Sem3",
        "y": 22,
      },
      {
        "x": "Sem4",
        "y": 40,
      },
      {
        "x": "Sem5",
        "y": 12,
      },
      {
        "x": "Sem6",
        "y": 15,
      },
      {
        "x": "Sem7",
        "y": 22,
      },
      {
        "x": "Sem8",
        "y": 19,
      },
      {
        "x": "Sem9",
        "y": 22,
      },
      {
        "x": "Sem10",
        "y": 14,
      },
    ],
  },
  {
    "id": "Ponte [réel]",
    "color": "hsl(264, 70%, 50%)",
    "data": [
      {
        "x": "Sem1",
        "y": 4,
      },
      {
        "x": "Sem2",
        "y": 6,
      },
      {
        "x": "Sem3",
        "y": 10,
      },
      {
        "x": "Sem4",
        "y": 22,
      },
      {
        "x": "Sem5",
        "y": 24,
      },
      {
        "x": "Sem6",
        "y": 16,
      },
      {
        "x": "Sem7",
        "y": 20,
      },
      {
        "x": "Sem8",
        "y": 95,
      },
      {
        "x": "Sem9",
        "y": 14,
      },
      {
        "x": "Sem10",
        "y": 11,
      },
    ],
  },
  {
    "id": "PMO[réel]",
    "color": "hsl(222, 70%, 50%)",
    "data": [
      {
        "x": "Sem1",
        "y": 22,
      },
      {
        "x": "Sem2",
        "y": 6,
      },
      {
        "x": "Sem3",
        "y": 13,
      },
      {
        "x": "Sem4",
        "y": 19,
      },
      {
        "x": "Sem5",
        "y": 16,
      },
      {
        "x": "Sem6",
        "y": 19,
      },
      {
        "x": "Sem7",
        "y": 62,
      },
      {
        "x": "Sem8",
        "y": 12,
      },
      {
        "x": "Sem9",
        "y": 14,
      },
      {
        "x": "Sem10",
        "y": 16.5,
      },
    ],
  },
  {
    "id": "PMO [guide]",
    "color": "hsl(5, 70%, 50%)",
    "data": [
      {
        "x": "Sem1",
        "y": 18,
      },
      {
        "x": "Sem2",
        "y": 50,
      },
      {
        "x": "Sem3",
        "y": 23,
      },
      {
        "x": "Sem4",
        "y": 88,
      },
      {
        "x": "Sem5",
        "y": 45,
      },
      {
        "x": "Sem6",
        "y": 26,
      },
      {
        "x": "Sem7",
        "y": 13,
      },
      {
        "x": "Sem8",
        "y": 29,
      },
      {
        "x": "Sem9",
        "y": 2,
      },
      {
        "x": "Sem10",
        "y": 64,
      },
    ],
  },
];

function LinearChart() {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 20, bottom: 50, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "transportation",
        legendOffset: 35,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "%",
        legendOffset: -10,
        legendPosition: "end",
      }}
      colors={{ scheme: "dark2" }}
      lineWidth={2}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      areaBlendMode="darken"
      useMesh={true}
      // legends={[
      //   {
      //     anchor: "top-right",
      //     direction: "row",
      //     justify: false,
      //     translateX: 0,
      //     translateY: -50,
      //     itemsSpacing: 2,
      //     itemDirection: "left-to-right",
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemOpacity: 0.75,
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     symbolBorderColor: "rgba(0, 0, 0, .5)",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemBackground: "rgba(0, 0, 0, .03)",
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
}

export default LinearChart;
