import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Error } from "../Login/Login";
import PasswordField from "../../components/PasswordField";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await createUser(email, password);
      navigate("/todoapp");
    } catch (e) {
      switch (e.message) {
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          setError("Senha deve ter no mínimo 6 caracteres");
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          setError("Email ja cadastrado.");
          break;
        default:
          console.log(e);
      }
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
              <PasswordField
                className="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInput>
            {error ? <Error>{error}</Error> : ""}
            <Button type="submit"> Confirmar Cadastro</Button>
          </Form>
        </ColumnTwo>
      </Container>
    </Wrapper>
  );
};

export default Cadastro;
