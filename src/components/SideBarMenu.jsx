import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaWheelchair } from 'react-icons/fa6'
import { HiHomeModern } from 'react-icons/hi2'
import { MdOutlineExplore, MdOutlineLeaderboard } from 'react-icons/md'
import { VscOrganization } from 'react-icons/vsc'

const SideBarMenu = () => {
  return (
    <div className='border-r-2 border-white p-5 flex flex-col justify-between pr-8'>

        <h1>Hackathon Hub</h1>

        <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <MdOutlineExplore className='text-2xl'/>
                <span className='text-md'>Explore</span>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <VscOrganization className='text-2xl'/>
                <span className='text-md'>Become a member</span>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <MdOutlineLeaderboard className='text-2xl'/>
                <span className='text-md'>Leaderboard</span>
            </div>

            <div className='flex items-center gap-2 cursor-pointer'>
                <BiHome className='text-2xl'/>
                <span className='text-md'>Home</span>
            </div>
        </div>

        <div>
            <FaWheelchair/>
        </div>
      
    </div>
  )
}

export default SideBarMenu
