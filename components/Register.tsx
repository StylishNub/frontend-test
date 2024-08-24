"use client";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneCode, setPhoneCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, username, phoneCode, phoneNumber, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#ECF2FA;]"
    >
      <div className="flex flex-col md:flex-row max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 text-center md:text-left bg-[#F3F6FC]">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img
              src="/log.png"
              alt="Admin Tools"
              className="w-72 h-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">
            Join Us and Manage Your Messaging Efficiently
          </h2>
          <p className="text-gray-600 mt-4">
            Daftar di Forwarder untuk mendapatkan akses ke fitur canggih dan
            mudah digunakan. Kelola pesan, kampanye, dan broadcast dengan
            integrasi yang efisien. Bergabunglah dengan kami untuk solusi yang
            sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden p-8">
          <h3 className="text-2xl font-semibold mb-4">Create an Account</h3>
          <p className="text-gray-600 mb-8">
            Fill in the details below to register.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            {/* Adjust spacing between form elements */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Choose a username"
                required
              />
            </div>
            <div className="flex space-x-4">
              {" "}
              {/* Adjust spacing between country code and phone number */}
              <div className="flex-shrink-0 w-1/3">
                <label
                  htmlFor="phone_code"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Country Code
                </label>
                <select
                  id="phone_code"
                  value={phoneCode}
                  onChange={(e) => setPhoneCode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  {/* Add more country codes as needed */}
                </select>
              </div>
              <div className="flex-grow">
                <label
                  htmlFor="phone_number"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Choose a password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Log in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
