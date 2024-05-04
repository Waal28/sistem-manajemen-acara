import prisma from "../../config/prisma.js";

export default class CrudService {
  static async getAll(table) {
    const result = await prisma[table].findMany();
    if (!result) {
      throw new ResponseError(400, "Data tidak ditemukan");
    }
    return { message: "Berhasil mengambil data", data: result };
  }
  static async getOne(table, id) {
    const result = await prisma[table].findUnique({
      where: {
        id,
      },
    });
    if (!result) {
      throw new ResponseError(400, "Data tidak ditemukan");
    }
    return { message: "Berhasil mengambil data", data: result };
  }
  static async create(table, body) {
    const result = await prisma[table].create({
      body,
    });
    if (!result) {
      throw new ResponseError(400, "Data gagal ditambahkan");
    }
    return { message: "Berhasil menambahkan data", data: result };
  }
  static async update(table, id, body) {
    const result = await prisma[table].update({
      where: {
        id,
      },
      body,
    });
    if (!result) {
      throw new ResponseError(400, "Data gagal diupdate");
    }
    return { message: "Berhasil mengupdate data", data: result };
  }
  static async destroy(table, id) {
    await prisma[table].delete({
      where: {
        id,
      },
    });
    if (!result) {
      throw new ResponseError(400, "Data gagal dihapus");
    }
    return { message: "Berhasil menghapus data" };
  }
}
