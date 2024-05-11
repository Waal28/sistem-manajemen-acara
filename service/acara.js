import CrudConfig from "@/config/crud.mjs";

export default class AcaraService {
  static async getAll() {
    const result = await CrudConfig.getAllData("acara");
    return result;
  }
  static async getOne(id) {
    const result = await CrudConfig.getOneData("acara", id);
    return result;
  }
  static async create(body) {
    const result = await CrudConfig.addData("acara", body);
    return result;
  }
  static async update(id, body) {
    const result = await CrudConfig.updateData("acara", id, body);
    return result;
  }
  static async delete(id) {
    await CrudConfig.deleteData("acara", id);
  }
}
