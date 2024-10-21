
import React from 'react'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <div>
      <div className=' mt-44 md:mt-10 md:mb-10 lg:px-4 px-2 lg:flex flex-grow mb-36 justify-center items-center max-w-[100%] w-full min-h-[92vh] h-full '>
        {/* left  */}
        <div className='flex-1 flex justify-center items-center'>
          <div className='mx-auto max-w-3xl text-center' > <h2 className='text-6xl font-bold py-3'>About Us</h2>
          <h3 className='max-w-3xl text-2xl font-semibold py-3'>We offers worlds best web services </h3>
          <p className='max-w-2xl text-center lg:text-left text-xl font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium dolore voluptate, perferendis incidunt optio delectus officia repellat minus doloribus unde iste ipsam, itaque amet repellendus voluptates vel nostrum ipsum.</p>
          
           </div>
         
        </div>
        {/* right */}
        <div className='flex-1 py-4 mb-7 flex justify-center'>
          <Image src={'/about.svg'} height={500} width={500} alt='technology image' className=' py-10'></Image>
        </div>
      </div>
    </div>
  )
}

export default AboutPage