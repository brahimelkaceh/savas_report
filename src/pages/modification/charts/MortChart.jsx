import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
const options = {
  elements: {
    point: {
      radius: 0, // The radius of data points (default is 3)
      borderWidth: 0.5, // Border width of the data points
      hoverRadius: 3, // Radius of data points on hover
    },
    line: {
      tension: 0.4, // Adjust the line curvature (default is 0.4)
      borderColor: "rgba(0, 102, 140,0)", // Color of the line
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
      text: "Mortalité",
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
      position: "right",
      title: {
        display: true,
        text: "∑ Mortalité PD (%)",
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
      position: "left",
      title: {
        display: true,
        text: "Mortalité / Semaine (%)",
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
function MortChart({ mortData }) {
  // console.log(mortData);
  // console.log(mortData.mort_sem?.map((data) => data));
  const labels = mortData?.ages;

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "∑ moratilité PD",
        borderColor: "#005B41",
        backgroundColor: "#005B41",
        borderWidth: 4, // Set the border width

        data: mortData?.mort_cuml,
      },
      {
        type: "line",
        label: "Guide:∑ moratilité PD",
        borderColor: "#C1D8C3a7",
        backgroundColor: "#C1D8C3",
        borderWidth: 8, // Set the border width

        data: mortData?.guide_mort_cuml,
      },

      {
        type: "bar",
        label: "Mortalité / Semaine",
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        barThickness: 5, // Customize the bar width here (in pixels)
        fill: false,
        data: mortData?.mort_sem,
        yAxisID: "y1",
      },
      // {
      //   type: "bar",
      //   label: "Guide: moratilité/Semaine",
      //   backgroundColor: "rgba(75, 192, 192,0.5)",
      //   data: mortData.guide_mort_sem,
      //   barThickness: 5, // Customize the bar width here (in pixels)
      //   fill: false,
      //   yAxisID: "y1",
      //   display: true,
      // },
    ],
  };
  return <Chart type="bar" options={options} data={data} />;
}

export default MortChart;
