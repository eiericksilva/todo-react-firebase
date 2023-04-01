import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  background-color: #c69749;

  svg {
    cursor: pointer;
    display: none;
    &:hover {
      color: #735f32;
    }
  }

  @media (max-width: 768px) {
    width: 97%;

    svg {
      display: block;
    }
  }
`;

export const TextField = styled.input`
  height: 30px;
  width: 70%;
  padding: 10px;
`;
