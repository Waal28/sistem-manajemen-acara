import CrudController from "../controllers/crud.js";

export default async function authRoutes(router) {
  router.get("/event", CrudController.getAll);
  router.get("/event/:id", CrudController.getOne);
  router.post("/event", CrudController.create);
  router.put("/event/:id", CrudController.update);
  router.delete("/event/:id", CrudController.destroy);

  //   router.get("/event/filter", CrudController.search);
  //   router.get("/event/search", CrudController.search);
}
