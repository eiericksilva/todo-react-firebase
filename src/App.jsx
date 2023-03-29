import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTaskItem = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTaskItem = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <Header />
      <NewTask addTaskItem={addTaskItem} />
      <div className="WrapperTasks">
        {todos.map((todo) => (
          <TaskItem deleteTaskItem={deleteTaskItem} key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
