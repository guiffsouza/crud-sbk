import { ArgumentoInvalido } from "../errors/Errors.js";
import validadorDocumento from "cpf-rg-validator";
import Querys from "../querys/mongo-querys.js";

export default class ValidadorUsuario {
  constructor({ nome, rg, cpf, cep, cidade, bairro, estado, logradouro }) {
    this.nome = nome;
    this.rg = rg;
    this.cpf = cpf;
    this.cep = cep;
    this.cidade = cidade;
    this.bairro = bairro;
    this.estado = estado;
    this.logradouro = logradouro;
  }

  static validar(novoUsuario) {
    const usuarios = new ValidadorUsuario(novoUsuario);
    return usuarios.getDadosValidados();
  }

  static async verificarStatus(id) {
    const usuario = await Querys.encontraUm(id);
    if (usuario.status == "inativo") {
      await Querys.deleta(id);
      return;
    }
    throw new ArgumentoInvalido("Não é possivel deletar um usuario ativo.");
  }

  async getDadosValidados() {
    return {
      nome: this.nome,
      rg: await this.validaRg(this.rg),
      cpf: await this.validaCpf(this.cpf),
      status: "ativo",
      cep: this.validaCep(this.cep),
      cidade: this.validaEndereco(this.cidade),
      bairro: this.validaEndereco(this.bairro),
      estado: this.validaEndereco(this.estado),
      logradouro: this.validaEndereco(this.logradouro),
    };
  }

  async validaRg(rg) {
    const rgFormatado = this.formataNumeros(rg);
    await this.verificaNoBanco(rgFormatado);
    if (!validadorDocumento.rg(rgFormatado)) {
      throw new ArgumentoInvalido("RG invalido.");
    }
    return rgFormatado;
  }

  async validaCpf(cpf) {
    const cpfFormatado = this.formataNumeros(cpf);
    await this.verificaNoBanco(cpfFormatado);
    if (!validadorDocumento.cpf(cpfFormatado)) {
      throw new ArgumentoInvalido("CPF invalido.");
    }
    return cpfFormatado;
  }

  validaCep(cep) {
    if (cep.length === 0) {
      throw new ArgumentoInvalido("Cep invalido.");
    }
    return cep;
  }

  validaEndereco(endereco) {
    if (endereco.length === 0) {
      throw new ArgumentoInvalido("Verifique se endereço está correto.");
    }
    return endereco;
  }

  formataNumeros(dado) {
    return dado.replace(/[^?0-9]/g, "");
  }

  async verificaNoBanco(valor) {
    let key = valor.length === 9 ? "rg" : "cpf";
    await Querys.verificaExiste(key, valor);
  }
}
