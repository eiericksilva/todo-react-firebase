import React, { useState } from "react";

import {
  ButtonGroup,
  ContainerTaskItem,
  InputCheckTaskItem,
  TitleTaskItem,
} from "./TaskItem";

import Button from "../Button";
import TaskItemUpdateDialog from "../TaskItemUpdateDialog";

const TaskItem = ({ todo, deleteTaskItem }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div>
      <TaskItemUpdateDialog
        todo={todo}
        open={openDialog}
        handleDialog={handleDialog}
      />
      <ContainerTaskItem>
        <InputCheckTaskItem type="checkbox" />
        <TitleTaskItem>{todo.taskName}</TitleTaskItem>
        <ButtonGroup>
          <Button titleButton="Edit Task" type="upd" onClick={handleDialog} />
          <Button
            titleButton="Delete Task"
            type="del"
            onClick={() => deleteTaskItem(todo.id)}
          />
        </ButtonGroup>
      </ContainerTaskItem>
    </div>
  );
};

export default TaskItem;
