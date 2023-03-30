import React, { useState } from "react";

import { ButtonGroup, ContainerTaskItem, TitleTaskItem } from "./TaskItem";

import Button from "../Button";

const TaskItem = ({ task, deleteTaskItem, updateTaskItem, toggleComplete }) => {
  return (
    <div>
      <ContainerTaskItem>
        <TitleTaskItem
          className={`${task.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </TitleTaskItem>
        <ButtonGroup>
          <Button
            titleButton="Edit Task"
            variant="upd"
            onClick={() => updateTaskItem(task.id)}
          />
          <Button
            titleButton="Delete Task"
            variant="del"
            onClick={() => deleteTaskItem(task.id)}
          />
        </ButtonGroup>
      </ContainerTaskItem>
    </div>
  );
};

export default TaskItem;
