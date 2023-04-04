import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log("erro", e.message);
    }
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
              <Input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {/*  <Input type="password" placeholder="Confirme sua Senha" /> */}
            </ContainerInput>
            <Button type="submit"> Confirmar Cadastro</Button>
          </Form>
        </ColumnTwo>
      </Container>
    </Wrapper>
  );
};

export default Cadastro;
