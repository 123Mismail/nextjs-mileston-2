

import React from 'react'
import { FaFacebook ,FaTwitter ,FaInstagram,FaYoutube} from "react-icons/fa";
const FooterSeecton = () => {
  return (
    <div>
        <section className='flex  min-h-[1000px]  min-h-[500px] md:min-h-[30vh] pt-10  flex-col flex-grow md:flex-row lg:flex-row -mt-40  lg:flex-wrap  md:flex-wrap lg:justify-between md:justify-between items-center   lg:mt-6 md:mt-4 lg:min-h-[25vh] bg-gray-500 px-6'>
            <div className='flex flex-col   md:flex-col lg:justify-center lg:items-center pl-3 pt-2'>
                <h3 className='text-xl font-bold  mb-2'>On social Media</h3>
                <ul className=' lg:gap-y-2 md:gap-y-2 text-base font-medium '>
                    <li className='flex justify-center items-center '>Facebook <FaFacebook className='ml-2 text-xl'/></li>
                    <li className='flex justify-center items-center '>Twitter<FaTwitter className='ml-2 text-xl'/></li>
                    <li className='flex justify-center items-center '>Instagram<FaInstagram className='ml-2 text-xl'/></li>
                    <li className='flex justify-center items-center '>Youtube<FaYoutube className='ml-2 text-xl'/></li>
                   
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center pl-3 pt-2'>
                <h3 className='text-xl font-bold mb-2'>Offices</h3>
                <ul className='gap-y-2 text-base font-medium '>
                    <li>Karachi Pakistan</li>
                    <li>New York America</li>
                    <li>Istanbul Turkey</li>
                    <li>London UK</li>
                   
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center pl-3 pt-2'>
                <h3 className='text-xl font-bold mb-2'>Abou Us</h3>
                <ul className='gap-y-2 text-base font-medium '>
                    <li>Webdevelopment </li>
                    <li>Ai Chatboats</li>
                    <li>3D Animations</li>
                    <li>SAAS Provides</li>
                   
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center pl-3 pt-2'>
                <h3 className='text-xl font-bold mb-2'>Contact Us</h3>
                <ul className='gap-y-2 text-base font-medium '>
                    <li>Email</li>
                    <li>Whatsapp</li>
                    <li>Telegram</li>
                    <li>Address</li>
                   
                </ul>
            </div>
            <div className='text-lg font-semibold text-gray-400 self-auto w-full py-3 px-3 flex justify-center items-center space-x-3 mr-2'>
                Copyrights@2024  <FaFacebook/> <FaTwitter/> <FaInstagram/>
            </div>
        </section>
    </div>
  )
}

export default FooterSeecton