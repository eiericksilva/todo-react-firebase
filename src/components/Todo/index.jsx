import React, { useState } from "react";

import { ButtonGroup, ContainerTodo, TitleTodo } from "./Todo";

import Button from "../Button";

const Todo = ({ todo, deleteTodo, toggleIsCompleted }) => {
  return (
    <div>
      <ContainerTodo>
        <TitleTodo
          className={`${todo.isCompleted ? "isCompleted" : ""}`}
          onClick={() => toggleIsCompleted(todo)}
        >
          {todo.text}
        </TitleTodo>
        <ButtonGroup>
          <Button titleButton="Edit Task" variant="upd" />
          <Button
            titleButton="Delete Task"
            variant="del"
            onClick={() => deleteTodo(todo.id)}
          />
        </ButtonGroup>
      </ContainerTodo>
    </div>
  );
};

export default Todo;
