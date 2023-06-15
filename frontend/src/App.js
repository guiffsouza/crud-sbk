import styled from "styled-components";
import Formulario from "./components/Formulario";
import ProviderFormulario from "./contexts/cadastro-context";
import ListaUsuarios from "./components/Usuarios";
import { GlobalStyle } from "./components/globalstyled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const inputInicial = {
  nome: "",
  rg: "",
  cpf: "",
  cep: "",
  cidade: "",
  bairro: "",
  estado: "",
  logradouro: "",
};

const erroInicial = {
  nome: { valido: true, texto: "" },
  rg: { valido: true, texto: "" },
  cpf: { valido: true, texto: "" },
  cep: { valido: true, texto: "" },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ProviderFormulario
          inputInicial={inputInicial}
          erroInicial={erroInicial}
        >
          <Formulario />
        </ProviderFormulario>
        <ListaUsuarios />
      </Container>
    </>
  );
}

export default App;
