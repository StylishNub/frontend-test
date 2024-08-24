"use client";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ECF2FA;]">
      <div className="flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Section (Image & Text) */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 text-center md:text-left bg-[#F3F6FC]">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img
              src="/log.png"
              alt="Login"
              className="w-72 h-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h2>
          <p className="text-gray-600 mt-4">
            Selamat datang di Forwarder! Dashboard admin kami dirancang dengan
            fitur-fitur canggih yang mudah digunakan. Kelola pesan, kampanye,
            dan broadcast dengan mudah menggunakan berbagai integrasi seperti
            Google Contact. Dapatkan solusi praktis sesuai dengan kebutuhan
            bisnis Anda yang spesifik.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <h3 className="text-2xl font-semibold mb-4">Welcome Back</h3>
          <p className="text-gray-600 mb-8">We're excited to see you again!</p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username / Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Lupa Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Belum punya akun?{" "}
                <a
                  href="/login/register"
                  className="text-blue-500 hover:underline"
                >
                  Daftar di sini
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
