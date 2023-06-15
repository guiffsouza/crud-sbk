import validadorDocumento from "cpf-rg-validator";

export function validaRg(rg) {
  if (!validadorDocumento.rg(rg)) {
    return {
      valido: false,
      texto: "RG invalido.",
    };
  }
  return { valido: true, texto: "" };
}

export function validaCpf(cpf) {
  if (!validadorDocumento.cpf(cpf)) {
    return {
      valido: false,
      texto: "CPF invalido.",
    };
  }
  return { valido: true, texto: "" };
}

export function validaCep(cep) {
  if (cep.length < 8) {
    return {
      valido: false,
      texto: "Cep invalido.",
    };
  }
  return { valido: true, texto: "" };
}

export function validaNome(nome) {
  if (nome.length < 5 || nome.length > 50) {
    return {
      valido: false,
      texto: "Nome Invalido.",
    };
  }
  return { valido: true, texto: "" };
}

export function validaStatus(status) {
  if (status.length < 5 || status.length > 50) {
    return {
      valido: false,
      texto: "status Invalido.",
    };
  }
  return { valido: true, texto: "" };
}
