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
      text: "Consommation",
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
        stepSize: 5,
        min: 80,
        max: 250,
      },
      title: {
        display: true,
        text: "Aliment/sujet (g)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
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
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "∑ Aliment/sujet (kg)", // Specify the y-axis label text
        position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
      },
    },
    // z1: {
    //   type: "linear",
    //   display: true,
    //   position: "right",
    //   grid: {
    //     drawOnChartArea: false,
    //   },
    //   title: {
    //     display: true,
    //     text: "∑ Aliment/sujet (kg)", // Specify the y-axis label text
    //     position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
    //   },
    // },
  },
};

function MortChart({ consoData }) {
  const labels = consoData?.ages;
  const yData = consoData?.aps_cuml;
  const xData = consoData?.aps;
  const zData = consoData?.guide_aps_cuml;
  //   const zData = [10, 69, 60, 18, 10, 5, 15, 22, 49, 8];
  const data = {
    labels,
    datasets: [
      {
        label: "Aliment/sujet",
        // data: labels.map(() => faker.datatype.number({ min: -1, max: 10 })),
        data: xData,
        borderColor: "rgb(31, 58, 95)",
        backgroundColor: "rgb(31, 58, 95)",
        yAxisID: "y",
      },
      {
        label: "∑ Aliment/sujet",
        data: yData,
        borderColor: "#C08261",
        backgroundColor: "#C08261",
        yAxisID: "y1",
        borderWidth: 4,
      },
      {
        label: "Guide: ∑ Aliment/sujet ",
        data: zData,

        borderColor: "#c1d8c36a",
        backgroundColor: "#c1d8c3",
        borderWidth: 8,
        yAxisID: "y1",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default MortChart;

// 'table-conso-chart/': consommation
// 'table-prod-chart/': % ponte + pmo +  % declassé
