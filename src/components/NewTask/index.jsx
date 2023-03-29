import React, { useState } from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";

const NewTask = ({ handleTodos }) => {
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState(0);

  const createObjectTodo = (taskName) => {
    const objectTodo = { taskName, id };
    setId((prev) => prev + 1);
    handleTodos(objectTodo);
  };
  return (
    <Container>
      <TextField
        type="text"
        placeholder="Input your task here"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        type="add"
        title="Add Task"
        onClick={() => createObjectTodo(taskName)}
      />
    </Container>
  );
};

export default NewTask;
