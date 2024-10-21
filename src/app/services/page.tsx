
import React from 'react'
 import Image from "next/image"
const ServicesPage = () => {
  return (
    <div className='flex flex-col mt-36 md:mt-10 md:mb-10 mb-44 mx-4 justify-center items-center '>
       <div className='mx-auto text-center py-10'>
       <h2 className='text-5xl font-bold  py-2'>Our Services </h2>
        <h3 className='text-xl font-medium py-4'>We provide best website all over the world .</h3>
       <p className='text-lg font-medium max-w-4xl text-left'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis saepe tempora reprehenderit quisquam eveniet earum facilis odio aliquid eaque necessitatibus delectus, libero perferendis quos adipisci modi officia exercitationem inventore temporibus.</p>
       </div>
        <div className='flex flex-wrap space-x-4 justify-center  lg:space-x-14'>
            <div  > <Image src={'/service1.svg'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-[300px]'></Image>
            <span className='text-center flex justify-center py-2 md:pt-4  lg:pt-5 mx-auto text-lg font-medium'>web services</span>
             </div>
            <div  > <Image src={'/service3.svg'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-[300px]'></Image>
            <span className='text-center flex justify-center py-2 md:pt-4  lg:pt-5  mx-auto text-lg font-medium'>SAAS services</span>
             </div>
            <div  > <Image src={'/service2.svg'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-[300px]'></Image>
            <span className='text-center flex justify-center py-2 md:pt-4  lg:pt-5 mx-auto text-lg font-medium'>API services</span>
             </div>
            <div  > <Image src={'/service4.svg'} height={300} width={300} alt='services images' className='border border-spacing-1 border-black h-[250px] w-[300px]'></Image>
            <span className='text-center flex justify-center py-2 md:pt-4  lg:pt-5 mx-auto text-lg font-medium'>SEO Services</span>
             </div>
             
        </div>
    </div>
  )
}

export default ServicesPage