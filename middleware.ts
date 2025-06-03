import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('authorization')
  const url = req.nextUrl.clone()
  const isAuthPage = url.pathname === '/login' || url.pathname === '/signup'

  // Jika user sudah login dan mengakses login/signup, redirect ke /payments
  if (token && isAuthPage) {
    url.pathname = '/SubscriptionPlan'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/signup'],
}
