import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-200 items-center'>
       {/*  desktop navbar*/}
       <h2 className='text-3xl font-bold text-green-500 ml-3'> Lo<span className='text-red-500'>GO</span></h2>
        <nav className='lg:flex justify-end px-10 py-3  hidden lg:block md:block' >
            <ul className='flex justify-center items-center space-x-10 text-lg font-medium'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
        </nav>
        {/* mobile navbar */}
         <nav className='flex justify-end px-10 py-3 bg-gray-white w-full block md:hidden lg:hidden relative border  border-gray-200 ' >
            <ul className='flex flex-col justify-center items-center gap-y-2  text-lg  font-medium absolute bg-white border-spacing-1 border-black w-[100vw] top-0 right-0'>
            <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
        </nav> 
    </div>
  )
}

export default Header