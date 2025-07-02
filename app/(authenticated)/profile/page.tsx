"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "../../lib/fetchUser";


export default function MovieProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser();
      setUser(data);
    };
    getUser();
  }, []);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = (e.target as any).file as HTMLInputElement;
    if (!fileInput.files[0]) return;

    formData.append("file", fileInput.files[0]);

    const token = localStorage.getItem("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      const updated = await fetchUser();
      setUser(updated);
    }
  };

  return (
    <main className="min-h-screen p-10 bg-white dark:bg-black dark:text-white">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <aside className="w-72 bg-gray-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md md:mr-10 mb-6 md:mb-0">
          <div className="text-center">
            <img
              src={
                user?.profilePicture
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/profile/${user.profilePicture}`
                  : "/default-avatar.png"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-bold">{user?.username || "Loading..."}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Premium</p>

            <form onSubmit={handleUpload} className="mt-4 space-y-2">
              <input type="file" name="file" accept="image/*" className="text-sm" />
              <button
                type="submit"
                className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600"
              >
                Upload Foto
              </button>
            </form>
          </div>
        </aside>

        <section className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            Hello, {user?.username || "..."}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Welcome to your profile
          </p>
        </section>
      </div>
    </main>
  );
}
