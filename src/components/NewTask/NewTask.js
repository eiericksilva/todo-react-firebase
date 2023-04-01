import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  width: 80%;
  height: 70px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #c69749;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const TextField = styled.input`
  height: 30px;
  width: 70%;
  padding: 10px;
`;
