import { handleResponse } from "@/app/api/route";
import HttpError from "@/config/error";
import MahasiswaService from "@/service/mahasiswa";

export default class MahasiswaController {
  static async getAll() {
    try {
      const result = await MahasiswaService.getAll();

      return handleResponse(200, "Berhasil menampilkan semua data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async getOne(req, context) {
    const id = context.params.id;

    try {
      const result = await MahasiswaService.getOne(id);

      return handleResponse(200, "Berhasil menampilkan data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async update(req, context) {
    const id = context.params.id;
    const body = await req.json();

    try {
      const result = await MahasiswaService.update(body, id);

      return handleResponse(200, "Berhasil mengupdate data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async delete(req, context) {
    const id = context.params.id;

    try {
      await MahasiswaService.delete(id);

      return handleResponse(200, "Berhasil menghapus data");
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
  static async register(req) {
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

      const result = await MahasiswaService.register(body);

      return handleResponse(200, "Register Berhasil", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
  static async login(req) {
    const body = await req.json();

    try {
      const result = await MahasiswaService.login(body);

      return handleResponse(200, "Login Berhasil", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
  static async ubahPassword(req, context) {
    const id = context.params.id;
    const body = await req.json();
    const { oldPassword, newPassword } = body;

    try {
      if (!oldPassword || !newPassword) {
        throw new HttpError("Data tidak lengkap", 400);
      }

      const result = await MahasiswaService.ubahPassword(body, id);

      return handleResponse(200, "Ubah password berhasil", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
}
