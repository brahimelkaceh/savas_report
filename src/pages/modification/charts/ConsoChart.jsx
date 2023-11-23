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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { left, right } from "@popperjs/core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    point: {
      radius: 0, // The radius of data points (default is 3)
      borderWidth: 0.5, // Border width of the data points
      hoverRadius: 3, // Radius of data points on hover
    },
    line: {
      tension: 0, // Adjust the line curvature (default is 0.4)
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
      text: "Consommation (Aliment & Eau)",
      position: "top",
      font: {
        weight: "bold",
        size: "20px",
      },
    },

    legend: {
      display: true,
      position: "bottom", // 'top', 'bottom', 'left', 'right'
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
      grid: {
        display: true, // Display the grid lines for the X-axis
        color: "rgba(0, 0, 0, 0.08)", // Color of the grid lines
        borderWidth: 1, // Width of the grid lines
        drawTicks: false, // Whether to draw tick marks on the grid lines
      },
    },
    z: {
      type: "linear",
      display: true,
      position: "left",
      min: 50,
      max: 270,
      ticks: {
        color: "#83A2FF",
        font: {
          weight: "bold",
        },
      },
      title: {
        display: true,
        text: "Eau consommée (ml/j)", // Specify the y-axis label text
        position: "left",
        color: "#83A2FF",

        font: {
          weight: "bold",
        },
      },
      grid: {
        display: false,
        drawOnChartArea: true,
        color: "rgba(0, 0, 0, 0.08)", // Color of the grid lines
      },
      scaleLabel: {
        display: true, // Display the x-axis label
        labelString: "X-Axis Label", // Specify the x-axis label text
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      max: 150,
      ticks: {
        color: "#17594A",
        font: {
          weight: "bold",
          color: "#17594A",
        },
      },
      title: {
        display: true,
        text: "Aliment consommé (g/j)", // Specify the y-axis label text
        color: "#17594A",
        position: "left",
        font: {
          weight: "bold",
        },
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        color: "rgba(0, 0, 0, 0.08)", // Color of the grid lines
      },
      scaleLabel: {
        display: true, // Display the x-axis label
        labelString: "X-Axis Label", // Specify the x-axis label text
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      ticks: {
        color: "#008000",
        font: {
          weight: "bold",
        },
      },
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "∑ Aliment consommé (kg)", // Specify the y-axis label text
        position: "left",
        color: "#008000",
        font: {
          weight: "bold",
        },
      },
    },
    y2: {
      max: 10,
      type: "linear",
      display: true,
      position: "right",
      ticks: {
        color: "#97e0ff",
        font: {
          weight: "bold",
        },
      },
      scalePositionLeft: left,
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Ratio (Eau/Alt)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        color: "#97e0ff",
        font: {
          weight: "bold",
        },
      },
    },
  },
};

function MortChart({ consoData }) {
  const labels = consoData?.ages;
  const yData = consoData?.aps_cuml;
  const xData = consoData?.aps;
  const zData = consoData?.guide_aps_cuml;
  const aData = consoData?.ratio;
  const bData = consoData?.aps_guide;
  const cData = consoData?.eps;
  console.log(consoData);
  //   const zData = [10, 69, 60, 18, 10, 5, 15, 22, 49, 8];
  const data = {
    labels,
    datasets: [
      {
        label: "Eau",
        data: cData,
        borderColor: "#83A2FF",
        backgroundColor: "#fff",
        yAxisID: "z",
        borderWidth: 3,

        borderDash: [5, 5],
      },
      {
        label: "Aliment/sujet",
        data: xData,
        borderColor: "#17594A",
        backgroundColor: "#17594A",
        yAxisID: "y",
        borderWidth: 4,
      },
      {
        label: "Guide :  Aliment/sujet",
        data: bData,
        borderColor: "#17594A88",
        backgroundColor: "#17594A88",
        yAxisID: "y",
        borderWidth: 4,
      },
      {
        label: "∑ Aliment/sujet",
        data: yData,
        borderColor: "#008000",
        backgroundColor: "#008000",
        yAxisID: "y1",
        borderWidth: 4,
      },
      {
        label: "Guide: ∑ Aliment/sujet ",
        data: zData,
        borderColor: "#0080006a",
        backgroundColor: "#0080006a",
        borderWidth: 8,
        yAxisID: "y1",
      },
      {
        label: "Ratio Eau/Aliment",
        data: aData,
        borderColor: "#97e0ff",
        backgroundColor: "#97e0ff74",
        borderWidth: 2,
        yAxisID: "y2",
        fill: true,
        borderDash: [5, 5],
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default MortChart;

// 'table-conso-chart/': consommation
// 'table-prod-chart/': % ponte + pmo +  % declassé
