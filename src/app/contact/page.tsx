
import React from 'react'

const ContactPage = () => {
  return (
    <div className='flex mt-44 mb-28 px-6 md:mt-6 text-center justify-center md:max-w-full md:justify-center md:w-full max-w-[100vw] w-full lg:max-w-full h-[100vh] md:h-[92vh] lg:h-[92vh] gap-y-3 '>
        <div className='max-w-[100vw] w-full px-3 '>
        <h2 className='py-10 text-5xl font-bold md:text-center text-center  '>Contact Us</h2>
        <div className='w-full mt-2 '>
          <label htmlFor="#" className='text-lg font-medium text-gray-700 md:text-start'>Name</label><br></br>
          <input type="text"  placeholder='name' className='p-2 outline outline-1 outline-black/80 max-w-[600px] w-full  bg-white '/>
        </div>
        <div className='w-full mt-2'>
          <label htmlFor="#" className='text-lg font-medium text-gray-700'>Email</label><br></br>
          <input type="text"  placeholder='name' className='p-2 outline outline-1 outline-black/80  max-w-[600px] w-full bg-white '/>
        </div>
        <div className='w-full mt-2'>
          <label htmlFor="#" className='text-lg font-medium text-gray-700'>Phone</label><br></br>
          <input type="text"  placeholder='name' className='p-2 outline outline-1 outline-black/80  max-w-[600px] w-full bg-white '/>
        </div>
        <div className='w-full mt-2'>
          <label htmlFor="#" className='text-lg font-medium text-gray-700'> Message</label><br></br>
          <textarea rows={4}  placeholder='write your message here' className='p-2   max-w-[600px] w-full bg-white outline outline-1 outline-black/80 '/>
        </div> 
        <div className='w-full mt-2'>
           <button className='px-4 py-2 bg-cyan-400 text-lx font-medium w-full max-w-[600px]'>Send</button>
        </div>
        </div>
    </div>
  )
}

export default ContactPage