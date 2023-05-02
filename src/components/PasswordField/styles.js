import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    right: 20px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  color: #001e3c;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
`;
