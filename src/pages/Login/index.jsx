import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ColumnOne,
  ColumnTwo,
  Container,
  ContainerInput,
  Form,
  Input,
  Title,
  Wrapper,
} from "./Login";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/todoapp");
  };
  return (
    <Wrapper>
      <Container>
        <ColumnOne>
          <Title>Ei, bem vindo(a) de volta!</Title>
          <p>Faça login com seus dados cadastrados anteriormente</p>
          <hr />
          <p>Ainda não é cadastrado?</p>
          <Button>
            <Link to="/cadastro">Cadastre-se!</Link>
          </Button>
        </ColumnOne>
        <ColumnTwo>
          <Form onSubmit={handleSubmit}>
            <Title>Login</Title>
            <ContainerInput>
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
            </ContainerInput>
            <Button type="submit"> Entrar</Button>
          </Form>
        </ColumnTwo>
      </Container>
    </Wrapper>
  );
};

export default Login;
