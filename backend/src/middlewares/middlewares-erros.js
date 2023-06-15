import { ArgumentoInvalido, NaoEncontrado } from "../errors/Errors.js";

class MiddlewareErro {
  static erros(error, req, res, next) {
    let status = 500;
    let erroMessage = { name: error.name, message: error.message };

    if (error instanceof ArgumentoInvalido) {
      status = 406;
    }

    if (error instanceof NaoEncontrado) {
      status = 404;
    }
    return res.status(status).json(erroMessage);
  }
}

export default MiddlewareErro;
