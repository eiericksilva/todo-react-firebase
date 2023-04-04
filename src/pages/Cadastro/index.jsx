import React from "react";

const Cadastro = () => {
  return (
    <div>
      <div>
        <h2>Página de Cadastro</h2>
      </div>
      <div>
        <form>
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
