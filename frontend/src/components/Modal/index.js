import ReactModal from "react-modal";
import { CloseItem } from "../icones";
import { BoxFormulario, BoxItem, ButtonBox } from "./styled";
import FormularioEditor from "../FormularioEdição";

ReactModal.setAppElement("#main");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "460px",
    backgroundColor: "#fff",
  },
};

export default function FormularioModal({ abrir, fechar }) {
  return (
    <ReactModal isOpen={abrir} onRequestClose={fechar} style={customStyles}>
      <BoxFormulario>
        <ButtonBox>
          <BoxItem>
            <CloseItem cor="branco" onClick={fechar} />
          </BoxItem>
        </ButtonBox>
        <p>Editar dados usuario</p>
        <FormularioEditor fechar={fechar} />
      </BoxFormulario>
    </ReactModal>
  );
}
