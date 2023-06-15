import { Button, TextField } from "@mui/material";
import { Form } from "./styled";
import { FormularioContext } from "../../contexts/cadastro-context";
import { useContext } from "react";

export default function FormularioEditor() {
  const { values, erros, onchange, onsubmit, validaCampos } =
    useContext(FormularioContext);

  return (
    <Form onSubmit={onsubmit}>
      <TextField
        value={values.status}
        onChange={onchange}
        onBlur={validaCampos}
        helperText={erros.status.texto}
        error={!erros.status.valido}
        name="status"
        id="status"
        label="Status"
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
