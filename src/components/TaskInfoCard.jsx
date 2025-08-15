import React from 'react'
import { CgClose } from 'react-icons/cg'

const TaskInfoCard = ({task, setShowTaskInfoCard}) => {
  return (
    <div className='bg-secondary p-4 rounded-md shadow-md w-screen min-h-screen  absolute top-0 left-0 right-0 mx-auto md:ml-[70px]'>
      <h1>{task.title}</h1>
      <CgClose onClick={() => setShowTaskInfoCard(false)} className='text-primary'/>
    </div>
  )
}

export default TaskInfoCard
