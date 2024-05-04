import express from "express";
import bodyParser from "body-parser";
import router from "./src/routes/index.js";
import cors from "cors";
import errorMiddleware from "./src/middleware/error.js";
import { PORT } from "./config/env.js";

const app = express();
const port = PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(router());

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
