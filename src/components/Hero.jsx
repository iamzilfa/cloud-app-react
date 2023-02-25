import React from 'react'
// import { IoIosCloudUpload } from "react-icons/io";
// import { FaDatabase } from "react-icons/fa";
// import { HiPaperAirplane, HiServer } from "react-icons/hi";

import bgImg from "../assets/cyber-bg.png"


const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[77.5rem] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our tech brand</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
<div>
    <img className='w-full' src={bgImg} alt="bigImg" />
</div>
        </div>

    </div>
  )
}

export default Hero