import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import HttpError from "@/config/error";
import CrudService from "./crud.mjs";
import { SECRET_KEY } from "@/config/env.mjs";

export class AuthService {
  static async registerPortal(body) {
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
    const payload = { nama, npm, prodi, password: hashedPassword };
    const result = await CrudService.addData("mahasiswa", payload);

    const mhs = {
      id: result.id,
      nama: result.nama,
      npm: result.npm,
      prodi: result.prodi,
    };
    return mhs;
  }

  static async loginPortal(body) {
    const { npm, password } = body;
    const data = await CrudService.filterData("mahasiswa", "npm", npm);

    if (!npm || !password) {
      throw new HttpError("Data tidak lengkap", 400);
    }

    if (data.length < 1) {
      throw new HttpError("NPM tidak ditemukan", 400);
    }

    const payload = {
      id: data[0].id,
      nama: data[0].nama,
      npm: data[0].npm,
      prodi: data[0].prodi,
    };
    const isPasswordValid = await bcrypt.compare(password, data[0].password);
    if (!isPasswordValid) {
      throw new HttpError("Password tidak sesuai", 400);
    }

    const token = jwt.sign(payload, SECRET_KEY);
    return token;
  }
}
