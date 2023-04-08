import React, { useState } from "react";

import { ButtonGroup, ContainerTodo, TitleTodo } from "./Todo";
import { FiEdit } from "react-icons/fi";
import { VscTrash } from "react-icons/vsc";

import Button from "../Button";

const Todo = ({ todo, deleteTodo, toggleIsCompleted, toggleIsUpdating }) => {
  return (
    <div>
      <ContainerTodo>
        <TitleTodo
          className={`${todo.isCompleted ? "classTextIsCompleted" : ""}`}
          onClick={() => toggleIsCompleted(todo)}
        >
          {todo.text}
        </TitleTodo>

        <ButtonGroup>
          <FiEdit size={25} onClick={() => toggleIsUpdating(todo)} />
          <Button
            titleButton="Edit Task"
            variant="upd"
            onClick={() => toggleIsUpdating(todo)}
          />
          <VscTrash size={25} onClick={() => deleteTodo(todo.id)} />
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
