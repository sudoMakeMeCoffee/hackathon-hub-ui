import React from 'react'

const TaskInfoCard = ({task}) => {
  return (
    <div className='bg-secondary p-4 rounded-md shadow-md w-full max-w-md absolute top-0 left-0 right-0 mx-auto'>
      <h1>{task.title}</h1>
    </div>
  )
}

export default TaskInfoCard
