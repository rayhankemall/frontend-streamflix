"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold text-red-500">FLIX</h1>
            <span className="text-xs text-white">FlixTech Movie Corporation</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-black bg-opacity-60 p-6 rounded-lg"
        >
          <h2 className="text-5xl font-bold text-white mb-2">
            STREAM <span className="text-red-500">FLIX</span>
          </h2>
          <p className="text-white text-sm mb-6">FLIXTECH MOVIE CORPORATION</p>
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              MULAI SEKARANG
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Trending Movies */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-white mb-8"
          >
            Sedang Tren Sekarang
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Contoh Poster */}
            {["avatar.jpg", "pacificrim.jpg", "kiminonawa.jpg", "dilan.jpg", "sonic.jpg"].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={`/movie/${img}`}
                  alt="Movie Poster"
                  width={200}
                  height={300}
                  className="rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f1f1f] text-white py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">About</h3>
            <p className="text-sm mb-4">
              STREAMFLIX adalah platform streaming film dan serial TV terbaik yang menyediakan berbagai konten berkualitas...
            </p>
            <div className="flex space-x-4">
              {/* Payment method images */}
              <Image src="/payments/gopay.png" width={50} height={30} alt="Gopay" />
              <Image src="/payments/ovo.png" width={50} height={30} alt="OVO" />
              <Image src="/payments/ipay.png" width={50} height={30} alt="IPay" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Kota Bekasi, Bantargebang, Jawa Barat</p>
            <p className="text-sm">StreamFlix@gmail.com</p>
            <p className="text-sm">+62 822-2222-2222</p>
            <div className="flex space-x-4 mt-4">
              {/* Sosial Media */}
              <Link href="#"><Image src="/social/twitter.png" width={30} height={30} alt="Twitter" /></Link>
              <Link href="#"><Image src="/social/instagram.png" width={30} height={30} alt="Instagram" /></Link>
              <Link href="#"><Image src="/social/whatsapp.png" width={30} height={30} alt="Whatsapp" /></Link>
              <Link href="#"><Image src="/social/tiktok.png" width={30} height={30} alt="Tiktok" /></Link>
            </div>
          </div>
        </div>
        <p className="text-center text-xs mt-8">&copy; 2025 StreamFlix. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
