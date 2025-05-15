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
        style={{ backgroundImage: "url('/bg.jpg')" }}
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
            {[
              "avatar.jpg",
              "kimi_no_nawa.jpg",
              "silent_voice.jpg",
              "how_to_train_your_dragon.jpg",
              "the_greatest_hits.jpg",
            ].map((img, index) => (
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
      <footer className="bg-[#530F0C] text-[#F1EDEB] py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About</h3>
            <p className="text-sm leading-relaxed">
              STREAMFLIX adalah platform streaming film dan serial TV terbaik
              yang menyediakan konten berkualitas dengan subtitle Indonesia.
              Kami hadir untuk memberikan pengalaman menonton yang lebih baik,
              nyaman, dan tanpa gangguan iklan.
            </p>
            <p className="uppercase text-xs font-medium tracking-wider mb-2">
              Payment Methods
            </p>

            
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-4 gap-4"
>
  {["gopay.png", "ovo.png", "sh.png", "dana.png"].map((file, i) => (
    <motion.div
      key={file}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2, duration: 0.5 }}
    >
      <Image
        src={`/payments/${file}`}
        alt={file.replace(".png", "")}
        width={40}
        height={24}
        className="object-contain shadow-md rounded-md transition duration-300 hover:scale-105 hover:shadow-xl"
      />
    </motion.div>
  ))}
</motion.div>

          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                Kota Bekasi, Bantargebang, Jawa Barat
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:StreamFlix@gmail.com"
                  className="hover:text-white transition"
                >
                  StreamFlix@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.85 21 3 14.15 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.05l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+628222222222"
                  className="hover:text-white transition"
                >
                  +62 822-2222-2222
                </a>
              </li>
            </ul>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex items-center space-x-4 mt-4"
>
  {["x.png", "ig.png", "wa.png", "tt.png"].map((icon, i) => (
    <motion.div
      key={icon}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2, duration: 0.5 }}
    >
      <Link href="#">
        <Image
          src={`/sosial/${icon}`}
          width={24}
          height={24}
          alt={icon.replace(".png", "")}
          className="object-contain shadow-md rounded-full transition duration-300 hover:scale-110 hover:shadow-xl"
        />
      </Link>
    </motion.div>
  ))}
</motion.div>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[#43100D] pt-6">
          <p className="text-center text-xs text-[#D8CFC7]">
            &copy; 2025 Stream
            <strong className="text-red-500">FLIX</strong>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
