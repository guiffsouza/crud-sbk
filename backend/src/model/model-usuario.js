import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  rg: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  status: { type: String, enum: ["ativo", "inativo"] },
  cep: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  estado: { type: String, required: true },
  logradouro: { type: String, required: true },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
