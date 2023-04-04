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
} from "./Cadastro";

const Cadastro = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/todoapp");
  };
  return (
    <Wrapper>
      <Container>
        <ColumnOne>
          <Title>Cadastre-se no App!</Title>
          <p>Cadastre para criar seu Todo List</p>
          <hr />
          <p>Já tem cadastro?</p>
          <Button>
            <Link to="/">Faça Login!</Link>
          </Button>
        </ColumnOne>
        <ColumnTwo>
          <Form onSubmit={handleSubmit}>
            <Title>Cadastre-se!</Title>
            <ContainerInput>
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirme sua Senha" />
            </ContainerInput>
            <Button type="submit"> Confirmar Cadastro</Button>
          </Form>
        </ColumnTwo>
      </Container>
    </Wrapper>
  );
};

export default Cadastro;
