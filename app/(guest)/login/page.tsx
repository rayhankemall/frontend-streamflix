"use client";
import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-sm w-full text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">LOGIN</h2>

        <form className="space-y-4">
          <div className="text-left">
            <label className="block mb-1 font-light text-sm">NICK NAME/GMAIL</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              placeholder="Masukkan nickname atau Gmail"
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 font-light text-sm">PASSWORD</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              placeholder="Masukkan password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-sm mt-6 font-light">
          Jika belum memiliki akun, silakan{" "}
          <Link href="/signup" className="text-red-500 font-medium hover:underline">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
