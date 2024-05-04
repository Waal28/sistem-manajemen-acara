import prisma from "../../config/prisma.js";

export default class EventService {
  static async filter(jenis, prodi) {
    const result = await prisma.event.findMany();
    if (!result) {
      throw new ResponseError(400, "Data tidak ditemukan");
    }
    return { message: "Berhasil mengambil data", data: result };
  }
  static async search(query) {
    const result = await prisma.event.findUnique({
      where: {
        id,
      },
    });
    if (!result) {
      throw new ResponseError(400, "Data tidak ditemukan");
    }
    return { message: "Berhasil mengambil data", data: result };
  }
}
