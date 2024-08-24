"use client";

import React from "react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AnalyticsChart() {
  // Data untuk Donut Chart
  const data = {
    labels: ["Pesan Masuk", "Pesan Keluar", "Pesan Gagal"],
    datasets: [
      {
        label: "Jumlah Pesan",
        data: [45, 23, 8], // Data sesuai dengan ringkasan hari ini
        backgroundColor: [
          "rgba(51, 102, 255, 1)", // Warna solid
          "rgba(79, 190, 171, 1)",
          "rgba(243, 245, 248, 1)",
        ],
        borderColor: [
          "rgba(51, 102, 255, 1)", // Warna solid
          "rgba(79, 190, 171, 1)",
          "rgba(243, 245, 248, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Menonaktifkan keterangan
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}`; // Menampilkan label dan nilai saat tooltip muncul
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 sm:w-full md:w-[300px] lg:w-[400px]">
      <h2 className="text-lg font-semibold mb-4">Analitik</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Statistik Pesan */}
        <div className="border lg:w-[348px] lg:h-[200px]] text-center mt-5">
          <h3 className="font-medium text-gray-700 ml-1">Ringkasan hari ini</h3>
          <div className="mt-5 space-y-2">
            <p className="text-[12px] font-bold">
              Pesan Masuk: <span className="font-normal">7</span>
            </p>
            <p className="text-[12px] font-bold">
              Pesan Keluar: <span className="font-normal">24</span>
            </p>
            <p className="text-[12px] font-bold">
              Pesan Gagal: <span className="font-normal">0</span>
            </p>
          </div>
        </div>
        {/* Grafik Analitik */}
        <div className="ml-[200px] w-full h-32 md:h-36 flex items-center justify-center border rounded-lg  md:w-[300px] lg:w-[550px] lg:h-[200px]">
          <div>
            <div className="flex flex-col justify-center text-gray-700 w-full md:w-[300px] lg:w-[400px] pr-4">
              <p className="text-lg font-semibold">Total Pesanan</p>
              <p className="text-sm">
                Total pesan terakhir: <span className="font-bold">45</span>
              </p>
              <p className="text-sm">
                Total pesan gagal: <span className="font-bold">8</span>
              </p>
              <p className="text-sm">
                Total pesan masuk: <span className="font-bold">23</span>
              </p>
            </div>
          </div>
          <div className="w-[100px]">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
