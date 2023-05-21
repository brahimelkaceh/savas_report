import React from "react";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    "country": "12/05",
    "declasse": 14,
    "declasseColor": "hsl(127, 70%, 50%)",
    "normaux": 188,
    "normauxColor": "hsl(108, 70%, 50%)",
  },
  {
    "country": "13/05",
    "declasse": 100,
    "declasseColor": "hsl(71, 70%, 50%)",
    "normaux": 181,
    "normauxColor": "hsl(6, 70%, 50%)",
  },
  {
    "country": "14/05",
    "declasse": 63,
    "declasseColor": "hsl(254, 70%, 50%)",
    "normaux": 120,
    "normauxColor": "hsl(29, 70%, 50%)",
  },
  {
    "country": "15/05",
    "declasse": 174,
    "declasseColor": "hsl(356, 70%, 50%)",
    "normaux": 42,
    "normauxColor": "hsl(176, 70%, 50%)",
  },
  {
    "country": "16/05",
    "declasse": 194,
    "declasseColor": "hsl(262, 70%, 50%)",
    "normaux": 170,
    "normauxColor": "hsl(244, 70%, 50%)",
  },
  {
    "country": "17/05",
    "declasse": 54,
    "declasseColor": "hsl(84, 70%, 50%)",
    "normaux": 18,
    "normauxColor": "hsl(312, 70%, 50%)",
  },
  {
    "country": "18/05",
    "declasse": 97,
    "declasseColor": "hsl(3, 70%, 50%)",
    "normaux": 154,
    "normauxColor": "hsl(24, 70%, 50%)",
  },
];
function BarCharts() {
  return (
    <ResponsiveBar
      data={data}
      keys={["declasse", "normaux"]}
      indexBy="country"
      margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "red_yellow_blue" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.4"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 4,
          translateY: -26,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 24,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
}

export default BarCharts;
