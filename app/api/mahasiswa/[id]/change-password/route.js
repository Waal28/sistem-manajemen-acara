import MahasiswaController from "@/controller/mahasiswa";

export async function PUT(req, context) {
  return MahasiswaController.ubahPassword(req, context);
}
