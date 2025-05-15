/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import {
  HomeFilled,
  InfoCircleFilled,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;

const genreItems = ["Action", "Romance", "Comedy"].map((name, index) => ({
  key: `genre-${index}`,
  label: `${name}`,
}));

const watchlistItems = [""].map((name, index) => ({
  key: `watchlist-${index}`,
  label: `Watchlist ${name}`,
}));

const populerItems = ["Trending", "Top Rated"].map((name, index) => ({
  key: `populer-${index}`,
  label: `${name}`,
}));

const rekomendasiItems = ["Anime", "Live Action"].map((name, index) => ({
  key: `rekomendasi-${index}`,
  label: `${name}`,
}));

const items1: MenuProps["items"] = [
  {
    key: "genre-group",
    label: "Genres",
    children: genreItems,
  },
  {
    key: "watchlist-group",
    label: "Watchlist",
    children: watchlistItems,
  },
  {
    key: "populer-group",
    label: "Popular",
    children: populerItems,
  },
  {
    key: "rekomendasi-group",
    label: "Recommended",
    children: rekomendasiItems,
  },
];

const items2: MenuProps["items"] = [];

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const menu: MenuProps["items"] = [
    {
      key: `/home`,
      icon: <HomeFilled />,
      label: `Home`,
    },
    {
      key: `/about`,
      icon: <InfoCircleFilled />,
      label: `About`,
    },
    {
      key: "/profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

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
    <Layout className="min-h-screen dark:bg-black dark:text-white">
      {/* Header */}
      <Header className="header flex items-center justify-between px-4 text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold">StreamFlix</span>
        </div>

        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="horizontal"
          items={items1}
          className="flex items-center justify-start px-4 text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors"
        />

        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded border dark:bg-zinc-800 border-none shadow-none"
        >
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </Header>

      {/* Sidebar dan Konten */}
      <Layout>
        <Sider
          width={200}
          theme={darkMode ? "dark" : "light"}
          className=" dark:bg-zinc-800 border-none shadow-none"
        >
          <Menu
            mode="inline"
            selectedKeys={["/settings"]}
            items={menu.concat(items2)}
            onClick={({ key }) => router.push(key)}
            theme={darkMode ? "dark" : "light"}
            className="text-black dark:text-white dark:bg-zinc-800 border-none shadow-none"
          />
        </Sider>

        <Layout>
          {/* Content */}
          <Content className="p-9 bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Settings</h1>

              {/* Account Info Section */}
              <section className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl mb-6 shadow transition-colors duration-300">
                <h2 className="text-xl font-semibold mb-4">
                  Account Information
                </h2>

                {/* FOTO PROFIL */}
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

                {/* FORM */}
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

              {/* Save Button */}
              <div className="text-right">
                <button className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-6 py-2 rounded-lg transition">
                  Save Changes
                </button>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
