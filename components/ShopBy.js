import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const ShopBy = () => {
    return (
        <div className='fixed bottom-0 bg-white w-full py-5 pb-16'>
            <div className='flex justify-evenly'>
                <div className=' flex items-center justify-center flex-col'>
                    <div className='w-16 h-16 rounded-full bg-black flex items-center justify-center ' />          <h2>Black</h2>
                </div>
                <div className=' flex items-center justify-center flex-col'>
                    <div className='w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center ' />          <h2>Blue</h2>
                </div>
                <div className=' flex items-center justify-center flex-col'>
                    <div className='w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center ' />          <h2>Brown</h2>
                </div>
                <div className=' flex items-center justify-center flex-col '>
                    <div className='w-16 h-16 rounded-full bg-white flex border-2 border-black items-center justify-center ' />          <h2>White</h2>
                </div>
                <div className='bg-cyan-500 p-4 flex items-center justify-center flex-col'>
                    <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center '><GiHamburgerMenu className='text-3xl' /></div>          <h2>View</h2>
                </div>
            </div>
        </div>
    )
}

export default ShopBy