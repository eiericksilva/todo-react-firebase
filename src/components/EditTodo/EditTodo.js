import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  background-color: #282a3a;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;

  svg {
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }

    &:hover {
      color: #c69749;
    }
  }
`;

export const TextField = styled.input`
  height: 30px;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
