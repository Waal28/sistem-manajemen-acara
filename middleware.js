import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "./middleware/verifyToken.mjs";

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const token = cookies().get("token");
  const decode = token && (await verifyToken(token.value));

  // if (pathname === "/") {
  //   return NextResponse.redirect(new URL("/home", req.url));
  // }
}
