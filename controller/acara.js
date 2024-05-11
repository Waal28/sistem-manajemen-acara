import { handleResponse } from "@/app/api/route";
import HttpError from "@/config/error";
import AcaraService from "@/service/acara";

export default class AcaraController {
  static async getAll() {
    try {
      const result = await AcaraService.getAll();

      return handleResponse(200, "Berhasil menampilkan semua data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async getOne(req, context) {
    const id = context.params.id;

    try {
      const result = await AcaraService.getOne(id);

      return handleResponse(200, "Berhasil menampilkan data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async create(req) {
    const body = await req.json();
    const {
      judul,
      deskripsi,
      kategori,
      prodi,
      waktu_mulai,
      waktu_selesai,
      tempat,
      gambar,
    } = body;
    const checkBody =
      !judul ||
      !deskripsi ||
      !kategori ||
      !prodi ||
      !waktu_mulai ||
      !waktu_selesai ||
      !tempat ||
      !gambar;

    try {
      if (checkBody) {
        throw new HttpError("Data tidak lengkap", 400);
      }

      const result = await AcaraService.create(body);

      return handleResponse(200, "Berhasil menambahkan data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async update(req, context) {
    const id = context.params.id;
    const body = await req.json();
    const {
      judul,
      deskripsi,
      kategori,
      prodi,
      waktu_mulai,
      waktu_selesai,
      tempat,
      gambar,
    } = body;
    const checkBody =
      !judul ||
      !deskripsi ||
      !kategori ||
      !prodi ||
      !waktu_mulai ||
      !waktu_selesai ||
      !tempat ||
      !gambar;

    try {
      if (checkBody) {
        throw new HttpError("Data tidak lengkap", 400);
      }
      const result = await AcaraService.update(id, body);

      return handleResponse(200, "Berhasil mengupdate data", result);
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }

  static async delete(req, context) {
    const id = context.params.id;

    try {
      await AcaraService.delete(id);

      return handleResponse(200, "Berhasil menghapus data");
    } catch (error) {
      return handleResponse(error.statusCode, error.message);
    }
  }
}
