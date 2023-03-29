import React, { useState } from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";

const NewTask = () => {
  const [taskName, setTaskName] = useState("");
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
        onClick={() => console.log(taskName)}
      />
    </Container>
  );
};

export default NewTask;
