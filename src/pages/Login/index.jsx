import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./Login";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/todoapp");
  };
  return (
    <Container>
      <div>
        <div>
          <h2>Página de Login</h2>
          <h4>Entre com sua conta</h4>
          <p>
            Ainda não é cadastrado? <Link to="/cadastro">Cadastre-se!</Link>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" />
            </label>
            <label>
              Senha:
              <input type="password" />
            </label>
            <button type="submit"> Entrar</button>
          </form>
        </div>
      </div>
      <div>
        <h4>Imagem</h4>
      </div>
    </Container>
  );
};

export default Login;
