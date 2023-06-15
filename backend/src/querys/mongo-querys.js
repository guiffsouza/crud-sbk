import { ArgumentoInvalido, NaoEncontrado } from "../errors/Errors.js";
import Usuario from "../model/model-usuario.js";

export default class Querys {
  static async encontreTodos() {
    const dados = await Usuario.find();
    return dados;
  }

  static async cadastra(dados) {
    const usuarios = new Usuario(dados);
    return usuarios.save();
  }

  static async verificaExiste(key, valor) {
    const dado = await Usuario.findOne({ [key]: valor }).exec();
    if (!dado) {
      return;
    }
    if (dado[key] === valor) {
      throw new ArgumentoInvalido(`${key} ja cadastrado.`);
    }
  }

  static async deleta(id) {
    const usuario = await Usuario.findByIdAndDelete(id);
    this.verificaSeExiste(usuario);
  }

  static async encontraUm(id) {
    const dado = await Usuario.findById(id).exec();
    if (!dado) {
      throw new ArgumentoInvalido(
        `O elemento ${id} não existe no banco de dados.`
      );
    }
    return dado;
  }

  static async encontraEAtualiza(id, dado) {
    const usuario = await Usuario.findByIdAndUpdate({ _id: id }, dado);
    this.verificaSeExiste(usuario);
    return usuario;
  }

  static verificaSeExiste(dado) {
    if (!dado) {
      throw new NaoEncontrado("Usuario não encontrado.");
    }
  }
}
