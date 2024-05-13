import * as jose from "jose";
import HttpError from "@/config/error";

const { SECRET_KEY } = process.env;
// Middleware untuk memeriksa token JWT
export default function authMiddleware(req) {
  const requestHeaders = new Headers(req.headers);
  const token = requestHeaders.get("authorization");

  if (!token) {
    console.log("token tidak tersedia");
    throw new HttpError("Token tidak tersedia", 401);
  }

  const verifyToken = jose.jwtVerify(token, SECRET_KEY);
  if (!verifyToken) {
    console.log("token tidak valid");
    throw new HttpError("Token tidak valid", 401);
  }
}
