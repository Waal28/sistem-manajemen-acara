import CrudController from "../controllers/crud.js";

export default async function userRoutes(router) {
  router.get("/user", CrudController.getAll);
  router.get("/user/:id", CrudController.getOne);
  router.post("/user", CrudController.create);
  router.put("/user/:id", CrudController.update);
  router.delete("/user/:id", CrudController.destroy);
}
