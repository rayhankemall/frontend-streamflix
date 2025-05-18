"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });

      if (res.ok) {
        alert("Sign up berhasil!");
        router.push("/login"); // Redirect ke halaman login setelah berhasil
      } else {
        const data = await res.json();
        alert("Sign up gagal: " + (data.message || "Unknown error"));
      }
    } catch (error: any) {
      console.error("Error saat sign up:", error);
      alert("Terjadi error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-75 p-10 rounded-2xl max-w-md w-full text-white backdrop-blur-md shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-3xl font-serif mb-8"
        >
          SIGN UP
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.label
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="block text-sm mb-2"
            >
              NICK NAME
            </motion.label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your nickname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.label
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="block text-sm mb-2"
            >
              PASSWORD
            </motion.label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.label
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="block text-sm mb-2"
            >
              GMAIL
            </motion.label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-6 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "SIGN UP"}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-sm mt-6 font-light"
        >
          Sudah punya akun?{" "}
          <motion.span whileHover={{ scale: 1.1 }} className="inline-block">
            <Link href="/login" className="text-red-500 font-medium hover:underline">
              login
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
}
