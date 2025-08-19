import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { PiPlus } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TaskList from "../../components/dashboard/TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/api/v1/task", {
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
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Tasks Management</h1>
        <Link
          to={"add"}
          className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold flex items-center gap-1 hover:opacity-80 transition-all"
        >
          <FaPlus className="" />
          New Task
        </Link>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
