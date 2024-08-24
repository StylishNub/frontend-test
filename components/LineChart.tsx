"use client";

import React from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
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

interface LineChartProps {
  title: string;
  labels: string[];
  data: number[];
}

const LineChart: React.FC<LineChartProps> = ({ title, labels, data }) => {
  // Membuat gradien
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const gradient = ctx?.createLinearGradient(0, 0, 0, 400); // Atur tinggi sesuai dengan kebutuhan

  if (gradient) {
    gradient.addColorStop(0, "rgba(54, 162, 235, 0.6)"); // Warna awal gradien
    gradient.addColorStop(1, "rgba(54, 162, 235, 0)"); // Warna akhir gradien
  }

  const lineData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        fill: true,
        backgroundColor: gradient, // Terapkan gradien sebagai background
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1, // Menyusun garis agar memiliki sudut tajam
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 0.1,
        max: 1,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-medium text-gray-700 mb-4">{title}</h3>
      <div className="w-full">
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
