import React from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/todoapp");
  };
  return (
    <div>
      <div>
        <h2>Página de Cadastro</h2>
      </div>
      <div>
        <form onClick={handleSubmit}>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Senha:
            <input type="password" />
          </label>
          <label>
            Confirme sua senha:
            <input type="password" />
          </label>
          <button type="submit"> Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
