import React, { useState } from "react";
import { Container, TextField } from "./UpdateTask";
import Button from "../Button";

const UpdateTask = ({ updateTodo, todo }) => {
  const [value, setValue] = useState(todo.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;

    updateTodo(value, todo.id);

    setValue("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button titleButton="Save" type="submit" />
    </Container>
  );
};

export default UpdateTask;
