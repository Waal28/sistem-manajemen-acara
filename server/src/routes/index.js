import express from "express";
import authRoutes from "./auth.js";
import mahasiswaRoutes from "./mahasiswa.js";
import userRoutes from "./user.js";

const router = express.Router();

export default () => {
  authRoutes(router);
  mahasiswaRoutes(router);
  userRoutes(router);
  return router;
};
