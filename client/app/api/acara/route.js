import CrudService from "@/service/crud.mjs";
import { handleResponse } from "../route";

// client/app/api/acara/route.js
export async function GET() {
  try {
    const result = await CrudService.getAllData("acara");

    return handleResponse(200, "Berhasil menampilkan semua data", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
export async function POST(req) {
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

  if (checkBody) {
    return handleResponse(400, "Data tidak lengkap");
  }

  try {
    const result = await CrudService.addData("acara", body);

    return handleResponse(200, "Berhasil menambahkan data", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
