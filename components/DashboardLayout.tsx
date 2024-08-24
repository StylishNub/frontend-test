import React from "react";

// Komponen untuk menampilkan progres device dan kontak
interface StatsCardProps {
  title: string;
  content: string;
  progress: number;
}

export function StatsCard({
  title,
  content,
  progress,
}: StatsCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="flex items-center">
        <div className="w-[250px] bg-gray-200 rounded-full h-3">
          <div
            className="bg-red-500 h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-500 ml-2">{progress}%</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{content}</p>
    </div>
  );
}

// Komponen untuk menampilkan pesan terakhir
export function RecentMessages() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 w-full max-w-[300px] border">
      <h2 className="text-lg font-semibold mb-4">Pesan Terakhir</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <p className="text-sm font-medium text-gray-700">
              Anda: Hai, apa kabar?
            </p>
          </div>
          <span className="text-xs text-gray-500">Terkirim</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="text-sm font-medium text-gray-700">
              Ismail Akbar: Hai juga! Bagaimana kabarmu?
            </p>
          </div>
          <span className="text-xs text-gray-500">Dibaca</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <p className="text-sm font-medium text-gray-700">
              Anda: Hi lagi, semoga hari ini baik.
            </p>
          </div>
          <span className="text-xs text-gray-500">Terkirim</span>
        </li>
      </ul>
      <a
        href="#"
        className="block mt-4 text-blue-500 text-sm text-center hover:underline"
      >
        Tampilkan lainnya
      </a>
    </div>
  );
}

// Komponen untuk layout Dashboard
export default function DashboardLayout() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Bagian Paket & Devices/Contacts */}
      <div className="bg-white shadow-sm rounded-lg p-6 flex-1 border lg:w-[719px] h-[245px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[14px] font-bold">
            Paket Saat Ini{" "}
            <span className="ml-2 bg-black text-white px-2 py-1 rounded">
              Starter
            </span>
          </h2>
          <p className="text-gray-500 text-[14px] text-right">
            Aktif sampai dengan Selasa, 29 Agustus 2023
          </p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <StatsCard
              title="Devices"
              content="5 dari 10 device yang tersedia"
              progress={50}
            />
          </div>
          <div className="ml-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Upgrade Paket
            </button>
          </div>
        </div>

        <p className="text-blue-500 text-sm mt-4 text-center">
          Tampilkan kapasitas fitur lainnya
        </p>
      </div>

      {/* Bagian Pesan Terakhir */}
      <RecentMessages />
    </div>
  );
}
