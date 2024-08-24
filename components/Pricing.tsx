"use client";

import React, { useState } from "react";

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Our Pricing
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button
              className={`px-6 py-2 font-semibold rounded-full ${
                !isYearly ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
              onClick={togglePricing}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-full ${
                isYearly ? "bg-blue-600 text-white" : "text-gray-600"
              }`}
              onClick={togglePricing}
            >
              Yearly
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mb-12">
          Hemat hingga 25% dengan paket tahunan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Starter Plan */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Starter</h3>
            <p className="text-gray-500 mb-4">
              Mulai pengalaman Anda dengan paket dasar yang mendukung kebutuhan
              dasar untuk bisnis Anda.
            </p>
            <p className="text-2xl font-bold mb-4">Gratis</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
              Start Now
            </button>
            <ul className="text-left space-y-2">
              <li>✅ 100 Auto reply</li>
              <li>✅ 500 Broadcast</li>
              <li>✅ 50 Campaign</li>
              <li>✅ 500 Contact</li>
              <li>✅ 5 Device</li>
              <li>✅ Excel / CSV Contact Import</li>
              <li>✅ Google Contact Sync</li>
            </ul>
          </div>

          {/* Basic Plan */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Basic</h3>
            <p className="text-gray-500 mb-4">
              Dapatkan akses selama 1 bulan dengan fitur-fitur standar untuk
              mendukung bisnis kecil hingga menengah.
            </p>
            <p className="text-2xl font-bold mb-4">
              Rp. 65.000{" "}
              <span className="text-sm text-gray-500">
                /{isYearly ? "tahun" : "bulan"}
              </span>
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold mb-6">
              Get Started
            </button>
            <ul className="text-left space-y-2">
              <li>✅ 100 Auto reply</li>
              <li>✅ 500 Broadcast</li>
              <li>✅ 50 Campaign</li>
              <li>✅ 500 Contact</li>
              <li>✅ 5 Device</li>
              <li>✅ Excel / CSV Contact Import</li>
              <li>✅ Google Contact Sync</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Premium</h3>
            <p className="text-gray-500 mb-4">
              Paket premium dengan fitur-fitur canggih untuk bisnis menengah
              hingga besar.
            </p>
            <p className="text-2xl font-bold mb-4">
              Rp. 76.000{" "}
              <span className="text-sm text-gray-500">
                /{isYearly ? "tahun" : "bulan"}
              </span>
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
              Get Started
            </button>
            <ul className="text-left space-y-2">
              <li>✅ 100 Auto reply</li>
              <li>✅ 500 Broadcast</li>
              <li>✅ 50 Campaign</li>
              <li>✅ 500 Contact</li>
              <li>✅ 5 Device</li>
              <li>✅ Excel / CSV Contact Import</li>
              <li>✅ Google Contact Sync</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Pro</h3>
            <p className="text-gray-500 mb-4">
              Paket terbaik Anda dengan fitur-fitur lengkap untuk mendukung
              bisnis besar.
            </p>
            <p className="text-2xl font-bold mb-4">
              Rp. 86.000{" "}
              <span className="text-sm text-gray-500">
                /{isYearly ? "tahun" : "bulan"}
              </span>
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-6">
              Get Started
            </button>
            <ul className="text-left space-y-2">
              <li>✅ 100 Auto reply</li>
              <li>✅ 500 Broadcast</li>
              <li>✅ 50 Campaign</li>
              <li>✅ 500 Contact</li>
              <li>✅ 5 Device</li>
              <li>✅ Excel / CSV Contact Import</li>
              <li>✅ Google Contact Sync</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
