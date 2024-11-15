import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <section className='bg-gray-900 text-white w-full '>
    {/* <Navbar /> */}
    
    <div className='h-96 bg-cover bg-center container mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-[3em] sm:text-[4em] mt-2'>Welcome To Our Blog</h2>
        <p className='text-center tracking-wider px-4 sm:px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus illo temporibus optio veniam tempore aut, nostrum ratione mollitia consectetur ducimus explicabo, reprehenderit et cumque, placeat dolorum cupiditate ex asperiores?</p>
        <button className='my-4'>Show More...</button>
    </div>
    </section>
    </>
  )
}

export default Hero