import React from "react";

import Card from "./Card";

const Statistics: React.FC = () => {
  return (
    <Card title="Total Statistik Pesan">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm">Total Pesan Keluar</p>
          <p className="font-medium">45</p>
        </div>
        <div>
          <p className="text-sm">Total Pesan Gagal</p>
          <p className="font-medium">23</p>
        </div>
        <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
          <p>Chart</p>
        </div>
      </div>
    </Card>
  );
};

export default Statistics;
