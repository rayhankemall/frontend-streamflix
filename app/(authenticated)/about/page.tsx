"use client";

import React from "react";
import { Button, Card, Typography, message } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { store } from "@/store";

const { Title, Paragraph } = Typography;

const Page = () => {
  const router = useRouter();

  const changeTitle = (newTitle: string) => {
    store.ui.changeTitle(newTitle);
  };

  const handleLogout = () => {
    // Hapus semua data di localStorage dan sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Hapus cookie
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Tampilkan notifikasi
    message.success("Logout berhasil!");

    // Redirect ke halaman login
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };


  return (
    <div className="p-0 w-full min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white"> {/* Menggunakan w-full dan min-h-screen */}
      <Card className="w-full bg-white dark:bg-neutral-900 text-black dark:text-white border-none shadow-none"> {/* Menghapus border dan shadow */}
        <Title level={2} className="text-black dark:text-white">About StreamFlix</Title>

        <Paragraph className="text-black dark:text-white">
          <strong>StreamFlix</strong> is the best streaming platform for movies and TV series that provides various quality content with Indonesian subtitles. We are here to provide a better, more comfortable, and ad-free viewing experience. With movies and series from various genres.
        </Paragraph>

        <Paragraph className="text-black dark:text-white">
          <strong>StreamFlix</strong> Founded in 2025, <strong>StreamFlix</strong> aims to be the first choice for movie and series lovers with an always updated collection, smart recommendation features, and a hassle-free viewing experience..
        </Paragraph>

        <Title level={4} className="text-black dark:text-white">Our Mission</Title>
        <ul className="text-black dark:text-white">
          <li>Providing high quality entertainment content for all ages.</li>
          <li>Supporting local and international creators.</li>
          <li>Delivering a comfortable and personal viewing experience.</li>
        </ul>

        <Title level={4} className="text-black dark:text-white mt-4">Why Choose StreamFlix?</Title>
        <ol className="text-black dark:text-white">
          <li>Fast and stable streaming.</li>
          <li>No annoying ads.</li>
          <li>Complete and exclusive collection.</li>
        </ol>

        <Paragraph className="text-black dark:text-white mt-4">
          Join other users who are already enjoying <strong>StreamFlix</strong>.
        </Paragraph>

        <div className="mt-6">
          <Paragraph className="text-black dark:text-white">Thank you for supporting <strong>StreamFlix</strong></Paragraph>
          {/* Icon Instagram */}
          <Button
            type="primary"
            icon={<FaInstagram />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            StreamFlix
          </Button>
          <br />
          <br />
          {/* Icon Facebook */}
          <Button
            type="primary"
            icon={<FaFacebook />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            StreamFlix
          </Button>
          <br />
          <br />
          {/* Icon TikTok */}
          <Button
            type="primary"
            icon={<FaTiktok />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            StreamFlix
          </Button>
          <br />
          <br />
          {/* Icon Twitter (X) */}
          <Button
            type="primary"
            icon={<FaTwitter />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            StreamFlix
          </Button>
          <br />
          <br />
          <Button
            type="primary"
            icon={<PhoneOutlined />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            ‪+62 822 - 2222 - 2222‬
          </Button>
          <br />
          <br />
          <Button
            type="primary"
            icon={<MailOutlined />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            StreamFlix@gmail.com
          </Button>
          <br />
          <br />
          <Button
            type="primary"
            icon={<EnvironmentOutlined />}
            onClick={() => changeTitle("Dari halaman About")}
            className="text-black dark:text-white"
          >
            City ​​of Bekasi, Bantargebang, West Java
          </Button>

          
        </div>
      </Card>
       {/* Tombol Logout */}
          <Button
            danger
            type="primary"
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 mt-4"
          >
            Logout
          </Button>
    </div>
  );
};



export default Page;
