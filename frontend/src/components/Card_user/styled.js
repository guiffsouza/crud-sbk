import styled from "styled-components";
import { MdManageAccounts } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export const Box = styled.div`
  box-shadow: 0px 6px 29px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-width: 500px;
  min-height: 250px;
  padding: 20px;
  position: relative;
  margin: 10px;
  transition: all ease-in 0.3s;
  background-color: #2d293a;
`;

export const Titulo = styled.p`
  font-weight: 500;
  height: 50px;
  color: #fff;
  font-size: 2em;
`;

export const Texto = styled.p`
  font-size: 14px;
  margin: 2px 0;
  font-weight: 500;
  color: #fff;
  margin-top: 20px;
`;

export const Menu = styled.div`
  font-size: 30px;
  padding: 2px;
  border-radius: 10px;
  transition: all ease-in 0.3s;
  cursor: pointer;
  position: absolute;
  right: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuCard = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  text-align: center;
  top: 0;
  left: 0;
  grid-template-rows: 50px 30px 30px 30px;
  ${({ theme, display }) => {
    return {
      backgroundColor: "#2d293a",
      color: "#010101",
      display: display ? "flex" : "none",
    };
  }}
`;

export const BoxLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #f1f1f1;
  }
`;

export const LinkMenu = styled.div`
  font-size: 14px;
  margin: 2px 0;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
`;

export const MenuMore = styled(FiMoreVertical)`
  width: 100%;
  color: #fff;
`;

export const ManagerItem = styled(MdManageAccounts)`
  font-size: 3em;
  color: "#fff";
  transition: all ease-in 0.3s;
  :hover {
    color: "#010101";
  }
`;

export const DeleteItem = styled(MdDelete)`
  font-size: 3em;
  color: "#fff";
  transition: all ease-in 0.3s;
  :hover {
    color: "#010101";
  }
`;
