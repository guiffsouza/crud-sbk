import { useEffect, useState } from "react";
import { listar } from "../../apis/backend";
import { BoxCards } from "./styled";
import UsuarioCard from "../Card_user";
import ProviderFormulario from "../../contexts/cadastro-context";

const inputInicial = {
  status: "",
};

const erroInicial = {
  status: { valido: true, texto: "" },
};

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    const users = await listar();
    const arrayReverso = users.reverse();
    setUsuarios(arrayReverso);
  };

  useEffect(() => {
    getUsuarios();
  }, [usuarios]);

  return (
    <BoxCards>
      {usuarios.map((usuario, key) => {
        return (
          <ProviderFormulario
            key={key}
            inputInicial={inputInicial}
            erroInicial={erroInicial}
          >
            <UsuarioCard usuario={usuario} />
          </ProviderFormulario>
        );
      })}
    </BoxCards>
  );
}
