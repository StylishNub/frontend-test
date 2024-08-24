"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    setCurrentDate(date.toLocaleDateString("id-ID", options)); // Format sesuai dengan locale ID (Indonesia)
  }, []);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-1">Selamat siang, Alif</h1>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-sm text-gray-500 mb-1">Tanggal hari ini</p>
        <p className="font-semibold">{currentDate}</p>
      </div>
    </div>
  );
}
