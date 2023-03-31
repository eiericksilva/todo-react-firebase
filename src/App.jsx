import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./components/EditTodo";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App({ createTodo }) {
  const [todos, setTodos] = useState([]);

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

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleIsCompleted = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  };

  /* update todo */

  return (
    <div>
      <Header />
      <NewTask createTodo={createTodo} />
      <div className="WrapperTasks">
        {todos.map((todo) =>
          todo.isUpdating ? (
            <EditTodo key={todo.id} todo={todo} />
          ) : (
            <Todo
              key={uuidv4()}
              todo={todo}
              toggleIsCompleted={toggleIsCompleted}
              deleteTodo={deleteTodo}
            />
          )
        )}
      </div>
      {todos.length < 1 ? null : (
        <div className="footer">{`You have ${todos.length} todos`}</div>
      )}
    </div>
  );
}

export default App;
