import { handleResponse } from "@/app/api/route";
import HttpError from "@/config/error";
import CrudService from "@/service/crud.mjs";
import MahasiswaService from "@/service/mahasiswa";

export default class MahasiswaController {
  static async getAll() {
    try {
      const result = await CrudService.getAllData("mahasiswa");

      return handleResponse(200, "Berhasil menampilkan semua data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async getOne(req, context) {
    const id = context.params.id;

    try {
      const result = await CrudService.getOneData("mahasiswa", id);

      return handleResponse(200, "Berhasil menampilkan data", result);
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
  static async update(req, context) {
    const id = context.params.id;
    const body = await req.json();

    try {
      const result = await CrudService.updateData("mahasiswa", id, body);

      return handleResponse(200, "Berhasil mengupdate data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async delete(req, context) {
    const id = context.params.id;

    try {
      await CrudService.deleteData("mahasiswa", id);

      return handleResponse(200, "Berhasil menghapus data");
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
}
