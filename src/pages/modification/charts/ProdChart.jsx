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
      text: "Production œufs",
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
        font: {
          weight: "bold",
        },
        color: "rgb(131, 53, 0)",
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        color: "rgba(0, 0, 0, 0.08)", // Color of the grid lines
      },
      ticks: {
        font: {
          weight: "bold",
        },
        color: "rgb(131, 53, 0)",
      },
    },
    y1: {
      type: "linear",
      display: true,
      max: 5,
      position: "right",
      title: {
        display: true,
        text: "Declassées (%)",
        font: {
          weight: "bold",
        },
        color: "#E08E6D",
      },
      ticks: {
        font: {
          weight: "bold",
        },
        color: "#E08E6D",
      },
    },
    // y3: {
    //   type: "linear",
    //   display: true,
    //   position: "right",
    //   max: 10,
    //   grid: {
    //     display: false,
    //   },
    //   title: {
    //     display: true,
    //     text: "NOPPP/Sem",
    //     font: {
    //       weight: "bold",
    //     },
    //     color: "#9FBB73",
    //   },
    //   ticks: {
    //     font: {
    //       weight: "bold",
    //     },
    //     color: "#9FBB73",
    //   },
    // },
    y2: {
      type: "linear",
      display: true,
      position: "left",
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: "∑ NOPPD",
        font: {
          weight: "bold",
        },
        color: "#FF8400",
      },
      ticks: {
        font: {
          weight: "bold",
        },
        color: "#FF8400",
      },
    },
  },
};

function ProdChart({ prodData }) {
  const labels = prodData?.ages;
  const xData = prodData?.declass;
  const zData = prodData?.ponte;
  const aData = prodData?.ponte_guide;
  const bData = prodData?.pmo;
  const cData = prodData?.pmo_guide;
  const dData = prodData?.blancs;
  const eData = prodData?.noppp_sem;
  const eaData = prodData?.noppp_sem_guide;
  const fData = prodData?.noppd_cuml;
  const faData = prodData?.noppd_cuml_guide;

  const data = {
    labels,
    datasets: [
      // {
      //   label: "NOPPP/sem ",
      //   data: eData,
      //   borderColor: "#9FBB73",
      //   backgroundColor: "#9FBB73",
      //   borderWidth: 4,
      //   yAxisID: "y3",
      // },
      // {
      //   label: "Guide : NOPPP/sem  ",
      //   data: eaData,
      //   borderColor: "#FFEBD8",
      //   backgroundColor: "#FFEBD8",
      //   borderWidth: 4,
      //   yAxisID: "y3",
      // },
      {
        label: "∑ NOPPD ",
        data: fData,
        borderColor: "#FF8400",
        backgroundColor: "#FF8400",
        borderWidth: 4,
        yAxisID: "y2",
      },
      {
        label: "Guide: ∑ NOPPD ",
        data: faData,
        borderColor: "#F7CCAC",
        backgroundColor: "#F7CCAC",
        borderWidth: 8,
        yAxisID: "y2",
      },

      {
        label: "Ponte (%)",
        data: zData,
        borderColor: "rgb(131, 53, 0)",
        backgroundColor: "rgb(131, 53, 0)",
        borderWidth: 4,
        // fill: "start", // Fill the area between the line and the x-axis

        yAxisID: "y",
      },
      {
        label: "Guide: Ponte (%)",
        data: aData,
        borderColor: "#f1910180",
        backgroundColor: "#F18F01",
        borderWidth: 8,
        yAxisID: "y",
      },
      {
        label: "PMO (g)",
        data: bData,
        borderColor: "#FFD93D",
        backgroundColor: "#FFD93D",
        borderWidth: 4,
        // fill: "start", // Fill the area between the line and the x-axis

        yAxisID: "y",
      },
      {
        label: "Guide: PMO (g)",
        data: cData,
        borderColor: "#ECE3CE",
        backgroundColor: "#ECE3CE",
        borderWidth: 8,
        yAxisID: "y",
      },
      {
        label: "Blanc (%)",
        data: dData,
        borderColor: "transparent",
        backgroundColor: "#F58869a4",
        fill: true, // Add fill property to fill the area below the line
        yAxisID: "y1",
      },
      {
        label: "Declassées (%)",
        data: xData,
        borderColor: "#E08E6D",
        backgroundColor: "#fce3dc",
        fill: true, // Add fill property to fill the area below the line
        yAxisID: "y1",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default ProdChart;
