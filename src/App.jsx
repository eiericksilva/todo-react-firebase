import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/todoapp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
