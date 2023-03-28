import React from "react";

import {
  ButtonGroup,
  ContainerTaskItem,
  InputCheckTaskItem,
  TitleTaskItem,
} from "./TaskItem";

import Button from "../Button";

const TaskItem = ({ title }) => {
  return (
    <ContainerTaskItem>
      <InputCheckTaskItem type="checkbox" />
      <TitleTaskItem>{title}</TitleTaskItem>
      <ButtonGroup>
        <Button title="Edit Task" type="upd" />
        <Button title="Delete Task" type="del" />
      </ButtonGroup>
    </ContainerTaskItem>
  );
};

export default TaskItem;
