import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex items-center lg:px-16 md:px-12 sm:px-4 md:py-6 lg:py-8 sm:py-4 justify-between'>
    <div>
        <NavLink to="/">
            <span className='font-bold text-md'>Bruno Simmons</span>
        </NavLink>
    </div>
    <div className='flex items-center gap-8'> 
        {/* navlinks */}
        <div className=' gap-4 lg:flex md:flex sm:hidden'>
        <Link to="/"><span className='text-xsm uppercase'>Work</span></Link>
        <Link to="/"><span className='text-xsm uppercase'>Services</span></Link>
        <Link to="/"><span className='text-xsm uppercase'>About</span></Link>
    </div>
    <div><span className='bg-blue-600 cursor-pointer p-2 rounded-full text-xsm uppercase font-medium text-white'>Contact</span></div>
    </div>
    </div>
    </>
  )
}

export default Navbar