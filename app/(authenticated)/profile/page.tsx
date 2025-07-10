"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "../../lib/fetchUser";

export default function MovieProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser();
        setUser(data);
      } catch (err) {
        setError("Gagal memuat data pengguna.");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = (e.target as any).file as HTMLInputElement;
    if (!fileInput.files[0]) return;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const token = localStorage.getItem("token");
    if (!token) return alert("Kamu belum login.");

    try {
      setUploading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) throw new Error("Upload gagal");

      const updated = await fetchUser();
      setUser(updated);
    } catch (err) {
      alert("Gagal upload foto profil.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 bg-gray-100 dark:bg-zinc-800 p-6 rounded-2xl shadow-md text-center">
          <img
            src={
              user?.profilePicture
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/profile/${user.profilePicture}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-white"
          />
          <h2 className="text-2xl font-bold">
            {loading ? "Loading..." : user?.username || "Tidak diketahui"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{user?.email || "-"}</p>
          <p className="text-sm text-red-500 font-semibold mt-1">Premium</p>

          {/* Upload Profile Picture */}
          <form onSubmit={handleUpload} className="mt-6 space-y-3">
            <input
              type="file"
              name="file"
              accept="image/*"
              className="text-sm file:mr-3 file:px-3 file:py-1 file:rounded-md file:border-0 file:bg-red-500 file:text-white hover:file:bg-red-600"
            />
            <button
              type="submit"
              disabled={uploading}
              className="w-full px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition"
            >
              {uploading ? "Mengupload..." : "Upload Foto"}
            </button>
          </form>

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            Hello, {loading ? "..." : user?.username || "User"} 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Selamat datang di halaman profil kamu.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <StatBox label="Movies Watched" value="12" />
            <StatBox label="Watchlist" value="36" />
            <StatBox label="Favorite Genres" value="Action, Drama" />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-xl text-center shadow-md transition-colors duration-300">
      <p className="text-red-500 text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}
