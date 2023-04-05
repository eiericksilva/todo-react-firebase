import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  height: 60%;
  width: 60%;
  min-width: 420px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1135px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

export const ColumnOne = styled.div`
  width: 30%;
  min-width: 420px;
  height: 100%;
  padding: 20px;
  background: linear-gradient(180deg, #000, #001e3c);
  border-radius: 20px 0 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1135px) {
    width: 100%;
    border-radius: 0 0 20px 20px;
  }

  h2 {
    color: #fff;
    margin-bottom: 5px;
  }

  p {
    color: #f7d399;
    text-align: center;
    font-weight: 300;
  }

  hr {
    width: 80%;
    border: 1px solid #f7d399;
    margin: 20px 0;
    opacity: 0.2;
  }

  button {
    background-color: white;
    height: 30px;
    width: 120px;
    border-radius: 20px;
    border: 1px solid #c69749;
    background-color: transparent;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: #c69749;
      font-weight: 700;
    }
  }
`;
export const ColumnTwo = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px;

  @media (max-width: 1136px) {
    width: 80%;
  }
`;
export const Form = styled.form`
  color: #001e3c;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Button = styled.button`
  color: #f7d399;
  border-radius: 20px;
  background-color: #001e3c;
  height: 30px;
  min-width: 120px;
  padding: 0 10px;
  border-radius: 20px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: #f7d399;
    color: #001e3c;
  }
`;

export const Input = styled.input`
  color: #001e3c;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;
