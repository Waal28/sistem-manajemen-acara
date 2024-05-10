import { handleResponse } from "@/app/api/route";
import { AuthService } from "@/service/auth";

export default class AuthController {
  static async registerPortal(req) {
    const body = await req.json();

    try {
      const result = await AuthService.registerPortal(body);

      return handleResponse(200, "Register Berhasil", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async loginPortal(req) {
    const body = await req.json();

    try {
      const result = await AuthService.loginPortal(body);

      return handleResponse(200, "Login Berhasil", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
}
