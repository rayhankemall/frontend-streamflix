"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUp() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* form container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-black bg-opacity-75 p-10 rounded-2xl max-w-md w-full text-white backdrop-blur-md shadow-2xl"
      >
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-3xl font-serif mb-8"
        >
          SIGN UP
        </motion.h2>

        <form className="space-y-6">
          {/* Nickname */}
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
            />
          </motion.div>

          {/* Password */}
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
            />
          </motion.div>

          {/* Gmail */}
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
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-6 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            SIGN UP
          </motion.button>
        </form>

        {/* footer link */}
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
