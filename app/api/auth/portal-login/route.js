import MahasiswaController from "@/controller/mahasiswa";

export async function POST(req) {
  return MahasiswaController.login(req);
}
