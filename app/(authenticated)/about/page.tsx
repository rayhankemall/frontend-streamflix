"use client";

import React from "react";
import { Button, Card, Typography } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"; // ⬅️ Import ikon lokasi, email, dan telepon
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa"; // ⬅️ Import ikon dari react-icons
import { store } from "#/store";

const { Title, Paragraph } = Typography;

const Page = () => {
  const changeTitle = (newTitle: string) => {
    store.ui.changeTitle(newTitle);
  };

  return (
    <div className="p-0 w-full min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white"> {/* Menggunakan w-full dan min-h-screen */}
      <Card className="w-full bg-white dark:bg-zinc-800 text-black dark:text-white border-none shadow-none"> {/* Menghapus border dan shadow */}
        <Title level={2} className="text-black dark:text-white">Tentang StreamFlix</Title>

        <Paragraph className="text-black dark:text-white">
          <strong>StreamFlix</strong> adalah platform streaming film dan serial TV terbaik yang menyediakan berbagai konten berkualitas dengan subtitle Indonesia. Kami hadir untuk memberikan pengalaman menonton yang lebih baik, nyaman, dan tanpa gangguan iklan. Dengan film dan serial dari berbagai genre.
        </Paragraph>

        <Paragraph className="text-black dark:text-white">
          <strong>StreamFlix</strong> Didirikan pada tahun 2025, <strong>StreamFlix</strong> bertujuan untuk menjadi pilihan utama pecinta film dan serial dengan koleksi yang selalu diperbarui, fitur rekomendasi pintar, dan pengalaman menonton bebas gangguan.
        </Paragraph>

        <Title level={4} className="text-black dark:text-white">Misi Kami</Title>
        <ul className="text-black dark:text-white">
          <li>Menyediakan konten hiburan berkualitas tinggi untuk semua kalangan.</li>
          <li>Mendukung kreator lokal dan internasional.</li>
          <li>Menghadirkan pengalaman menonton yang nyaman dan personal.</li>
        </ul>

        <Title level={4} className="text-black dark:text-white mt-4">Kenapa Memilih StreamFlix?</Title>
        <ol className="text-black dark:text-white">
          <li>Streaming cepat dan stabil.</li>
          <li>Tanpa iklan yang mengganggu.</li>
          <li>Koleksi lengkap dan eksklusif.</li>
        </ol>

        <Paragraph className="text-black dark:text-white mt-4">
          Gabung dengan pengguna lain yang sudah menikmati <strong>StreamFlix</strong>.
        </Paragraph>

        <div className="mt-6">
          <Paragraph className="text-black dark:text-white">Terima kasih telah mendukung <strong>StreamFlix</strong></Paragraph>
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
            +62 822 - 2222 - 2222
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
            Kota Bekasi, Bantargebang, Jawa Barat
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Page;
