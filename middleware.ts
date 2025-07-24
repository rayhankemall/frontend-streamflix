import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  // Halaman publik (tidak butuh login)
  const publicPaths = ["/login", "/signup", "/"];

  if (!token && !publicPaths.includes(req.nextUrl.pathname)) {
    // Redirect ke login jika tidak ada token
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Semua route kecuali assets/_next
};
