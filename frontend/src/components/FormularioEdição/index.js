import { Autocomplete, Button, TextField } from "@mui/material";
import { Form } from "./styled";
import { useContext, useState } from "react";
import { editar } from "../../apis/backend";
import { FormularioContext } from "../../contexts/cadastro-context";

const lista = [{ label: "ativo" }, { label: "inativo" }];

export default function FormularioEditor() {
  const [selectedValues, setSelectedValues] = useState([]);
  const { usuarioId } = useContext(FormularioContext);

  const onchange = (event, values) => {
    setSelectedValues(values);
  };

  const onsubmit = async (e) => {
    await editar(usuarioId, { status: selectedValues.label });
  };

  return (
    <Form onSubmit={onsubmit}>
      <Autocomplete
        disablePortal
        options={lista}
        onChange={onchange}
        value={selectedValues}
        id="status"
        name="status"
        variant="outlined"
        margin="dense"
        required
        renderInput={(params) => <TextField {...params} label="Status" />}
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </Form>
  );
}
