import React, { useState } from "react";
import { Container, TextField } from "./UpdateTask";
import Button from "../Button";

const UpdateTask = ({ updateTaskItem, task }) => {
  const [value, setValue] = useState(task.task);

  const makeTaskItemObject = (e) => {
    e.preventDefault();
    if (value === "") return;

    updateTaskItem(value, task.id);

    setValue("");
  };
  return (
    <Container onSubmit={makeTaskItemObject}>
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
