import Image from 'next/image'
import React from 'react'
import vincent from "../assets/vincent-chase.png"

const index = () => {
    const frames = [
        {
            rating: 4.5,
            image: vincent,
            title: "Vincent Chase",
            price: 999,
            subPrice: 200,
            frameWidth: 999,
            frameSize: "Medium",
        },
        {
            rating: 4.3,
            image: vincent,
            title: "My Chase",
            price: 999,
            subPrice: 2000,
            frameWidth: 999,
            frameSize: "Medium",
        },
        {
            rating: 4.3,
            image: vincent,
            title: "My Vincent",
            price: 999,
            subPrice: 2000,
            frameWidth: 135,
            frameSize: "Medium"
        },
        {
            rating: 4.3,
            image: vincent,
            title: "My Vincent",
            price: 999,
            subPrice: 2000,
            frameWidth: 135,
            frameSize: "Medium"
        },
        {
            rating: 4.3,
            image: vincent,
            title: "Vincent",
            price: 999,
            subPrice: 2000,
            frameWidth: 135,
            frameSize: "Medium"
        },
        {
            rating: 4.3,
            image: vincent,
            title: "My Case",
            price: 999,
            subPrice: 2000,
            frameWidth: 135,
            frameSize: "Medium"
        }
    ]
    return (
        <div className='pb-48 flex w-full flex-wrap justify-center items-center gap-2 bg-white'>
            {frames.map((val, id) => {
                return (
                    <div className='w-48 flex flex-col gap-10 rounded-lg border-[1px] border-black pb-2' key={id}>
                        <div className='flex justify-between items-center px-5'>
                            <span className='text-xl bg-cyan-500 py-1 px-3 text-white rounded-lg'><span>{val.rating}</span> <span>★</span></span>
                            <span className='text-5xl'>♡</span>
                        </div>
                        <div className=' px-7'>
                            <Image src={val.image} alt="" />
                        </div>
                        <div className='flex items-center justify-center flex-col gap-3'>
                            <div>
                                <h4 className='font-semibold'>{val.title}</h4>
                                <h4><span className='text-cyan-500 font-bold'>₹{val.price}</span> <span className='line-through'>₹{val.subPrice}</span></h4>
                                <h4 className='font-bold'>Frame width: {val.frameWidth}mm</h4>
                                <h4>Frame Size: <span className='font-bold'>{val.frameSize
                                }</span></h4>
                            </div>
                            <div className='flex  justify-center gap-5'>
                                <button className='px-3 py-2 bg-cyan-500 text-white rounded-full'>Normal</button>
                                <button>Try on 3D</button>
                            </div>
                        </div>
                    </div>

                )
            })}


        </div>
    )
}

export default index