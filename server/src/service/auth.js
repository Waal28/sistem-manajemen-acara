import prisma from "../../config/prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ResponseError from "../error/response-error.js";

export default class AuthServices {
  static async register(data) {
    const user = await prisma.mahasiswa.findUnique({
      where: { npm: data.npm },
    });

    if (user) {
      throw new ResponseError(400, "Mahasiswa sudah terdaftar");
    } else {
      await prisma.mahasiswa.create({
        data,
      });

      return { message: "Berhasil register" };
    }
  }

  static async login(npm, password) {
    const user = await prisma.mahasiswa.findFirst({
      where: { npm },
    });
    if (!user) {
      throw new ResponseError(400, "Mahasiswa tidak ditemukan");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ResponseError(400, "Password tidak sesuai");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { message: "Berhasil login", token };
  }
}
