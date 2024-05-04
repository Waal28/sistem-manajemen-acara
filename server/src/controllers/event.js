export default class EventController {
  static async filter(req, res, next) {
    try {
      const result = res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async search(req, res, next) {
    try {
      const result = res.status(201).json({
        status: "success",
        message: result.message,
        data: result.data,
      });
    } catch (error) {
      next(error);
    }
  }
}
