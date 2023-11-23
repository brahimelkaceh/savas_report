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
      text: "Aliment / Oeuf",
      font: {
        weight: "bold",
        size: "20px",
      },
    },
    legend: {
      display: true,
      position: "top", // 'top', 'bottom', 'left', 'right'
    },
  },
  scales: {
    x: {
      // X-axis grid customization
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
      ticks: {
        stepSize: 500,
      },
      min: 0,
      title: {
        display: true,
        text: "Aliment/Oeuf ", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
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
  },
};

function AltChart({ altOeufData }) {
  const labels = altOeufData?.ages;
  const yData = altOeufData?.altoeufCuml;
  const zData = altOeufData?.guideAltoeufCuml;
  const xData = altOeufData?.altoeufSem;
  const wData = altOeufData?.guideAltoeufSem;
  // return;
  //   const zData = [10, 69, 60, 18, 10, 5, 15, 22, 49, 8];
  const data = {
    labels,
    datasets: [
      {
        label: "Aliment/Oeuf",
        // data: labels.map(() => faker.datatype.number({ min: -1, max: 10 })),
        data: xData,
        borderColor: "#8f1e00",
        backgroundColor: "#8f1e00",
        yAxisID: "y",
        borderWidth: 4,
      },
      {
        label: "∑ Aliment/oeuf",
        data: yData,
        borderColor: "#1F3A5F",
        backgroundColor: "#1F3A5F",
        yAxisID: "y",
        borderWidth: 4,
      },
      {
        label: "Guide: ∑ Aliment/Oeuf  ",
        data: zData,
        borderColor: "#1F3A5F6a",
        backgroundColor: "#1F3A5F6a",
        borderWidth: 8,
        yAxisID: "y",
      },
      {
        label: "Guide: Aliment/Oeuf   ",
        data: wData,

        borderColor: "#8f1e006a",
        backgroundColor: "#8f1e006a",
        borderWidth: 8,
        yAxisID: "y",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default AltChart;

// 'table-conso-chart/': consommation
// 'table-prod-chart/': % ponte + pmo +  % declassé
