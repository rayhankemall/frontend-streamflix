"use client";

import React from 'react';
import {
  HomeFilled,
  InfoCircleFilled,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {useRouter} from "next/navigation";

const {Header, Content, Sider} = Layout;

// ====== ✅ Grup menu atas (Header) dibedakan jadi Genre, Watchlist, dan Populer ======
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

const rekomendasiItems = ['Anime', 'Live Action',].map((name, index) => ({
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
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

interface AuthenticatedLayoutProps {
  children: React.ReactNode
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({children}) => {
  const router = useRouter();

  const {
    token: {colorBgContainer},
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
        <Sider width={200} style={{background: colorBgContainer}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
            items={menu.concat(items2)}
            onClick={({key}) => {
              router.push(key);
            }}
          />
        </Sider>
        <Layout style={{padding: '0 24px 24px', height: 'calc(100vh - 64px)'}}>
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
