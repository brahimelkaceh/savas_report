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
        drawTicks: true, // Whether to draw tick marks on the grid lines
        drawOnChartArea: false,
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Ponte",
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
        drawOnChartArea: true,
      },
    },
  },
};

function ProductionChart({ prodChart }) {
  // console.log(prodChart.map((prod) => prod?.dates[0]));
  const labels = prodChart[0]?.dates;
  const xData = prodChart[1]?.prodTotal;
  const zData = prodChart[2]?.normaux;
  const aData = prodChart[3]?.declass;
  const bData = prodChart[4]?.dj;

  const data = {
    labels,
    datasets: [
      {
        label: "Production Total",
        data: xData,
        borderColor: "#abacea",
        backgroundColor: "#abacea",
        fill: false, // Add fill property to fill the area below the line

        yAxisID: "y",
      },
      {
        label: "Normaux",
        data: zData,

        borderColor: "rgb(131, 53, 0)",
        backgroundColor: "rgb(131, 53, 0)",
        borderWidth: 1,

        yAxisID: "y",
      },
      {
        label: "Declass",
        data: aData,
        borderColor: "#F18F01",
        backgroundColor: "#F18F01",
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        label: "DJ",
        data: bData,
        borderColor: "#186F65",
        backgroundColor: "#186F65",
        borderWidth: 1,
        yAxisID: "y",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default ProductionChart;
