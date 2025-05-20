"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const planParam = searchParams.get("plan");

    if (amountParam) setAmount(amountParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProof(file);
    setError("");
  };

  const handleSend = () => {
    if (!proof) {
      setError("Mohon upload bukti pembayaran terlebih dahulu.");
      return;
    }

    const phone = "6285211419409"; 
    const message = `Halo Admin, saya sudah membayar paket ${plan} sebesar Rp ${amount}. Berikut bukti pembayaran saya.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0" />

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 text-white hover:text-gray-300 text-xl"
      >
        <FaArrowLeft />
      </Link>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl p-8 max-w-md w-full shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Pembayaran Paket {plan}
        </motion.h1>

        <p className="mb-2 text-center">Silakan scan QR atau bayar sebesar:</p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Rp {Number(amount).toLocaleString("id-ID")}
        </motion.p>

        <div className="flex justify-center mb-4">
          <Image
            src="/qr.jpg"
            alt="QR Code"
            width={200}
            height={200}
            className="rounded-lg border border-white/20"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Upload Bukti Pembayaran:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full bg-white/20 text-white p-2 rounded border border-white/30"
          />
        </div>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleSend}
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded mt-4"
        >
          <FaWhatsapp /> Kirim ke Admin
        </motion.button>
      </motion.div>
    </div>
  );
}
