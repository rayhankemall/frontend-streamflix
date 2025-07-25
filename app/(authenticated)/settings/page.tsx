"use client";

import React, { useState, useEffect } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen dark:bg-black dark:text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <section className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl mb-6 shadow transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>

          <div className="flex items-center gap-4 mb-6">
            <div>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-zinc-700 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">
                Change Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="text-xs"
              />
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="@yourusername"
              />
            </div>
          </form>
        </section>

        <div className="text-right">
          <button className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-6 py-2 rounded-lg transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
