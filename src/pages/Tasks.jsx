import React, { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import TaskInfoCard from "../components/TaskInfoCard";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState({});
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/task", {
          withCredentials: true,
        });
        setTasks(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);
  return (
    <div className="flex flex-col  w-full gap-4 p-4 md:p-0">
      <TaskList tasks={tasks} setShowAddTaskForm={setShowAddTaskForm} />
      {showAddTaskForm && (
        <div className="fixed inset-0 bg-secondary flex items-center justify-center z-40">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto p-4">
            <AddTaskForm setShowAddTaskForm={setShowAddTaskForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
