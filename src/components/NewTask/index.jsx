import React, { useState } from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";

const NewTask = ({ addTaskItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    addTaskItem(value);

    setValue("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Input your task here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="add" titleButton="Add Task" type="submit" />
    </Container>
  );
};

export default NewTask;
