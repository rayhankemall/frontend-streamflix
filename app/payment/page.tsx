"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const planParam = searchParams.get("plan");

    if (amountParam) setAmount(amountParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSendToWhatsApp = () => {
    if (!selectedFile) {
      alert("Silakan upload bukti pembayaran terlebih dahulu.");
      return;
    }

    const message = `Halo Admin, saya ingin konfirmasi pembayaran:\n\n📦 Paket: ${plan}\n💵 Jumlah: Rp ${Number(amount).toLocaleString(
      "id-ID"
    )}\n🧾 Bukti pembayaran sudah saya upload. Silakan cek.`;

    const whatsappNumber = "62085211419409"; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0" />

      {/* Tombol Back */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
      >
        <FaArrowLeft className="text-white" />
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
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Pembayaran Paket {plan}
        </motion.h1>

        <p className="mb-4 text-center">Silakan scan QR atau bayar sebesar:</p>
        <p className="text-3xl font-bold text-center mb-6">
          Rp {Number(amount).toLocaleString("id-ID")}
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/qr.jpg"
            alt="QR Code"
            width={200}
            height={200}
            className="rounded-lg border border-white/20"
          />
        </div>

        {/* Upload bukti */}
        <div className="mt-6">
          <label className="block mb-2 font-semibold text-sm">
            Upload Bukti Pembayaran
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-white bg-white/20 rounded-md p-2"
          />
          {previewURL && (
            <Image
              src={previewURL}
              alt="Preview"
              width={300}
              height={300}
              className="rounded-md mt-4 mx-auto border border-white/20"
            />
          )}
        </div>

        {/* Tombol WhatsApp */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSendToWhatsApp}
          className="flex items-center gap-2 justify-center mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-semibold transition w-full"
        >
          <FaWhatsapp />
          Kirim ke Admin
        </motion.button>
      </motion.div>
    </div>
  );
}
