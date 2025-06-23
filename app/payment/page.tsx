"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { io, Socket } from "socket.io-client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [socketId, setSocketId] = useState("");
  const [socketUrl, setSocketUrl] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const router = useRouter();

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    const planParam = searchParams.get("plan");
    if (amountParam) setAmount(amountParam);
    if (planParam) setPlan(planParam);
  }, [searchParams]);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SOCKET_URL || "";
    setSocketUrl(url);
    if (!url) return;

    const newSocket = io(url, {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      setSocketId(newSocket.id);
      newSocket.on(`payment-completed:${newSocket.id}`, () => {
        setIsVerified(true);
        setShowNotification(true);

        // 🎉 Confetti burst
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.2 },
        });

        // 🔊 Play sound
        const audio = new Audio("/success.mp3");
        audio.play();

        // 📱 Vibrate phone
        if (typeof window !== "undefined" && navigator.vibrate) {
          navigator.vibrate([100, 50, 100]);
        }
      });
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
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
    if (!selectedFile || !socketId) {
      alert("❗ Silakan upload bukti dan tunggu socket siap.");
      return;
    }

    const renamedFile = new File([
      selectedFile,
    ], `bukti__${plan}__${amount}.jpg`, { type: selectedFile.type });

    const formData = new FormData();
    formData.append("file", renamedFile);
    formData.append("socketId", socketId);

    setIsUploading(true);
    try {
      const response = await fetch(`${socketUrl}/payment/upload-proof`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Bukti pembayaran berhasil dikirim ke admin Telegram!");
      } else {
        alert("❌ Gagal mengirim bukti ke Telegram.");
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("Terjadi kesalahan saat mengirim bukti.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0 transition-opacity duration-700" />

      <AnimatePresence>
        {isVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-green-500 text-white px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-green-600 p-8 rounded-2xl shadow-xl text-center w-full max-w-sm animate-fade-in"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-4 shadow-md animate-bounce">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-1">Pembayaran berhasil</h2>
              <p className="text-white/90 text-sm">Hore! Pembayaranmu sudah selesai.</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/home")}
                className="mt-6 bg-white text-green-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                ➡️ Next
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/"
        className="absolute top-4 left-4 z-20 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
      >
        <FaArrowLeft className="text-white" />
      </Link>

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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSendToTelegram}
          disabled={isUploading}
          className={`flex items-center gap-2 justify-center mt-6 ${
            isUploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white py-2 px-4 rounded-md text-sm font-semibold transition w-full`}
        >
          {isUploading ? "⏳ Mengirim..." : "📤 Kirim ke Admin via Telegram"}
        </motion.button>

        <p className="mt-3 text-xs text-center text-white/80">
          Admin akan segera memverifikasi bukti pembayaran kamu 💌
        </p>
      </motion.div>
    </div>
  );
}
