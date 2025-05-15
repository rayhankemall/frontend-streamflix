"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");

  const waAdmin = "6281234567890"; // Ganti dengan nomor admin kamu
  const whatsappLink = `https://wa.me/${waAdmin}?text=Halo%20Admin,%20saya%20sudah%20melakukan%20pembayaran%20untuk%20paket%20${plan}%20senilai%20Rp%20${amount}.%20Berikut%20bukti%20pembayarannya%3A`;

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const planParam = searchParams.get("plan");

    if (amountParam) setAmount(amountParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0"
      />

      {/* Tombol Back */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full shadow-md"
      >
        <FaArrowLeft />
      </motion.button>

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl p-8 max-w-md w-full shadow-xl flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Pembayaran Paket {plan}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 text-center"
        >
          Silakan scan QR atau bayar sebesar:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Rp {Number(amount).toLocaleString("id-ID")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/qr.jpg"
            alt="QR Code"
            width={200}
            height={200}
            className="rounded-lg border border-white/20"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center text-sm mb-6"
        >
          Setelah melakukan pembayaran, harap konfirmasi melalui admin.
        </motion.p>

        {/* Tombol WhatsApp */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition shadow-md"
        >
          <FaWhatsapp /> Kirim ke Admin
        </motion.a>
      </motion.div>
    </div>
  );
}
