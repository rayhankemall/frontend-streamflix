export async function fetchUser() {
  // Pastikan kode ini hanya jalan di browser
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Gagal mengambil data user:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error saat fetch user:", err);
    return null;
  }
}
