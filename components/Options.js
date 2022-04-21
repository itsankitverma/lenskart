import React from 'react'
import { IoGlasses } from 'react-icons/io5';
import { BsFillGridFill } from 'react-icons/bs';
import { BiCube } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';


const Options = () => {
  return (
    <div className=' flex justify-evenly gap-3 py-3'>
      <div className='gap-2 flex items-center justify-center flex-col'>
        <div className='w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center '>
          <IoGlasses className='text-white text-3xl' />
        </div>
        <h2>Similar</h2>
      </div>
      <div className='gap-2 flex items-center justify-center flex-col'>
        <div className='w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center '>
          <BiCube className='text-white text-3xl' />
        </div>
        <h2>Recent</h2>
      </div>
      <div className='gap-2 flex items-center justify-center flex-col'>
        <div className='w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center '>
          <FaFilter className='text-white text-3xl' />
        </div>
        <h2>3-Color</h2>
      </div>
      <div className='gap-2 flex items-center justify-center flex-col'>
        <div className='w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center '>
          <BsFillGridFill className='text-white text-3xl' />
        </div>
        <h2>Share</h2>
      </div>
    </div>
  )
}

export default Options