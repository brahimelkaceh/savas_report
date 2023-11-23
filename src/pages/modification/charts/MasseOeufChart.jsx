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
      text: "Masse d'oeuf",
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
    y: {
      type: "linear",
      display: true,
      position: "left",
      max: 500,

      title: {
        display: true,
        text: "Masse d'oeuf hebdomadaire (g)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        font: {
          weight: "bold",
        },
        color: "#8B4513",
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
      ticks: {
        font: {
          weight: "bold",
        },
        color: "#8B4513",
      },
    },
    y1: {
      type: "linear",
      display: true,
      max: 35,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "∑ Masse Oeuf (kg)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        font: {
          weight: "bold",
        },
        color: "#FF5B22",
      },
      ticks: {
        font: {
          weight: "bold",
        },
        color: "#FF5B22",
      },
    },
  },
};

function MasseOeufChart({ masseOeufData }) {
  const labels = masseOeufData?.ages;
  const yData = masseOeufData?.guideMassCuml;
  const zData = masseOeufData?.massCuml;
  const xData = masseOeufData?.guideMassSem;
  const wData = masseOeufData?.massSem;

  // return;
  //   const zData = [10, 69, 60, 18, 10, 5, 15, 22, 49, 8];
  const data = {
    labels,
    datasets: [
      {
        label: "Masse Oeuf",
        data: wData,
        borderColor: "#8B4513",
        backgroundColor: "#8B4513",
        borderWidth: 4,
        yAxisID: "y",
      },
      {
        label: "Guide : Masse Oeuf ",
        data: xData,
        borderColor: "#8b45135f",
        backgroundColor: "#8b45135f",
        yAxisID: "y",
        borderWidth: 8,
      },
      {
        label: "∑ Masse Oeuf",
        data: zData,
        borderColor: "#FF5B22",
        backgroundColor: "#FF5B22",
        borderWidth: 4,
        yAxisID: "y1",
      },
      {
        label: "Guide : ∑ Masse Oeuf",
        data: yData,
        borderColor: "#FF5B225f",
        backgroundColor: "#FF5B225f",
        yAxisID: "y1",
        borderWidth: 8,
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default MasseOeufChart;

// 'table-conso-chart/': consommation
// 'table-prod-chart/': % ponte + pmo +  % declassé
