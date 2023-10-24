import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  elements: {
    point: {
      radius: 0, // The radius of data points (default is 3)
      borderWidth: 1, // Border width of the data points
    },
    line: {
      tension: 0.1, // Adjust the line curvature (default is 0.4)
      borderColor: "rgba(255, 0, 0, 1)", // Color of the line
      borderWidth: 1.8, // Width of the line
      borderCapStyle: "round", // Line cap style ('butt', 'round', 'square')
      //   borderDash: [5, 5], // Dashed line pattern (e.g., [5, 5] for dashes)
    },
  },

  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Production",
    },
    legend: {
      display: true,
      position: "top", // 'top', 'bottom', 'left', 'right'
    },
  },
  scales: {
    x: {
      // X-axis grid customization
      grid: {
        display: true, // Display the grid lines for the X-axis
        color: "rgba(0, 0, 0, 0.08  )", // Color of the grid lines
        borderWidth: 1, // Width of the grid lines
        drawTicks: false, // Whether to draw tick marks on the grid lines
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Ponte (%)",
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        color: "rgba(0, 0, 0, 0.08)", // Color of the grid lines
      },
    },
    y1: {
      type: "linear",
      display: false,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

function ProdChart({ prodData }) {
  const labels = prodData?.ages;
  const xData = prodData?.declass;
  const zData = prodData?.ponte;
  const aData = prodData?.ponte_guide;

  const data = {
    labels,
    datasets: [
      {
        label: "Declassé",
        data: xData,
        borderColor: "#abacea",
        backgroundColor: "#abacea",
        fill: true, // Add fill property to fill the area below the line

        yAxisID: "y",
      },
      {
        label: "Ponte",
        data: zData,
        borderColor: "rgb(131, 53, 0)",
        backgroundColor: "rgb(131, 53, 0)",
        borderWidth: 4,
        // fill: "start", // Fill the area between the line and the x-axis

        yAxisID: "y",
      },
      {
        label: "Guide: Ponte",
        data: aData,
        borderColor: "#f1910180",
        backgroundColor: "#F18F01",
        borderWidth: 6,
        yAxisID: "y",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default ProdChart;
