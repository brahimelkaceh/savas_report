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

function HomogPvChart({ homogPvData }) {
  console.log(homogPvData);
  const labels = homogPvData?.ages;
  const xData = homogPvData?.homog;
  const yData = homogPvData?.pv;
  const zData = homogPvData?.pv_guide;

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
      title: {
        display: true,
        text: "Homogénéité & poids corporel",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Homogénéité (%)", // Specify the y-axis label text
          position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          min: 60,
          max: 80,
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Poids corporel (g)", // Specify the y-axis label text
          position: "left", // Position of the y-axis label (can be 'top', 'bottom', 'left', or 'right')
        },

        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const data = {
    labels,

    datasets: [
      {
        label: "Homogénéité",
        // data: labels.map(() => faker.datatype.number({ min: -1, max: 10 })),
        data: xData,
        borderColor: "rgb(48, 214, 48)",
        backgroundColor: "rgba(48, 214, 48, 0.09)",
        borderWidth: 1,

        yAxisID: "y",
        fill: true,
      },
      {
        label: "Min guide",
        borderColor: "green",
        borderWidth: 3,
        borderDash: [5, 5],
        yAxisID: "y1",
        backgroundColor: "rgba(0, 0, 0, 0)", // Background color for the fill
      },
      {
        label: "Max guide",
        borderColor: "red",
        borderWidth: 3,
        borderDash: [5, 5],
        yAxisID: "y1",
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Background color for the fill
        spanGaps: true,
        fill: false,
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
