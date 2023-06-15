import { Button, TextField } from "@mui/material";
import { Form } from "./styled";
import { FormularioContext } from "../../contexts/cadastro-context";
import { useContext } from "react";

export default function Formulario() {
  const { values, erros, onchange, onsubmit, validaCampos } =
    useContext(FormularioContext);

  return (
    <Form onSubmit={onsubmit}>
      <TextField
        value={values.nome}
        onChange={onchange}
        onBlur={validaCampos}
        helperText={erros.nome.texto}
        error={!erros.nome.valido}
        name="nome"
        id="nome"
        label="Nome Completo"
        variant="outlined"
        margin="dense"
        required
      />
      <TextField
        value={values.rg}
        onChange={onchange}
        onBlur={validaCampos}
        helperText={erros.rg.texto}
        error={!erros.rg.valido}
        name="rg"
        id="rg"
        label="RG"
        variant="outlined"
        margin="dense"
        required
      />
      <TextField
        value={values.cpf}
        onChange={onchange}
        onBlur={validaCampos}
        helperText={erros.cpf.texto}
        error={!erros.cpf.valido}
        name="cpf"
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="dense"
        required
      />
      <TextField
        values={values.cep}
        onChange={onchange}
        onBlur={validaCampos}
        helperText={erros.cep.texto}
        error={!erros.cep.valido}
        name="cep"
        id="cep"
        label="Cep"
        variant="outlined"
        margin="dense"
        required
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </Form>
  );
}
