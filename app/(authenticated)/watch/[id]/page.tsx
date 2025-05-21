"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function WatchPage() {
  const params = useParams();
  const id = params?.id as string;

  const videoMap: { [key: string]: string } = {
    kiminonawa: "https://odvidhide.com/embed/a6otjvciu1pm",
    // Tambahkan film lain sesuai kebutuhan
    // contoh:
    // onepiece: "https://example.com/iframe-link-untuk-onepiece"
  };

  const videoSrc = videoMap[id];

  if (!videoSrc) {
    return (
      <div
        style={{ textAlign: "center", marginTop: "100px", fontSize: "20px" }}
      >
        Film tidak ditemukan
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={videoSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
        scrolling="no"
        title={`Video ${id}`}
      ></iframe>
    </div>
  );
}
