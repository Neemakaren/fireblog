import { useState, useEffect, useContext } from 'react'
import UploadImage from '../components/UploadImage';
import { BlogContext } from '../context/blog';
// import UserTag from './UserTag'



const Form = () => {
  const { setTitle, setBlog, setLink, setFile, onSave } = useContext(BlogContext)

  return (
    <section className=' bg-white py-8 px-6 container mx-auto   sm:py-14 rounded-2xl'>
        <div className='flex justify-end mb-6'>
            <button onClick={() => onSave()}
             className='bg-red-500 p-2
            text-white font-semibold px-3 
            rounded-lg'>
            save</button>
        </div>
         <div className='flex justify-end mb-6'>
            {/* <button onClick={()=>onSave()} */}
            {/* <button 
             className='bg-red-500 p-2 text-white font-semibold px-3 rounded-lg'>
              {loading?  <img src={img} 
                width={30} 
                height={30} 
                alt='loading'
                className='animate-spin'  />:
                <span>Save</span>}</button> */}
        </div>
        {/* <div className='grid gap-11 grid-cols-1 lg:grid-cols-2 lg:gap-10'> */}
        <div className='flex flex-col gap-6'>
            {/* <UploadImage setFile={(file) => setFile(file)} handleupload={handleupload} /> */}
           
          
       <div className="col-span-1">
       <div className='w-[100%]'>
        <input 
          type="text" 
          placeholder='Add your title...' 
          className='text-2xl outline-none font-bold w-full
        border-b-[2px] border-gray-400 placeholder-gray-400' 
          onChange={(e) => setTitle(e.target.value)}
        />


        <h2 className='text-[12px] mb-8 w-full text-gray-400'>The first 40 Charaters are what usually show up in feeds</h2>
        {/* <UserTag /> */}
        <textarea 
          type="text" 
          cols="10" 
          rows="10"
          placeholder='Tell everyone what your pin is about' 
          className=' outline-none  w-full mt-8 pb-4 text-[14px]
        border-b-[2px] border-gray-400 placeholder-gray-400 resize-none' 
            onChange={(e) => setBlog(e.target.value)}
        />
          <input type="email"
           placeholder='Add your email' 
          className=' outline-none  w-full  pb-4 mt-[90px]
        border-b-[2px] border-gray-400 placeholder-gray-400' 
        onChange={(e) => setLink(e.target.value)}
        />
    </div>
       </div>
       <UploadImage setFile={(file) => setFile(file)}/>
        </div>
       
    </section>
  )
}

export default Form


