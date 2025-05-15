"use client";

import { motion } from "framer-motion";
import { FaStar, FaCrown, FaGem } from "react-icons/fa";
import { useRouter } from "next/navigation";

const plans = [
  {
    icon: <FaStar className="text-yellow-400 text-3xl mb-2 mx-auto" />,
    title: "REGULAR",
    price: "Rp 40.000/Bln",
    resolution: "480P",
    quality: "Lumayan",
    devices: "Ponsel",
    button: "Rp.40.000/1bln",
  },
  {
    icon: <FaCrown className="text-purple-500 text-3xl mb-2 mx-auto" />,
    title: "HD",
    price: "Rp 65.000/Bln",
    resolution: "720P (HD)",
    quality: "Bagus",
    devices: "Ponsel, PC",
    button: "Rp.65.000/1bln",
  },
  {
    icon: <FaGem className="text-red-400 text-3xl mb-2 mx-auto" />,
    title: "Ultra HD",
    price: "Rp 125.000/Bln",
    resolution: "1080 (Full HD)",
    quality: "Sangat Bagus",
    devices: "Semua",
    button: "Rp.125.000/1bln",
  },
];

export default function SubscriptionPlan() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 text-white py-12 px-4 md:px-8 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Pilih Paket Berlangganan yang Tepat untuk Anda
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-white/20"
            >
              <div>
                {plan.icon}
                <h3 className="text-2xl font-bold mb-4 text-center">{plan.title}</h3>
                <p className="mb-2 font-semibold">Harga Bulanan</p>
                <p className="mb-4">{plan.price}</p>
                <p className="mb-2 font-semibold">Resolusi</p>
                <p className="mb-4">{plan.resolution}</p>
                <p className="mb-2 font-semibold">Kualitas Video dan Audio</p>
                <p className="mb-4">{plan.quality}</p>
                <p className="mb-2 font-semibold">Perangkat yang Didukung</p>
                <p className="mb-4">{plan.devices}</p>
              </div>
              <button
                onClick={() =>
                  router.push(
                    `/payment?amount=${plan.price.replace(/[^\d]/g, "")}&plan=${encodeURIComponent(
                      plan.title
                    )}`
                  )
                }
                className="mt-6 bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
