import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <div className="WrapperTasks">
        <TaskItem title="Task One" />
      </div>
    </div>
  );
}

export default App;
