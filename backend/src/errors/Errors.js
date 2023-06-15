class ErrorPadrao extends Error {
  constructor() {
    super();
    this.message = "Erro na api";
    this.name = "Erro Padrão";
    this.id = 0;
    this.status = 500;
  }
}

class ArgumentoInvalido extends Error {
  constructor(mensagem) {
    super();
    this.message = mensagem;
    this.name = "Não aceitavel";
    this.id = 1;
    this.status = 406;
  }
}

class NaoEncontrado extends Error {
  constructor(message) {
    super();
    this.message = `${message} não encontrado`;
    this.name = "Nao encontrado";
    this.id = 2;
    this.status = 404;
  }
}
export { ArgumentoInvalido, ErrorPadrao, NaoEncontrado };
