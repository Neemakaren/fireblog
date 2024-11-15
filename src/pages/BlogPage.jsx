import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaHourglass } from 'react-icons/fa'
import { blog } from '../utils/data'
import img1 from '../assets/img-1.jpg'

const Blogpage = () => {
  return (
    <>
    <header
    className="w-full h-20 bg-cover bg-center flex justify-center items-center rounded-2xl">
    <div className="flex flex-col justify-center relative items-center backdrop-blur-md bg-black/60 w-full h-full">
      <h1 className='text-2xl text-white'>AN OVERWORKED NEWSPAPER EDITOR</h1>
    </div>
</header>
    <section className="w-full h-96 bg-cover bg-center flex justify-center items-center rounded-2xl mt-3 blog my-0 mx-auto"></section>

 <div className='px-6 mx-auto flex items-center text-[#757575] font-bold text-1.5xl space-x-8 my-6 container'>
  <span>Job Career Admin,</span>
  <span>Education,</span>
  <span>Jobs,</span>
  <span>Learn,</span>
 </div>
 <div className='flex flex-col sm:flex-col md:flex-row container mx-auto'>
<section className='my-0 mx-auto text-[#757575] leading-7 px-4 sm:w-full md:w-3/4'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <h4 className='text-2xl font-bold text-black'>SIMPLE ANSWER IS, BECAUSE OTHER CANDIDATES WON’T.</h4>
    <div className='border-l-8 border-orange-500 italic mt-4'>
    <p className='p-8'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos."</p>

    </div>
    <div className='space-y-4'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quo tempora aspernatur et officia esse culpa asperiores, voluptas assumenda sint, repellendus odio, maiores perspiciatis! Itaque quod corrupti rerum libero, ea aut mollitia. Fugiat impedit eveniet sapiente illum vitae? Facere quod veritatis saepe hic delectus minima doloribus commodi sapiente, molestiae, veniam id voluptas! Sapiente amet harum minima veniam autem, obcaecati reiciendis alias enim illum eligendi soluta nesciunt provident aliquam eveniet. Libero iste praesentium non placeat excepturi illum, quia in ducimus eos.</p>
    </div>


<div className=' gap-2 flex  items-start flex-row sm:justify-start mx-auto my-8 px-4 lg:px-[10em]'> 
            <h6 className='pr-6 '>Share This:</h6>
            <FaFacebook className='mr-8 text-2xl hover:text-orange-500'/>
          <FaInstagram className='mr-8 text-2xl hover:text-orange-500'/>
          <FaTwitter className='mr-8 text-2xl hover:text-orange-500'/>
          <FaYoutube className='mr-8 text-2xl hover:text-orange-500'/>
        </div>
</section>



        
      <div className='sm:w-full md:w-1/4 container mx-auto flex flex-col  sm:flex-col'>
        <h2 className='text-center text-2xl my-2'>Latest Blogs</h2>
        <div className='px-4'>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem dolore quisquam expedita, illum ut.</p> */}
            {
            blog.slice(0,4).map((b, idx) => (
              <div key={idx}className='p-4 round-small border hover:border-black shadow-sm'>
              {/* <img src={img1} alt="" className='w-full'/> */}
            <div className='bg-white text-[#a2a3a4] hover:text-black p-4 cursor-pointer'>
              <p className='text-[14px]'>{b.about}</p>
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
      </div>
    </>
  )
}

export default Blogpage