import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' bg-[#333333] text-[#7e7b7b] grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:pt-8 sm:pb-8'>
        <div className='flex flex-col mx-4 my-6 w-80  sm:pl-10 '>
            <h4 className='mb-2 text-orange-500 text-2xl font-Licorice'>FireBlog</h4>
            <p className='mb-4'>Subscribe to career Pacific 
                newsletter to get the latest 
                jobs posted, candidates ,and 
                other latest news stay updated.</p>
                <input type="email" placeholder='Enter Your Email address' className='rounded-full p-4 text-gray-100 bg-[#333333] border border-orange-500 w-60 outline-none' />
        </div>
        <div className='flex flex-col mx-4 my-6 cursor-pointer'>
            <h4 className='pb-4 text-white'>FREQUENTLY ASKED QUESTIONS</h4>
            <div className='flex'>
            <ul className='mr-8 pb-4 space-y-2'>
                <li className=''>privacy and security</li>
                <li className=''>communications</li>
                <li className=''>lending licences</li>
                <li className=''>support</li>
                <li className=''>contact us</li>
            </ul>
            <ul>
                <li className=''>Terms of service</li>
                <li className=''>Referals</li>
                <li className=''>disclaimers</li>
                <li className=''>how it works</li>
                <li className=''>underwrittig</li>
            </ul>

            </div>
        </div>
        <div className='flex flex-col mx-4 my-4 cursor-pointer space-y-2 '>
            <h4 className='text-white hover:underline hover:text-orange-500'>Contact Us</h4>
            <span className='hover:underline hover:text-white'>Schönhaus er Allee 167c 10435 Berlin Newland,</span>
            <span className='hover:underline hover:text-white'>Germany1435345435</span>
            <span className='hover:underline hover:text-white'>info@jobcareer.com</span>
        <div className='flex g w-80 pt-4 md:'>
          <FaFacebook className='mr-8 hover:text-orange-500'/>
          <FaInstagram className='mr-8 hover:text-orange-500'/>
          <FaTwitter className='mr-8 hover:text-orange-500'/>
          <FaYoutube className='mr-8 hover:text-orange-500'/>
        </div>
        </div>
    </footer>
  )
}

export default Footer