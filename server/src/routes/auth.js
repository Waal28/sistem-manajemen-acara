import AuthController from "../controllers/auth.js";

export default async function authRoutes(router) {
  router.post("/portal/register", AuthController.mhsRegister);
  router.post("/portal/login", AuthController.mhsLogin);

  router.post("/admin/register", AuthController.adminRegister);
  router.post("/admin/login", AuthController.adminLogin);
}
