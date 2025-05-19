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
import { Layout, Menu, ConfigProvider } from "antd";
import { useRouter, usePathname } from "next/navigation";

const { Header, Content, Sider } = Layout;

const genreItems = ["Action", "Romance", "Comedy"].map((name) => ({
  key: `/genre/${name.toLowerCase()}`,
  label: name,
}));
const watchlistItems = [
  {
    key: "/watchlist",
    label: "Watchlist",
  },
];
const populerItems = ["Trending"].map((name) => ({
  key: `/populer/${name.toLowerCase()}`,
  label: name,
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
    label: "Populer",
    children: populerItems,
  },
];

const items2: MenuProps["items"] = [];

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

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
      key: `/profile`,
      icon: <UserOutlined />,
      label: `Profile`,
    },
    {
      key: `/settings`,
      icon: <SettingOutlined />,
      label: `Settings`,
    },
  ];

  const selectedHeaderKeys = items1
    .flatMap((group) => (group.children ? group.children.map((i) => i.key) : []))
    .includes(pathname)
    ? [pathname]
    : [];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: darkMode ? "#374151" : "#6b7280", // Ganti warna utama
          colorBgContainer: darkMode ? "#ffffff" : "#ffffff", // Warna latar kontainer
          colorText: darkMode ? "#374151" : "#000000", // Warna teks default
        },
      }}
    >
      <Layout className="min-h-screen dark:bg-black dark:text-white border-none shadow-none">
        {/* Header */}
        <Header className="header flex items-center justify-between px-4 text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors">
          {/* Kiri: Logo + Menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold">StreamFlix</span>
            </div>

            <Menu
              theme={darkMode ? "dark" : "light"}
              mode="horizontal"
              items={items1}
              selectedKeys={selectedHeaderKeys}
              onClick={({ key }) => router.push(key)}
              className="flex items-center text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors"
            />
          </div>

          {/* Kanan: Tombol */}
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
            className="dark:bg-zinc-800 border-none shadow-none"
          >
            <Menu
              mode="inline"
              selectedKeys={[pathname]}
              onClick={({ key }) => router.push(key)}
              items={menu.concat(items2)}
              theme={darkMode ? "dark" : "light"}
              className="text-black dark:text-white dark:bg-zinc-800 border-none shadow-none"
            />
          </Sider>

          <Layout>
            <Content className="">{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AuthenticatedLayout;
