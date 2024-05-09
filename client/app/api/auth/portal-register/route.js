import { MahasiswaService } from "@/service/mahasiswa";
import { handleResponse } from "../../route";

export async function POST(req) {
  const body = await req.json();

  try {
    const result = await MahasiswaService.register(body);

    return handleResponse(200, "Register Berhasil", result);
  } catch (error) {
    return handleResponse(error.statusCode, error.message);
  }
}
