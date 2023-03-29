import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <Header />
      <NewTask handleTodos={handleTodos} />
      <div className="WrapperTasks">
        {todos.map((todo) => (
          <TaskItem key={todo.id} title={todo.taskName} />
        ))}
      </div>
    </div>
  );
}

export default App;
