import React, { useState } from "react";
import { Container, TextField } from "./EditTodo";
import Button from "../Button";
import { db } from "../../firebase";
import { updateDoc, collection, doc } from "firebase/firestore";

const EditTodo = ({ todo }) => {
  const [editValue, setEditValue] = useState(todo.text);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* atualizar o text do todo específico */
    if (editValue === "") return;

    await updateDoc(doc(db, "todos", todo.id), {
      text: editValue,
      isUpdating: !todo.isUpdating,
    });
  };
  return (
    <Container onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Update task"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <Button titleButton="Save" type="submit" />
    </Container>
  );
};

export default EditTodo;
