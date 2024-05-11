import AuthController from "@/controller/auth";
import MahasiswaController from "@/controller/mahasiswa";

// client/app/api/mahasiswa/route.js
export async function GET() {
  return MahasiswaController.getAll();
}
export async function POST(req) {
  return AuthController.loginPortal(req);
}
