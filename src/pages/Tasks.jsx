import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div className="flex  flex-col md:flex-row w-full gap-4 p-4 md:p-0">
      <TaskList />
      <AddTaskForm />
    </div>
  );
};

export default Tasks;
