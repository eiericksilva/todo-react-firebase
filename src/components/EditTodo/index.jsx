import React, { useState } from "react";
import { Container, TextField } from "./EditTodo";
import Button from "../Button";

const EditTodo = ({ todo }) => {
  const [value, setValue] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("oi");
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

export default EditTodo;
