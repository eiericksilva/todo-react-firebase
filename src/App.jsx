import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <TaskItem title="Task One" />
      <TaskItem title="Task Two" />
      <TaskItem title="Task Three" />
    </div>
  );
}

export default App;
