import React from 'react'
import logo from '../assets/logo-light.svg'
import { BiSearch } from 'react-icons/bi'
const MobileTopBar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 h-[70px] bg-primary flex md:hidden items-center'>
      <div className='wrapper w-full flex items-center justify-between'>
        <img src={logo} alt="" className='w-[80px]'/>
        <BiSearch className='text-lg cursor-pointer'/>
      </div>
    </div>
  )
}

export default MobileTopBar
