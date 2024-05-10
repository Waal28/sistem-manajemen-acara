import { handleResponse } from "@/app/api/route";
import CrudService from "@/service/crud.mjs";

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

  static async create(req) {
    const body = await req.json();
    const { nama, npm, email, password } = body;
    if (!nama || (!npm && !email && !password)) {
      return handleResponse(400, "Data tidak lengkap");
    }

    try {
      const result = await CrudService.addData("mahasiswa", body);

      return handleResponse(200, "Berhasil menambahkan data", result);
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
