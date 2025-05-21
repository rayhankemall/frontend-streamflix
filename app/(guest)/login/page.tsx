"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      // Simpan token di localStorage
      localStorage.setItem("token", data.access_token);

      // Redirect ke halaman utama (ubah sesuai rute kamu)
      router.push("/home");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Layer hitam transparan */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-75 p-10 rounded-2xl max-w-sm w-full text-white text-center backdrop-blur-md shadow-2xl"
      >
        <h2 className="text-3xl font-semibold mb-6">LOGIN</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left"
          >
            <label className="block mb-1 font-light text-sm">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Masukkan email"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-left"
          >
            <label className="block mb-1 font-light text-sm">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Masukkan password"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 mt-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            LOGIN
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm mt-6 font-light"
        >
          Jika belum memiliki akun, silakan{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="inline-block">
            <Link
              href="/signup"
              className="text-red-500 font-medium hover:underline"
            >
              sign up
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
}
