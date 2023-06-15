import axios from "axios";

export async function apiCep(cep) {
  const api = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return api.data;
}
