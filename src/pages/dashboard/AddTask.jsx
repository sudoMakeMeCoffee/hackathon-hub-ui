import React from 'react'
import AddTaskForm from '../../components/AddTaskForm'

const AddTask = () => {
  return (
    <div className="w-full min-h-screen wrapper">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Create New Task</h1>
        {/* <button className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold flex items-center gap-1 hover:opacity-80 transition-all">
          <FaPlus className="" />
          Add User
        </button> */}
      </div>

      <AddTaskForm/>

    </div>
  )
}

export default AddTask
