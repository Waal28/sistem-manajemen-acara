import CrudService from "@/service/crud.mjs";
import { handleResponse } from "../route";

// client/app/api/mahasiswa/route.js
export async function GET() {
  try {
    const result = await CrudService.getAllData("mahasiswa");

    return handleResponse(200, "Berhasil menampilkan semua data", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
export async function POST(req) {
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
