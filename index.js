import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Misalnya kamu belum login
    const loggedIn = false; // ganti dengan pengecekan login aslinya

    if (!loggedIn) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, []);

  return <p>Redirecting...</p>;
}
