/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import {
  HomeFilled,
  InfoCircleFilled,
  UserOutlined,
  BellFilled,
  HistoryOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;

// Header menu items
const genreItems = ["Action", "Romance", "Comedy"].map((name, index) => ({
  key: `genre-${index}`,
  label: `Genre : ${name}`,
}));

const watchlistItems = [""].map((name, index) => ({
  key: `watchlist-${index}`,
  label: `Watchlist ${name}`,
}));

const populerItems = ["Trending", "Top Rated"].map((name, index) => ({
  key: `populer-${index}`,
  label: `Populer : ${name}`,
}));

const rekomendasiItems = ["Anime", "Live Action"].map((name, index) => ({
  key: `rekomendasi-${index}`,
  label: `Rekomendasi : ${name}`,
}));

const items1: MenuProps["items"] = [
  {
    key: "genre-group",
    label: "Genre",
    children: genreItems,
  },
  {
    key: "watchlist-group",
    label: "Watchlist",
    children: watchlistItems,
  },
  {
    key: "populer-group",
    label: "Populer",
    children: populerItems,
  },
  {
    key: "rekomendasi-group",
    label: "Rekomendasi",
    children: rekomendasiItems,
  },
];

// Sidebar menu items
const items2: MenuProps["items"] = [
];

// Main page component
export default function MovieProfilePage() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

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
      key: "/notifications",
      icon: <BellFilled />,
      label: "Notifications",
    },
    {
      key: "/history",
      icon: <HistoryOutlined />,
      label: "History",
    },
    {
      key: '/profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Layout className="min-h-screen dark:bg-black dark:text-white">
      {/* Header */}
      <Header className="header flex items-center justify-between px-4 text-black dark:text-white dark:bg-neutral-900 bg-white transition-colors">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold">StreamFlix</span>
        </div>

        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="horizontal"
          items={items1}
          className="header flex items-center justify-start px-4 text-black dark:text-white dark:bg-neutral-900 bg-white transition-colors"
        />

        <button
          onClick={toggleTheme}
          className="border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition border-none shadow-none"
        >
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </Header>

      {/* Sidebar and Main Content */}
      <Layout>
        <Sider
          width={200}
          theme={darkMode ? "dark" : "light"}
          className="dark:bg-neutral-900 bg-white border-none shadow-none"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["/profile"]}
            items={menu.concat(items2)}
            onClick={({ key }) => router.push(key)}
            theme={darkMode ? "dark" : "light"}
            className="dark:text-white dark:bg-neutral-900 text-black bg-white border-none shadow-none"
          />
        </Sider>

        <Layout>
          {/* Content */}
          <Content className="flex-1 p-10 bg-white dark:bg-black transition-colors duration-300">
            <div className="min-h-screen flex flex-col md:flex-row">
              {/* Sidebar profile info inside content */}
              <aside className="w-72 bg-gray-100 dark:bg-zinc-800 p-6 flex flex-col justify-between transition-colors duration-300 rounded-lg shadow-md md:mr-10 mb-6 md:mb-0">
                <div>
                  <img
                    src="logo.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-xl font-bold text-center">Rayhan Kemal</h2>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Premium
                  </p>

                  <div className="mt-6 space-y-1 text-sm">
                    <p>
                      <strong>Location:</strong> Jakarta, Indonesia
                    </p>
                    <p>
                      <strong>Movies Watched:</strong> 120
                    </p>
                    <p>
                      <strong>Favorite Genres:</strong> Sci-Fi, Action
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1">75% of your watchlist completed</p>
                  </div>
                </div>
              </aside>

              {/* Main Profile Content */}
              <main className="flex-1">
                <h1 className="text-3xl font-bold mb-2">Hello, Kemal!!</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Welcome to your profile
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  <StatBox label="Movies Watched" value="120+" />
                  <StatBox label="Wishlist" value="30+" />
                  <StatBox label="Reviews Written" value="25+" />
                  <StatBox label="Favorite Actors" value="10+" />
                </div>

                <h2 className="text-2xl font-semibold mb-4">Recently Watched</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-stretch">
                  <MovieCard
                    title="Kimi No Nawa"
                    rating="⭐ 4.5"
                    image="/movie/kimi_no_nawa.jpg"
                  />
                  <MovieCard
                    title="Hello World"
                    rating="⭐ 5.0"
                    image="/movie/hello_world.jpg"
                  />
                  <MovieCard
                    title="Avatar The Way Of Water"
                    rating="⭐ 5.0"
                    image="/movie/avatar.jpg"
                  />
                  <MovieCard
                    title="Spiderman No Way Home"
                    rating="⭐ 4.8"
                    image="/movie/spiderman.jpg"
                  />
                  <MovieCard
                    title="Silent Zone"
                    rating="⭐ 4.7"
                    image="/movie/silent_zone.jpg"
                  />
                </div>
              </main>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 p-4 rounded-xl text-center shadow-md transition-colors duration-300">
      <p className="text-green-500 text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}

function MovieCard({
  title,
  rating,
  image,
}: {
  title: string;
  rating: string;
  image: string;
}) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer group flex-col h-full">
      <div className="relative w-full aspect-[2/3]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow justify-between">
        <h3 className="text-sm font-semibold truncate" title={title}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{rating}</p>
      </div>
    </div>
  );
}
