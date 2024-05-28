import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Line Chart",
        font: {
          size: 16,
        },
      },
    },
    animation: {
      duration: 2000,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData = {
    labels: data.map((row) => row.Name),
    datasets: [
      {
        label: "Overall Profit",
        data: data.map((row) => row["Overall Profit"]),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <Line data={lineChartData} options={commonOptions} />
    </div>
  );
};

export default LineChart;
