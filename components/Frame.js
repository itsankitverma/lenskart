import Image from 'next/image'
import React from 'react'
import vincent from "../assets/vincent-chase.png"
import vincentChaseWideFrame from "../assets/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0533 1.png"
import HeaderOptions from './HeaderOptions'
import SelectedFrame from './SelectedFrame'


const Frame = () => {
    const [selectedFrame, setSelectedFrame] = React.useState([])
    const frames = [
        {
            rating: 4.5,
            image: vincent,
            title: "Vincent Chase",
            description:"Green Transparent Full Rim Round",
            price: 999,
            subPrice: 200,
            frameWidth: 999,
            frameSize: "Medium (135mm)",
            wideImage:vincentChaseWideFrame
        },{
            rating: 4.5,
            image: vincent,
            title: "Inkcent haze",
            description:"Teal Transparent Full Rim Round",
            price: 2299,
            subPrice: 1600,
            frameWidth: 999,
            frameSize: "Small (100mm)",
            wideImage:vincentChaseWideFrame
        },{
            rating: 4.5,
            image: vincent,
            title: "Vincent Chase",
            description:"Yellow Transparent Full Rim Round",
            price: 1499,
            subPrice: 700,
            frameWidth: 999,
            frameSize: "Large (150mm)",
            wideImage:vincentChaseWideFrame
        },{
            rating: 4.5,
            image: vincent,
            title: "Ching Chase",
            description:"White Transparent Full Rim Round",
            price: 4999,
            subPrice: 3200,
            frameWidth: 999,
            frameSize: "Medium (135mm)",
            wideImage:vincentChaseWideFrame
        },{
            rating: 4.5,
            image: vincent,
            title: "Ming Chase",
            description:"Brown Transparent Full Rim Round",
            price: 6999,
            subPrice: 4200,
            frameWidth: 999,
            frameSize: "Medium (135mm)",
            wideImage:vincentChaseWideFrame
        },{
            rating: 4.5,
            image: vincent,
            title: "Fang Rage",
            description:"Blue Transparent Full Rim Round",
            price: 3999,
            subPrice: 2200,
            frameWidth: 999,
            frameSize: "Medium (135mm)",
            wideImage:vincentChaseWideFrame
        }
    ]
    return (
        <div>
            {selectedFrame.length === 0 ? <HeaderOptions /> : ""}
            <div className='pb-48 flex w-full flex-wrap justify-center items-center gap-1 lg:gap-10 bg-white px-5 lg:px-80'>
                {selectedFrame.length === 0 ? <>

                    {frames.map((val, id) => {
                        return (
                            <div className='w-full md:w-56 flex flex-col p-2 gap-10 rounded-lg border-[1px] border-black pb-2' key={id}>
                                <div className='flex justify-between items-center px-2'>
                                    <span className='text-xl bg-cyan-500 py-1 px-3 text-white rounded-lg'><span>{val.rating}</span> <span>★</span></span>
                                    <span className='text-5xl'>♡</span>
                                </div>
                                <div className=' px-7 flex w-full items-center justify-center '>
                                    <Image src={val.image} alt="" />
                                </div>
                                <div className='flex items-start justify-start flex-col gap-3'>
                                    <div className="pl-2">
                                        <h4 className='font-semibold'>{val.title}</h4>
                                        <h4><span className='text-cyan-500 font-bold'>₹{val.price}</span> <span className='line-through'>₹{val.subPrice}</span></h4>
                                        <h4 >Frame width: <span className='font-bold'>{val.frameWidth}mm</span></h4>
                                        <h4>Frame Size: <span className='font-bold'>{val.frameSize
                                        }</span></h4>
                                    </div>
                                    <div className='flex w-full items-center justify-center gap-1'>
                                        <button onClick={() => { setSelectedFrame(val) }} className='px-3 w-1/2 py-2 bg-cyan-500 text-white rounded-full'>Normal</button>
                                        <button className='px-3 w-1/2 py-2 bg-cyan-50 rounded-full'>Try on 3D</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </> : <SelectedFrame selectedFrame={selectedFrame} />}
            </div>
        </div>
    )
}

export default Frame
