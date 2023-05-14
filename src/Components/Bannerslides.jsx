import React, { useEffect, useRef } from 'react'
import boy1 from '../assets/boy.png'
const Bannerslides = () => {
    const slider = useRef()
    // useEffect(()=>{
    //     const handleSliderInterval = () => {
    //         const width = slider.current.clientWidth;
    //         slider.current.scrollLeft = slider.current.scrollLeft + width
    //     }
    //     const intervalId = setInterval(handleSliderInterval,1000)
    //     return()=>{clearInterval(intervalId)}
    // },[])
  return (
    <>
    <div ref={slider} className='flex scroll-smooth duration-1000 overflow-hidden'> 
    <div className='min-w-full sm:flex-col relative lg:flex-row md:flex-row lg:h-60 md:h-60 sm:h-full bg-purple-50 rounded-md flex items-center justify-between'>
        <div className='flex items-start flex-col justify-start p-16'>
            <p className='text-3xl font-bold'>Bruno Simmons</p>
            <p className='text-xsm sm:text-center font-light'>Product Designer</p>
        </div>
        <div className='lg:flex md:flex sm:hidden items-center overflow-hidden p-0 sm:p-4 justify-center'>
            <img src={boy1} className='lg:w-80 md:w-80 sm:w-full select-none h-80  object-cover' alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Bannerslides