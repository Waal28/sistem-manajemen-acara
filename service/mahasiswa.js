import HttpError from "@/config/error";
import CrudService from "./crud.mjs";

export default class MahasiswaService {
  static async ubahPassword(body, id) {
    const { oldPassword, newPassword } = body;
    const mhs = await CrudService.getOneData("mahasiswa", id);

    if (mhs.password !== oldPassword) {
      throw new HttpError("Password salah", 400);
    }
    if (mhs.password === newPassword) {
      throw new HttpError(
        "Password baru tidak boleh sama dengan password lama",
        400
      );
    }
    const res = await CrudService.updateData("mahasiswa", id, {
      password: newPassword,
    });

    return res;
  }
}
