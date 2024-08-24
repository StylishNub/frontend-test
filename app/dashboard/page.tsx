"use client";

import React from "react";
import AnalyticsChart from "@/components/AnalyticsChart";
import DashboardLayout from "@/components/DashboardLayout"; // Ubah impor menjadi default import
import LineChart from "@/components/LineChart";

const DashboardPage: React.FC = () => {
  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const data = [
    0.48, 0.5, 0.49, 0.47, 0.6, 0.55, 0.51, 0.5, 0.49, 0.72, 0.68, 0.6, 0.55,
    0.5, 0.5, 0.5, 0.5, 0.48, 0.51, 0.49, 0.5, 0.48, 0.51, 0.5,
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Layout with StatsCard and RecentMessages */}
      <DashboardLayout />

      {/* Analytics and Charts */}
      <AnalyticsChart />

      {/* Additional Line Charts */}
      <div className="space-y-6">
        <LineChart title="Grafik Chart Perjam" labels={labels} data={data} />
        <LineChart title="Trend Interaksi Pesan" labels={labels} data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;
