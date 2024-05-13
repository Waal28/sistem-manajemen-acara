import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "./middleware/verifyToken.mjs";

export function middleware(req) {
  // const login = true;
  // if (req.nextUrl.pathname.startsWith("/admin")) {
  //   if (!login) {
  //     return NextResponse.redirect(new URL("/admin/login", req.url));
  //   }
  // }
  const pathStart = (route) => req.nextUrl.pathname.startsWith(route);

  if (pathStart("/profile") || pathStart("/my-events")) {
    const token = cookies().get("token");
    const decode = verifyToken(token.value);
    if (!decode) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
