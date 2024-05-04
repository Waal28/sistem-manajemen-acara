import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./src/routes/index.js";
import cors from "cors";
import errorMiddleware from "./src/middleware/error.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(router());

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
