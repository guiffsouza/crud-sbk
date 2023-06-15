import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export async function listar() {
  const usuarios = await api.get("/usuarios/listar");
  return usuarios.data;
}

export async function cadastra(dados) {
  return await api.post("/usuario/cadastrar", dados);
}

export async function editar(id, dados) {
  console.log("dados:", dados);
  return await api.put(`/usuario/atualizar/${id}`, dados);
}

export async function deletar(id) {
  return await api.delete(`/usuario/deletar/${id}`);
}
