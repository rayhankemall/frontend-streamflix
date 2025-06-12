"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { io } from "socket.io-client"; 
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const planParam = searchParams.get("plan");

    if (amountParam) setAmount(amountParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

 const socket = io('https://844d-2a09-bac1-34a0-30-00-3c1-11.ngrok-free.app');
const [socketId, setSocketId] = useState('');

useEffect(() => {
  const socketInstance = io('https://844d-2a09-bac1-34a0-30-00-3c1-11.ngrok-free.app', { transports: ['websocket'] });

  socketInstance.on('connect', () => {
    console.log('✅ Connected to WebSocket:', socketInstance.id);
    setSocketId(socketInstance.id); // save it
  });

  socketInstance.on(`payment-completed:${socketInstance.id}`, (payload) => {
    console.log(`📡 Received event 'payment-completed:${socketInstance.id}'`, payload);
    setIsVerified(true);
  });

  return () => {
    socketInstance.disconnect();
  };
}, []);



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSendToTelegram = async () => {
    if (!selectedFile) {
      alert("Silakan upload bukti pembayaran terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    const fileName = `bukti__${plan}__${amount}.jpg`;
    formData.append("file", selectedFile, fileName);

    try {
      const response = await fetch("https://844d-2a09-bac1-34a0-30-00-3c1-11.ngrok-free.app/payment/upload-proof", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Bukti pembayaran berhasil dikirim ke admin di Telegram! ✅");
      } else {
        alert("Gagal mengirim bukti ke Telegram. ❌");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Terjadi kesalahan saat mengirim bukti.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0" />

      <Link href="/" className="absolute top-4 left-4 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
        <FaArrowLeft className="text-white" />
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl p-8 max-w-md w-full shadow-lg">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6 text-center">
          Pembayaran Paket {plan}
        </motion.h1>

        <motion.p className="mb-4 text-center">Silakan scan QR atau bayar sebesar:</motion.p>
        <motion.p className="text-3xl font-bold text-center mb-6">Rp {Number(amount).toLocaleString("id-ID")}</motion.p>

        <motion.div className="flex justify-center mb-4">
          <Image src="/qr.jpg" alt="QR Code" width={200} height={200} className="rounded-lg border border-white/20" />
        </motion.div>

        <motion.div className="mt-6">
          <label className="block mb-2 font-semibold text-sm">Upload Bukti Pembayaran</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-white bg-white/20 rounded-md p-2" />
          {previewURL && (
            <Image src={previewURL} alt="Preview" width={300} height={300} className="rounded-md mt-4 mx-auto border border-white/20" />
          )}
        </motion.div>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSendToTelegram} className="flex items-center gap-2 justify-center mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold transition w-full">
          📤 Kirim ke Admin via Telegram
        </motion.button>

        <motion.p className="mt-3 text-xs text-center text-white/80">Admin akan segera memverifikasi bukti pembayaran kamu 💌</motion.p>

        {isVerified && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-green-500 text-white text-center py-3 px-4 rounded-md">
            ✅ Pembayaran kamu sudah diverifikasi oleh admin!
            <Link href="/" className="block mt-3 underline text-sm hover:text-white">
              ➡️ Kembali ke beranda
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
