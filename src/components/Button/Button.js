import styled, { css } from "styled-components";

const defaultButton = css`
  background: white;
  color: #000;
  border-color: #fff;

  &:hover {
    background: #f2f2f2;
    color: #282a3a;
    border-color: #4caf50;
  }
`;
const addButton = css`
  background: #4caf50;
  color: #fff;
  border-color: #4caf50;

  &:hover {
    background: #fff;
    color: #4caf50;
    border-color: #4caf50;
  }
`;
const delButton = css`
  background: #f44336;
  color: #fff;
  border-color: #f44336;

  &:hover {
    background: #fff;
    color: #f44336;
    border-color: #f44336;
  }
`;

const updButton = css`
  background: #2196f3;
  color: #fff;
  border-color: #2196f3;

  &:hover {
    background: #fff;
    color: #2196f3;
    border-color: #2196f3;
  }
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

  @media (max-width: 768px) {
    display: none;
  }

  ${({ variant }) => {
    switch (variant) {
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
