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

const GENRE_ITEMS: MenuProps["items"] = [
  {
    key: "genre-group",
    label: "Genres",
    children: ["Action", "Romance", "Comedy"].map((name) => ({
      key: `/genre/${name.toLowerCase()}`,
      label: name,
    })),
  },
];

const WATCHLIST_ITEMS: MenuProps["items"] = [
  {
    key: "watchlist-group",
    label: "Watchlist",
    children: [
      {
        key: "/watchlist",
        label: "Watchlist",
      },
    ],
  },
];

const POPULER_ITEMS: MenuProps["items"] = [
  {
    key: "populer-group",
    label: "Populer",
    children: ["Trending"].map((name) => ({
      key: `/populer/${name.toLowerCase()}`,
      label: name,
    })),
  },
];

const SIDEBAR_MENU: MenuProps["items"] = [
  {
    key: "/home",
    icon: <HomeFilled />,
    label: "Home",
  },
  {
    key: "/about",
    icon: <InfoCircleFilled />,
    label: "About",
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

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setDarkMode(false);
  }, []);

  // Save theme and apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Hitung selected keys dari menu horizontal
  const selectedHeaderKeys = [...GENRE_ITEMS, ...WATCHLIST_ITEMS, ...POPULER_ITEMS]
    .flatMap((group) => (group.children ? group.children.map((i) => i.key) : []))
    .includes(pathname)
    ? [pathname]
    : [];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: darkMode ? "#374151" : "#6b7280",
          colorBgContainer: "#ffffff",
          colorText: darkMode ? "#374151" : "#000000",
        },
      }}
    >
      <Layout className="min-h-screen dark:bg-black dark:text-white border-none shadow-none">
        {/* Header */}
        <Header className="flex items-center justify-between px-4 text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold">StreamFlix</span>
            </div>

            {/* Menu Horizontal */}
            <Menu
              theme={darkMode ? "dark" : "light"}
              mode="horizontal"
              items={[...GENRE_ITEMS, ...WATCHLIST_ITEMS, ...POPULER_ITEMS]}
              selectedKeys={selectedHeaderKeys}
              onClick={({ key }) => router.push(key)}
              className="flex items-center text-black dark:text-white bg-white dark:bg-zinc-800 transition-colors"
            />
          </div>

          {/* Tombol Toggle Tema */}
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
              items={SIDEBAR_MENU}
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
