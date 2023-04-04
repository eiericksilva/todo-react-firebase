import React, { useState } from "react";
import { Container, TextField } from "./CreateTodo";
import Button from "../Button";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AiFillPlusSquare } from "react-icons/ai";
import moment from "moment/moment";
import { UserAuth } from "../../context/AuthContext";

const CreateTodo = () => {
  const { user } = UserAuth();
  const [value, setValue] = useState("");
  const date = moment().format();

  const createTodo = async (e) => {
    e.preventDefault();

    if (value === "") return;

    await addDoc(collection(db, "todos"), {
      text: value,
      isCompleted: false,
      isUpdating: false,
      createdAt: date,
      user_uid: user.uid,
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
      <AiFillPlusSquare onClick={createTodo} size={30} />
      <Button variant="add" titleButton="Add Task" type="submit" />
    </Container>
  );
};

export default CreateTodo;
