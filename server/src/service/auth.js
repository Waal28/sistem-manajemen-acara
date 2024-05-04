import prisma from "../../config/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ResponseError from "../error/response-error.js";
import { JWT_SECRET } from "../../config/env.js";

export default class AuthServices {
  static async mhsregister(data) {
    const mhs = await prisma.mahasiswa.findUnique({
      where: { npm: data.npm },
    });

    if (mhs) {
      throw new ResponseError(400, "Mahasiswa sudah terdaftar");
    } else {
      await prisma.mahasiswa.create({
        data,
      });

      return { message: "Berhasil register" };
    }
  }

  static async mhslogin(npm, password) {
    const mhs = await prisma.mahasiswa.findFirst({
      where: { npm },
    });
    if (!mhs) {
      throw new ResponseError(400, "Mahasiswa tidak ditemukan");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(400, "Password tidak sesuai");
    }

    const token = jwt.sign({ payload: mhs }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return { message: "Berhasil login", token };
  }
  static async adminRegister(username, role, password, confirmPassword) {}

  static async adminLogin(username, role, password) {
    const user = await prisma.user.findFirst({
      where: { username },
    });
    if (!user) {
      throw new ResponseError(400, "User tidak ditemukan");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(400, "Password tidak sesuai");
    }

    const token = jwt.sign({ payload: user }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return { message: "Berhasil login", token };
  }
}
