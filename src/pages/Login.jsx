import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='bg-secondary p-10 rounded-md'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
