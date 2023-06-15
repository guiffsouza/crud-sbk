import express from "express";
import routerUsuarios from "./router-usuario.js";
import cors from "cors";
import MiddlewareErro from "../middlewares/middlewares-erros.js";
import Headers from "../config/headers.js";

export const routers = (app) => {
  app.use(cors());
  app.use(Headers.config);
  app.use(express.json(), routerUsuarios);
  app.use(MiddlewareErro.erros);
};
