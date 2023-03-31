import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import UpdateTask from "./components/UpdateTask";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);

  //create todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), isUpdating: false, isCompleted: false, todo: todo },
    ]);
  };

  //Read todo from Firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
  }, []);

  //Update
  const updateTodo = (id) => {
    const filteredTodos = todos.map((todo) =>
      //conceito de imutabilidade: mantem todas as propriedades do objeto e altera só o necessário
      todo.id === id ? { ...todo, isUpdating: !todo.isUpdating } : todo
    );
    setTodos(filteredTodos);
  };

  const editTask = (todo, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo, isUpdating: !todo.isUpdating } : todo
      )
    );
  };

  //Delete todo from Firebase
  const deleteTodo = (id) => {
    //filteredTodos conterá todos os todos exceto o que será clicado
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  /* Sei lá */
  const toggleComplete = (id) => {
    const filteredTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(filteredTodos);
  };
  return (
    <div>
      <Header />
      <NewTask addTodo={addTodo} />
      <div className="WrapperTasks">
        {todos.map((todo) =>
          todo.isUpdating ? (
            <UpdateTask key={todo.id} updateTodo={editTask} todo={todo} />
          ) : (
            <Todo
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              key={uuidv4()}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
