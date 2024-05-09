import { MahasiswaService } from "@/service/mahasiswa";
import { handleResponse } from "../../route";

export async function POST(req) {
  const body = await req.json();

  try {
    const result = await MahasiswaService.login(body);

    return handleResponse(200, "Login Berhasil", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
