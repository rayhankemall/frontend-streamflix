export async function fetchUser() {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) return null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    console.error("Gagal ambil user");
    return null;
  }

  return await res.json();
}
