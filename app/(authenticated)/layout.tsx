/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
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
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
];

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const selectedHeaderKeys = [...GENRE_ITEMS, ...WATCHLIST_ITEMS, ...POPULER_ITEMS]
    .flatMap((group) => (group.children ? group.children.map((i) => i.key) : []))
    .includes(pathname)
    ? [pathname]
    : [];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#374151", // abu gelap
          colorBgContainer: "#f5f5f5", // putih keabu-abuan
          colorText: "#111827", // teks gelap
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        {/* Header */}
        <Header
          style={{
            backgroundColor: "#f5f5f5",
            color: "#111827",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: 16,
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-[#111827]">StreamFlix</span>
            </div>

            <Menu
              theme="light"
              mode="horizontal"
              items={[...GENRE_ITEMS, ...WATCHLIST_ITEMS, ...POPULER_ITEMS]}
              selectedKeys={selectedHeaderKeys}
              onClick={({ key }) => router.push(key)}
              style={{
                backgroundColor: "#f5f5f5",
                color: "#111827",
              }}
            />
          </div>
        </Header>

        {/* Sidebar dan Konten */}
        <Layout>
          <Sider
            width={200}
            theme="light"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <Menu
              mode="inline"
              selectedKeys={[pathname]}
              onClick={({ key }) => router.push(key)}
              items={SIDEBAR_MENU}
              theme="light"
              style={{
                backgroundColor: "#f0f0f0",
                color: "#111827",
              }}
            />
          </Sider>

          <Layout style={{ backgroundColor: "#ffffff" }}>
            <Content style={{ padding: 24 }}>
              <div className="min-h-screen bg-white text-black">
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AuthenticatedLayout;
