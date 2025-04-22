"use client";

import React from 'react';
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

// ====== ✅ Grup menu atas (Header) ======
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

// ====== ✅ Menu samping (Sidebar) ======
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
    icon: <	ShoppingCartOutlined />, 
    label: 'Subscriptions',   
    children: [
      { key: '/subscriptions/all', label: 'All Subscriptions' },
    ],
  },
  {
    key: 'history',
    icon: <	UnorderedListOutlined />, 
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
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    <Layout>
      <Header className="header flex">
        <div className="flex items-center pr-4 text-white gap-2">
          <img src="/logo.png" alt="" className="h-8 w-auto" />
          <span>StreamFlix</span>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          items={items1}
          className="flex-1"
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menu.concat(items2)}
            onClick={({ key }) => {
              router.push(key);
            }}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', height: 'calc(100vh - 64px)' }}>
          <Content
            style={{
              padding: 24,
              margin: '16px 0 0 0',
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
