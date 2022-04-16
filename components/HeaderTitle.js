import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';

const HeaderTitle = () => {
  return (

      <div className='w-full flex justify-evenly py-5 items-center bg-slate-800 text-white'>
        <IoMdArrowRoundBack className='text-3xl' />
        <h2>Vincent Chase Round</h2>
        <div className='flex gap-3'>
          <AiOutlineSearch className='text-3xl' />
          <BsHeart className='text-3xl' />
          <AiOutlineShoppingCart className='text-3xl' />
        </div>
      </div>


  )
}

export default HeaderTitle