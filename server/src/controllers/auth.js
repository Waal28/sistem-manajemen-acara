import bcrypt from "bcryptjs";
import AuthServices from "../service/auth.js";

export default class AuthController {
  static async register(req, res, next) {
    const { nama, npm, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ msg: "Passwords tidak sesuai" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = {
        nama,
        npm,
        email,
        password: hashedPassword,
      };
      try {
        const result = await AuthServices.register(data);

        res.status(201).json({
          status: "success",
          message: result.message,
        });
      } catch (error) {
        next(error);
      }
    }
  }
  static async login(req, res, next) {
    const { npm, password } = req.body;
    try {
      const result = await AuthServices.login(npm, password);
      res.status(201).json({
        status: "success",
        message: result.message,
        data: { token: result.token },
      });
    } catch (error) {
      next(error);
    }
  }
}
