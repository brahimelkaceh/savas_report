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
import { faker } from "@faker-js/faker";

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
  responsive: true,
  elements: {
    point: {
      radius: 0, // The radius of data points (default is 3)
      borderWidth: 0.5, // Border width of the data points
      hoverRadius: 3, // Radius of data points on hover
    },
    line: {
      tension: 0.4, // Adjust the line curvature (default is 0.4)
      borderColor: "rgba(255, 0, 0, 1)", // Color of the line
      borderWidth: 0.5, // Width of the line
      borderCapStyle: "round", // Line cap style ('butt', 'round', 'square')
      //   borderDash: [5, 5], // Dashed line pattern (e.g., [5, 5] for dashes)
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    datalabels: {
      display: true,
      color: "red",
    },
    legend: {
      display: true,
      position: "bottom", // 'top', 'bottom', 'left', 'right'
    },
    title: {
      display: true,
      text: " Poids corporel & Homogénéité",
      font: {
        weight: "bold",
        size: "20px",
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Age (semaine)",
        font: {
          weight: "bold",
        },
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      max: 100,
      title: {
        display: true,
        text: "Homogénéité (%)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        color: "rgb(48, 214, 48)",
        font: {
          weight: "bold",
        },
      },
      beginAtZero: true,
      ticks: {
        stepSize: 1,
        color: "rgb(48, 214, 48)",
        font: {
          weight: "bold",
        },
      },
    },
    y1: {
      type: "linear",
      display: true,
      max: 2500,
      min: 0,
      position: "right",
      ticks: {
        color: "#71c4ef",
        font: {
          weight: "bold",
        },
      },
      title: {
        display: true,
        text: "Poids corporel (g)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        color: "#71c4ef",
        font: {
          weight: "bold",
        },
      },

      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const getGradient = (chart) => {
  const {
    ctx,
    chartArea: { top, bottom, left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  gradientSegment.addColorStop(0, "red");
  gradientSegment.addColorStop(0.5, "blue");
  gradientSegment.addColorStop(1, "green");
};
function HomogPvChart({ homogPvData }) {
  const labels = homogPvData?.ages;
  const xData = homogPvData?.homog;
  const yData = homogPvData?.pv;
  const zData = homogPvData?.pv_guide;
  // console.log(homogPvData);

  const data = {
    labels,
    datasets: [
      {
        label: "Homogénéité",
        data: xData,
        borderColor: "rgb(48, 214, 48)",
        backgroundColor: "rgba(48, 214, 48, 0.09)",

        borderWidth: 1,
        yAxisID: "y",
        fill: true,
      },
      {
        label: "Poids corporel ",
        data: yData,
        borderColor: "#00668c",
        backgroundColor: "#00668c",
        borderWidth: 4,
        yAxisID: "y1",
      },
      {
        label: "Guide: Poids corporel ",
        data: zData,
        borderColor: "#71c4efa9",
        backgroundColor: "#71c4ef",
        borderWidth: 8,
        yAxisID: "y1",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default HomogPvChart;
