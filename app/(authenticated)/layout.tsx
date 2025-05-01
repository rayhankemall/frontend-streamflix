/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import {
  HomeFilled,
  InfoCircleFilled,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;

// ====== Grup menu atas (Header) ======
const genreItems = ['Action', 'Romance', 'Comedy'].map((name, index) => ({
  key: `genre-${index}`,
  label: `Genre: ${name}`,
}));

const watchlistItems = ['My List', 'Watch Later', 'Favorites'].map((name, index) => ({
  key: `watchlist-${index}`,
  label: `Watchlist: ${name}`,
}));

const populerItems = ['Trending', 'Top Rated', 'New Releases'].map((name, index) => ({
  key: `populer-${index}`,
  label: `Populer: ${name}`,
}));

const rekomendasiItems = ['Anime', 'Live Action'].map((name, index) => ({
  key: `rekomendasi-${index}`,
  label: `Rekomendasi: ${name}`,
}));

const items1: MenuProps['items'] = [
  {
    key: 'genre-group',
    label: 'Genre',
    children: genreItems,
  },
  {
    key: 'watchlist-group',
    label: 'Watchlist',
    children: watchlistItems,
  },
  {
    key: 'populer-group',
    label: 'Populer',
    children: populerItems,
  },
  {
    key: 'rekomendasi-group',
    label: 'Rekomendasi',
    children: rekomendasiItems,
  },
];

// ====== Menu samping (Sidebar) ======
const items2: MenuProps['items'] = [
  {
    key: 'user',
    icon: <UserOutlined />,
    label: 'Profil',
    children: [
      { key: '/profile', label: 'Profile' },
      { key: '/settings', label: 'Settings' },
    ],
  },
  {
    key: 'device',
    icon: <LaptopOutlined />,
    label: 'Device Menu',
    children: [
      { key: '/laptop', label: 'My Laptop' },
      { key: '/mobile', label: 'My Mobile' },
    ],
  },
  {
    key: 'notifications',
    icon: <NotificationOutlined />,
    label: 'Notifications',
    children: [
      { key: '/notifications/all', label: 'All Notifications' },
      { key: '/notifications/mentions', label: 'Mentions' },
    ],
  },
  {
    key: 'subscriptions',
    icon: <ShoppingCartOutlined />,
    label: 'Subscriptions',
    children: [
      { key: '/subscriptions/all', label: 'All Subscriptions' },
    ],
  },
  {
    key: 'history',
    icon: <UnorderedListOutlined />,
    label: 'History',
    children: [
      { key: '/history/all', label: 'All History' },
    ],
  },
];

interface AuthenticatedLayoutProps {
  children: React.ReactNode
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
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

  const menu: MenuProps['items'] = [
    {
      key: `/home`,
      icon: <HomeFilled />,
      label: `Home`,
    },
    {
      key: `/about`,
      icon: <InfoCircleFilled />,
      label: `About`,
    }
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
          theme={darkMode ? 'dark' : 'light'}
          mode="horizontal"
          items={items1}
          className="header flex items-center justify-start px-4 text-black dark:text-white dark:bg-neutral-900 bg-white transition-colors"/>
        
        <button
          onClick={toggleTheme}        >
          {darkMode ? "Dark" : "Light"} Mode
        </button>
      </Header>

      {/* Sidebar dan Konten */}
      <Layout>
        <Sider width={200} theme={darkMode ? 'dark' : 'light'} className="dark:bg-neutral-900 bg-white">
          <Menu
            mode="inline"
            defaultSelectedKeys={['/home']}
            items={menu.concat(items2)}
            onClick={({ key }) => router.push(key)}
            theme={darkMode ? 'dark' : 'light'}
            className="dark:text-white dark:bg-neutral-900 text-black bg-white"
          />
        </Sider>
        <Layout>
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
