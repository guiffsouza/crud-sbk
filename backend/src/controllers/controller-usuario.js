import Querys from "../querys/mongo-querys.js";
import ValidadorUsuario from "../validations/validador-usuario.js";

export default class UsuarioController {
  static async lista(req, res, next) {
    try {
      const usuario = await Querys.encontreTodos();
      res.status(200).send(usuario);
    } catch (error) {
      next(error);
    }
  }

  static async cadastra(req, res, next) {
    try {
      const novoUsuario = req.body;
      const usuarioValidado = await ValidadorUsuario.validar(novoUsuario);
      const usuario = await Querys.cadastra(usuarioValidado);
      res.status(201).send(usuario);
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const { id } = req.params;
      const dados = req.body;
      await Querys.encontraEAtualiza(id, dados);
      res.status(200).send({ msg: "Dados atualizados com sucesso." });
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const { id } = req.params;
      await ValidadorUsuario.verificarStatus(id);
      res.status(200).send({ mgs: "Usuario deletado com sucesso." });
    } catch (error) {
      next(error);
    }
  }
}
