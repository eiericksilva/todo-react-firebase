import React from "react";

import {
  ButtonGroup,
  ContainerTaskItem,
  InputCheckTaskItem,
  TitleTaskItem,
} from "./TaskItem";

import Button from "../Button";

const TaskItem = ({ todo, deleteTaskItem }) => {
  return (
    <ContainerTaskItem>
      <InputCheckTaskItem type="checkbox" />
      <TitleTaskItem>{todo.taskName}</TitleTaskItem>
      <ButtonGroup>
        <Button titleButton="Edit Task" type="upd" />
        <Button
          titleButton="Delete Task"
          type="del"
          onClick={() => deleteTaskItem(todo.id)}
        />
      </ButtonGroup>
    </ContainerTaskItem>
  );
};

export default TaskItem;
