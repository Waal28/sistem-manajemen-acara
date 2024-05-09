import HttpError from "@/config/error";
import bcrypt from "bcryptjs";

import CrudService from "./crud.mjs";

export class MahasiswaService {
  static async getAll() {
    const result = await CrudService.getAllData("mahasiswa");
    return result;
  }
  static async getOne(id) {
    const result = await CrudService.getOneData("mahasiswa", id);
    return result;
  }
  static async register(body) {
    const { nama, npm, prodi, password, confirmPassword } = body;
    const data = await CrudService.filterData("mahasiswa", "npm", npm);

    if (!nama || !npm || !prodi || !password || !confirmPassword) {
      throw new HttpError("Data tidak lengkap", 400);
    }

    if (data.length > 0) {
      throw new HttpError("NPM sudah terdaftar", 400);
    }

    if (password !== confirmPassword) {
      throw new HttpError("Password & Konfirmasi Password tidak sesuai", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const mhs = { nama, npm, password: hashedPassword };
    const result = await CrudService.addData("mahasiswa", mhs);

    return result;
  }

  static async login(body) {
    const { npm, password } = body;
    const data = await CrudService.filterData("mahasiswa", "npm", npm);

    if (!npm || !password) {
      throw new HttpError("Data tidak lengkap", 400);
    }

    if (data.length < 1) {
      throw new HttpError("NPM tidak ditemukan", 400);
    }

    const mhs = data[0];
    const isPasswordValid = await bcrypt.compare(password, mhs.password);
    if (!isPasswordValid) {
      throw new HttpError("Password tidak sesuai", 400);
    }

    return mhs;
  }
}
