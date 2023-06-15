import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", (erro) => {
  console.log(erro);
});

db.once("open", () => {
  console.log("Conectado ao database com sucesso");
});

export default db;
