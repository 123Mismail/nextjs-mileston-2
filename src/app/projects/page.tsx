

import React from 'react'
 import Image from "next/image"
const ProjectsPage = () => {
  return (
    <div className='mt-44 mb-48 px-2 flex flex-col justify-center items-center '>
       <div className='mx-auto text-center py-10'>
       <h2 className='text-5xl font-bold  py-2'>Our Projects </h2>
        <h3 className='text-xl font-medium py-4 text-center'>We have build amazing and scalabel projects few of them are follow .</h3>
 
       </div>
        <div className='flex flex-wrap justify-center lg:space-x-14 md:space-x-10'>
            <div  > <Image src={'/project3.avif'} height={500} width={500} alt='services images' className='border border-spacing-1 border-black h-[250px] w-full md:w-[300px] lg:w-[300px] object-cover object-right hover:scale-105 duration-300'></Image>
            <span className='text-center flex justify-center py-2 md:pt-3 lg:pt-5 mx-auto text-lg font-medium'>E-commerce website  <button className='ml-2 text-gray-600 px-2 py-1 bg-gray-200'>View Project</button></span> 
           
             </div>
            <div  > <Image src={'/project3.avif'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-full md:w-[300px] lg:w-[300px] object-cover object-right hover:scale-105 duration-300'></Image>
            <span className='text-center flex justify-center pt-5 mx-auto text-lg font-medium'>Block chain platorm<button className='ml-2 text-gray-600 px-2 py-1 bg-gray-200'>View Project</button></span>
             </div>
            <div  > <Image src={'/project3.avif'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-full md:w-[300px] lg:w-[300px] object-cover object-right hover:scale-105 duration-300'></Image>
            <span className='text-center flex justify-center pt-5 mx-auto text-lg font-medium'>3D website<button className='ml-2 text-gray-600 px-2 py-1 bg-gray-200'>View Project</button></span>
             </div>
            <div  > <Image src={'/project4.avif'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-full md:w-[300px] lg:w-[300px] object-cover hover:scale-105 duration-300 '></Image>
            <span className='text-center flex justify-center pt-5 mx-auto text-lg font-medium'>AI Agent<button className='ml-2 text-gray-600 px-2 py-1 bg-gray-200'>View Project</button></span>
             </div>
             
        </div>
    </div>
  )
}

export default ProjectsPage