import React from 'react'
import Laptop from '../assets/Laptop.jpg'

const analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt="/" />
        <div className='flex flex-col justify-center '>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2  '>Manage Data Analytics Centrally</h1>
          <p>
             ipsum dolor sit amet consectetur adipisicing ellite.
            voluptatum milestone delectus culpa hic assumenda, voluptate reprehenderit Dolores autem cum ullam sed odit perspiciatis
          </p>
          <bottom className='bg-black text-[#00df9a] w-[200px] rounded-md text-center font-medium my-6 mx-auto md:mx-0 py-3 '> Get Started </bottom>
        </div>
      </div>
    </div>
  )
}

export default analytics