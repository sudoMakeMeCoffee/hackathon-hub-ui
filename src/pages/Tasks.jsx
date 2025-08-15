import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div>
        <TaskList/>
      <AddTaskForm />
    </div>
  );
};

export default Tasks;
