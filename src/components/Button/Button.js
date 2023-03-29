import styled, { css } from "styled-components";

const defaultButton = css`
  background: transparent;
  color: #000;
  border-color: #fff;
`;
const addButton = css`
  background: #4caf50;
  color: #fff;
  border-color: #4caf50;
`;
const delButton = css`
  background: #f44336;
  color: #fff;
  border-color: #f44336;
`;

const updButton = css`
  background: #2196f3;
  color: #fff;
  border-color: #2196f3;
`;

export const StyledButton = styled.button`
  border: 1px solid;
  height: auto;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.1s ease;
  margin: 0 10px;

  ${({ type }) => {
    switch (type) {
      case "add":
        return addButton;
        break;

      case "upd":
        return updButton;
        break;

      case "del":
        return delButton;
        break;

      default:
        return defaultButton;
    }
  }}
`;
