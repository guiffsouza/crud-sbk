import { createContext, useState } from "react";
import {
  validaCep,
  validaCpf,
  validaNome,
  validaRg,
  validaStatus,
} from "../validations/validador";
import { apiCep } from "../apis/cep";
import { cadastra } from "../apis/backend";

export const FormularioContext = createContext();

export default function ProviderFormulario({
  children,
  inputInicial,
  erroInicial,
}) {
  const [values, setValues] = useState(inputInicial);
  const [erros, setErros] = useState(erroInicial);
  const [usuarioId, setUsuarioId] = useState(null);
  const [input, setInput] = useState(null);

  const onchange = (e) => {
    const { name, value } = e.target;
    const novoValor = { ...values, [name]: value };
    setValues(novoValor);
  };

  const getEndereco = async () => {
    const endereco = await apiCep(values.cep);
    values["cidade"] = endereco.localidade;
    values["bairro"] = endereco.bairro;
    values["estado"] = endereco.uf;
    values["logradouro"] = endereco.logradouro;
  };

  const enviaBackend = async (e) => {
    try {
      e.preventDefault();
      await getEndereco();
      await cadastra(values);
      return;
    } catch (error) {
      alert("O usuario ja foi cadastrado");
    }
  };

  const getInput = (input) => {
    setInput(input);
  };

  const onsubmit = async (e) => {
    try {
      if (possoEnviar()) {
        await enviaBackend(e);
        input.value = "";
        setValues(inputInicial);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getId = (id) => {
    setUsuarioId(id);
  };

  const validaCampos = async (e) => {
    const { name, value } = e.target;
    const novoValor = { ...erros };
    novoValor[name] = await validador[name](value);
    setErros(novoValor);
  };

  const possoEnviar = () => {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  };

  const validador = {
    nome: validaNome,
    rg: validaRg,
    cpf: validaCpf,
    cep: validaCep,
    status: validaStatus,
  };

  return (
    <FormularioContext.Provider
      value={{
        values,
        erros,
        onchange,
        onsubmit,
        validaCampos,
        getId,
        getInput,
        usuarioId,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
}
