import "dotenv/config";
import express from "express";
import { routers } from "./routers/index.js";
import "./config/db.js";

const app = express();
routers(app);
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
