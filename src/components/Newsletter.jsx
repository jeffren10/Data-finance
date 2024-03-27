import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 '>
          <h1 className='md:text-3xl sm:text-2xl text-2xl font-bold mt-[-2rem] py-2'>what tips & tricks to optimize your flow?</h1>
          <p>sign up newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='enter email'></input>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  ml-3 p-3'>Notify Me</button>        
          </div>
          <p className='mt-3'>We care about the protection of your data. Read our <span className='text-[#00df9a]'> privacy policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter