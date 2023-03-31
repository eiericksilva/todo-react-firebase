import React, { useState } from "react";
import { Container, TextField } from "./NewTask";
import Button from "../Button";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const NewTask = () => {
  const [value, setValue] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();

    if (value === "") return;

    await addDoc(collection(db, "todos"), {
      text: value,
      isCompleted: false,
      isUpdating: false,
    });
    setValue("");
  };

  return (
    <Container onSubmit={createTodo}>
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
