import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";
import { v4 as uuidv4 } from "uuid";
import UpdateTask from "./components/UpdateTask";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTaskItem = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), isUpdating: false, completed: false, task: todo },
    ]);
  };

  const deleteTaskItem = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTaskItem = (id) => {
    const filteredTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isUpdating: !todo.isUpdating } : todo
    );
    setTodos(filteredTodos);
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isUpdating: !todo.isUpdating } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    const filteredTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(filteredTodos);
  };
  return (
    <div>
      <Header />
      <NewTask addTaskItem={addTaskItem} />
      <div className="WrapperTasks">
        {todos.map((todo) =>
          todo.isUpdating ? (
            <UpdateTask key={todo.id} updateTaskItem={editTask} task={todo} />
          ) : (
            <TaskItem
              deleteTaskItem={deleteTaskItem}
              updateTaskItem={updateTaskItem}
              key={uuidv4()}
              task={todo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
