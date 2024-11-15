import React from 'react'
import { blog } from '../utils/data'
import img from '../assets/img-1.jpg'
import img1 from '../assets/img-2.jpg'
import { FaPerson } from 'react-icons/fa6'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaHourglass } from 'react-icons/fa'

const Blogs = () => {
  return (
    <section className='flex flex-col md:container sm:flex-col md:flex-row mx-auto select-none'>
        <div className='sm:w-full md:w-3/4'>
    <div className='grid grid-cols-1 cursor-pointer gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 p-6 container mx-auto'>
        {
            blog.map((b, idx) => (
              <div key={idx}className='p-4 border shadow-lg hover:backdrop-blur-sm hover:bg-black/10  w-full h-full'>
              <img src={img1} alt="" className='w-full'/>
            <div className='bg-white text-[#a2a3a4] hover:text-black p-4'>
              <p className='text-[14px]'>{b.about}</p>
              <div className='flex items-center gap-2 my-2'>
                <span><FaPerson /></span>
                <span className='text-[14px]'>My Name</span>
              </div>
              <p>created: 08/11/2024</p>
                {/* <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link>  */}
            </div>
            </div>
            ))
          }
      </div>
      </div>


      <div className='sm:w-full md:w-1/4 container mx-auto flex flex-col gap-2 sm:flex-col'>
        <h2 className='text-center text-2xl my-2 '>Latest Blogs</h2>
        <div className='px-4'>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem dolore quisquam expedita, illum ut.</p> */}
            {
            blog.slice(0,4).map((b, idx) => (
              <div key={idx}className='p-4 shadow-md'>
              {/* <img src={img1} alt="" className='w-full'/> */}
            <div className='bg-white text-[#a2a3a4] hover:text-orange-500 font-medium hover:shadow-lg p-4 cursor-pointer'>
              <p className='text-[14px] tracking-wide'>{b.about}</p>
              <div className='flex items-center gap-2 my-2'>
                <span><FaHourglass /></span>
                <span className='text-[14px]'>My Name</span>
              </div>
              <p>created: 08/11/2024</p>
                {/* <Link to='/blogpage' className='pt-6 text-black hover:text-[#55A747] cursor-pointer'>Read More...</Link>  */}
            </div>
            </div>
            ))
          }
        </div>
      </div>
      </section>
  )
}

export default Blogs