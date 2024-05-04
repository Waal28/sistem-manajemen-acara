import AuthController from "../controllers/auth.js";

export default async function authRoutes(router) {
  router.post("/register", AuthController.register);
  router.post("/login", AuthController.login);
}
