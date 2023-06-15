import { Router } from "express";
import UsuarioController from "../controllers/controller-usuario.js";

const routerUsuarios = Router();

routerUsuarios
  .get("/api/usuarios/listar", UsuarioController.lista)
  .post("/api/usuario/cadastrar", UsuarioController.cadastra)
  .put("/api/usuario/atualizar/:id", UsuarioController.atualizar)
  .delete("/api/usuario/deletar/:id", UsuarioController.deletar);

export default routerUsuarios;
