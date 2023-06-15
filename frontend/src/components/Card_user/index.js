import { deletar } from "../../apis/backend";
import { FormularioContext } from "../../contexts/cadastro-context";
import FormularioModal from "../Modal";
import {
  Box,
  Titulo,
  Texto,
  Menu,
  MenuCard,
  LinkMenu,
  BoxLink,
  DeleteItem,
  ManagerItem,
  MenuMore,
} from "./styled";
import { useContext, useEffect, useState } from "react";

export default function UsuarioCard({ usuario }) {
  const [open, setOpen] = useState(false);
  const [openFormulario, setOpenFormulario] = useState(false);
  const { getId } = useContext(FormularioContext);

  function formulario() {
    setOpenFormulario(!openFormulario);
  }

  const formattedCPF = usuario.cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  const formattedRG = usuario.rg.replace(
    /(\d{2})(\d{3})(\d{3})(\d{1})/,
    "$1.$2.$3-$4"
  );

  function abrirMenu() {
    setOpen(!open);
  }

  async function deletarUsuario() {
    try {
      await deletar(usuario._id);
      alert("Usuario deletado com sucesso.");
    } catch (error) {
      alert("Você não pode deletar um usuario Ativo.");
    }
  }

  useEffect(() => {
    getId(usuario._id);
  });

  return (
    <Box>
      <FormularioModal
        abrir={openFormulario}
        fechar={formulario}
        usuarioId={usuario.id}
      />
      <MenuCard display={open ? 1 : 0}>
        <BoxLink row="3" onClick={formulario}>
          <ManagerItem cor="branco" />
          <LinkMenu>Editar</LinkMenu>
        </BoxLink>
        <BoxLink row="4">
          <DeleteItem cor="branco" onClick={deletarUsuario} />
          <LinkMenu>Deletar</LinkMenu>
        </BoxLink>
      </MenuCard>
      <Menu>
        <MenuMore onClick={abrirMenu} />
      </Menu>
      <Titulo>{usuario.nome}</Titulo>
      <div>
        <Texto>RG: {formattedRG}</Texto>
        <Texto>CPF: {formattedCPF}</Texto>
        <Texto>Estado: {usuario.estado}</Texto>
        <Texto>Cidade: {usuario.cidade}</Texto>
        <Texto> Status: {usuario.status}</Texto>
      </div>
    </Box>
  );
}
