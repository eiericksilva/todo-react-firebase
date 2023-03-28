import React from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";

const NewTask = () => {
  return (
    <Container>
      <TextField type="text" placeholder="Input your task here" />
      <Button type="add" title="Add Task" />
    </Container>
  );
};

export default NewTask;
