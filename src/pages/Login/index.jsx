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
} from "./Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/todoapp");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
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
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInput>
            <Button type="submit"> Entrar</Button>
          </Form>
        </ColumnTwo>
      </Container>
    </Wrapper>
  );
};

export default Login;
