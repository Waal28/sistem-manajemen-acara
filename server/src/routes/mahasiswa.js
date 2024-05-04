import CrudController from "../controllers/crud.js";

export default async function mahasiswaRoutes(router) {
  router.get("/mahasiswa", CrudController.getAll);
  router.get("/mahasiswa/:id", CrudController.getOne);
  router.post("/mahasiswa", CrudController.create);
  router.put("/mahasiswa/:id", CrudController.update);
  router.delete("/mahasiswa/:id", CrudController.destroy);
}
