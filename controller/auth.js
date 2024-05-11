import { handleResponse } from "@/app/api/route";
import HttpError from "@/config/error";
import { AuthService } from "@/service/auth";

export default class AuthController {
  static async registerPortal(req) {
    const body = await req.json();
    const { nama, npm, email, prodi, password, confirmPassword } = body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validateEmail = emailRegex.test(email);

    try {
      if (!nama || !npm || !email || !prodi || !password || !confirmPassword) {
        throw new HttpError("Data tidak lengkap", 400);
      }

      if (!validateEmail) {
        throw new HttpError("Format email tidak sesuai", 400);
      }

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
