import React from "react";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import Card from "./Card";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  title: string;
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ title, data }) => {
  const chartData = {
    labels: ["Pesan Masuk", "Pesan Keluar", "Pesan Gagal"],
    datasets: [
      {
        label: "# of Messages",
        data: data,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card title={title}>
      <div className="w-full flex justify-center">
        <Doughnut data={chartData} />
      </div>
    </Card>
  );
};

export default Chart;
