import React from 'react'
import Image from 'next/image'
import Options from './Options'

const SelectedFrame = ({ selectedFrame }) => {
    console.log(selectedFrame)
    return (
        <div className='px-10 w-full grid gap-5'>
            <div className='w-full grid gap-7'>
                <Image src={selectedFrame.wideImage.src} alt="" width={selectedFrame.wideImage.width} height={selectedFrame.wideImage.height} />
                <div className='flex w-full items-center justify-center gap-1'>
                    <button className='px-3 w-1/2 py-2 bg-cyan-500 text-white rounded-full'>Normal</button>
                    <button className='px-3 w-1/2 py-2 bg-cyan-50 rounded-full'>Try on 3D</button>
                </div>
                <Options />
                <div className='flex flex-col gap-5'>
                    <div>
                        <p className='font-bold text-lg '>{selectedFrame.title}</p>
                        <p className='font-bold text-lg'>{selectedFrame.description}</p>
                        <p className='text-lg'>Frame Size: <span className='font-bold'>{selectedFrame.frameSize}</span></p>
                        <p className='text-lg'>Frame Width:  <span className='font-bold'>{selectedFrame.frameWidth}mm</span></p>
                        <h4><span className='text-cyan-500 font-bold'>₹{999}</span> <span className='line-through'>₹{1900}</span></h4>
                    </div>
                    <div className='grid gap-5'>
                       <div>
                        <span className='bg-cyan-500 py-1 px-3 text-white rounded-lg'><span>{selectedFrame.rating}</span> <span>★</span></span>
                            <span className=''>(3002)</span>
                       </div>
                        <div>
                            🔥1000 bought
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-6'>
                <Image src={selectedFrame.image.src} alt="" width={selectedFrame.image.width} height={selectedFrame.image.height} />
                <div className='grid  gap-5'>
                    <h2 className='font-bold text-lg'>Not Sure about your Frame Size?</h2>
                    <button className='px-3 w-full py-2 bg-cyan-500 text-white rounded-full'>Normal</button>

                </div>
                </div>
                <div className='flex flex-col gap-2'>
                <button className='px-3 py-4 bg-gray-500 text-white rounded-full '>BUY ON CALL</button>
                <button className='px-3 py-4 bg-green-500 text-white rounded-full'>BUY ON CHAT</button>
                <button className='px-3 py-4 bg-teal-500 text-white rounded-full'>HOME TRAIL</button>
                </div>


            </div>
            <button className='px-3 py-4 bg-cyan-500 text-white rounded-full w-full '>ADD TO CART</button>

        </div>
    )
}


export default SelectedFrame