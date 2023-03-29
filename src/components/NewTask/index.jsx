import React, { useState } from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";

const NewTask = ({ addTaskItem }) => {
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState(0);

  const createObjectTodo = (taskName) => {
    const objectTodo = { taskName, id };
    if (taskName === "") return;
    setId((prev) => prev + 1);
    addTaskItem(objectTodo);
    setTaskName("");
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
        titleButton="Add Task"
        onClick={() => createObjectTodo(taskName)}
      />
    </Container>
  );
};

export default NewTask;
