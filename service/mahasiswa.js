import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import CrudConfig from "@/config/crud.mjs";
import HttpError from "@/config/error";
import { SECRET_KEY } from "@/config/env.mjs";

export default class MahasiswaService {
  static async getAll() {
    const result = await CrudConfig.getAllData("mahasiswa");
    return result;
  }
  static async getOne(id) {
    const result = await CrudConfig.getOneData("mahasiswa", id);
    const mhs = {
      id: result.id,
      nama: result.nama,
      npm: result.npm,
      email: result.email,
      prodi: result.prodi,
    };
    return mhs;
  }
  static async update(id, body) {
    const result = await CrudConfig.updateData("mahasiswa", id, body);

    const mhs = {
      id: result.id,
      nama: result.nama,
      npm: result.npm,
      email: result.email,
      prodi: result.prodi,
    };
    return mhs;
  }
  static async delete(id) {
    await CrudConfig.deleteData("mahasiswa", id);
  }
  static async register(body) {
    const { nama, npm, email, prodi, password, confirmPassword } = body;
    const data = await CrudConfig.filterData("mahasiswa", "npm", npm);

    if (data.length > 0) {
      throw new HttpError("NPM sudah terdaftar", 400);
    }

    if (password !== confirmPassword) {
      throw new HttpError("Password & Konfirmasi Password tidak sesuai", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const payload = { nama, npm, email, prodi, password: hashedPassword };
    const result = await CrudConfig.addData("mahasiswa", payload);

    const mhs = {
      id: result.id,
      nama: result.nama,
      npm: result.npm,
      email: result.email,
      prodi: result.prodi,
      created_at: result.created_at,
    };
    return mhs;
  }
  static async login(body) {
    const { npm, password } = body;
    const data = await CrudConfig.filterData("mahasiswa", "npm", npm);

    if (!npm || !password) {
      throw new HttpError("Data tidak lengkap", 400);
    }

    if (data.length < 1) {
      throw new HttpError("NPM tidak ditemukan", 400);
    }

    const payload = {
      id: data[0].id,
    };
    const isPasswordValid = await bcrypt.compare(password, data[0].password);
    if (!isPasswordValid) {
      throw new HttpError("Password tidak sesuai", 400);
    }

    const token = jwt.sign(payload, SECRET_KEY);
    return token;
  }
  static async ubahPassword(body, id) {
    const { oldPassword, newPassword } = body;
    const mhs = await CrudConfig.getOneData("mahasiswa", id);

    const isPasswordValid = await bcrypt.compare(oldPassword, mhs.password);
    if (!isPasswordValid) {
      throw new HttpError("Password salah", 400);
    }

    if (newPassword === oldPassword) {
      throw new HttpError(
        "Password baru tidak boleh sama dengan password lama",
        400
      );
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    await CrudConfig.updateData("mahasiswa", id, {
      password: newPasswordHash,
    });

    return true;
  }
}
