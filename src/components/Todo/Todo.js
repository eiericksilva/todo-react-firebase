import styled, { css } from "styled-components";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";

export const ContainerTodo = styled.div`
  max-width: 100%;
  margin: 20px auto;
  min-height: 50px;
  background-color: #fff;
  color: #001e3c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const WrapperTasks = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 90px;
  height: auto;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  min-width: 30%;
  align-items: center;

  svg {
    color: #735f32;
    cursor: pointer;

    &:hover {
      color: #c69749;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const TitleTodo = styled.h1`
  font-size: 12px;
  width: 70%;
`;
