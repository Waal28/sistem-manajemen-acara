import AuthController from "@/controller/auth";

export async function POST(req) {
  return AuthController.loginPortal(req);
}
