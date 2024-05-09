import { NextResponse } from "next/server";

export function middleware(req) {
  const login = true;
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!login) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
}
