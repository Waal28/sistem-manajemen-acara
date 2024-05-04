import CrudService from "../service/crud.js";

function getTable(req) {
  return route.path.split("/")[1];
}

export default class CrudController {
  static async getAll(req, res, next) {
    try {
      const result = await CrudService.getAll(getTable(req));
      res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getOne(req, res, next) {
    try {
      const result = await CrudService.getOne(getTable(req), req.params.id);
      res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    try {
      const result = await CrudService.create(getTable(req), req.body);
      res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      const result = await CrudService.update(
        getTable(req),
        req.params.id,
        req.body
      );
      res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async destroy(req, res, next) {
    try {
      const result = await CrudService.destroy(getTable(req), req.params.id);
      res.status(201).json({
        status: "success",
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}
