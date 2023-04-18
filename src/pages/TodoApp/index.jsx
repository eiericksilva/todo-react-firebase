import {
  collection,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import Header from "../../components/Header";
import CreateTodo from "../../components/CreateTodo";
import { WrapperTasks } from "../../components/Todo/Todo";
import Todo from "../../components/Todo";
import EditTodo from "../../components/EditTodo";
import { UserAuth } from "../../context/AuthContext";

const TodoApp = ({ createTodo }) => {
  const [todos, setTodos] = useState([]);
  const { user, logout } = UserAuth();

  useEffect(() => {
    if (user && user.uid) {
      const q = query(
        collection(db, "todos"),
        orderBy("createdAt", "asc"),
        where("user_uid", "==", user.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todosArr);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleIsCompleted = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  };

  const toggleIsUpdating = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isUpdating: !todo.isUpdating,
    });
  };

  return (
    <div>
      <Header user={user} logout={logout} />
      <CreateTodo createTodo={createTodo} />
      <WrapperTasks>
        {todos.map((todo) =>
          todo.isUpdating ? (
            <EditTodo
              key={todo.id}
              todo={todo}
              toggleIsUpdating={toggleIsUpdating}
            />
          ) : (
            <Todo
              key={uuidv4()}
              todo={todo}
              toggleIsCompleted={toggleIsCompleted}
              toggleIsUpdating={toggleIsUpdating}
              deleteTodo={deleteTodo}
            />
          )
        )}
      </WrapperTasks>
      {todos.length < 1 ? null : (
        <div className="footer">{`You have ${todos.length} todos`}</div>
      )}
    </div>
  );
};

export default TodoApp;
