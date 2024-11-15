import {useState, useContext} from 'react'
import {HiArrowUpCircle} from 'react-icons/hi2'
import { BlogContext } from '../context/blog';


const UploadImage = () => {
  
  const [selectedFile,setSelectedFile] = useState();
  const { setFile } = useContext(BlogContext)

  


  return (
    <>
      <h2 className='text-center my-5 font-bold'>Add An Image For Your Blog</h2>
    <div className='h-[14em] md:h-[25em] w-[50%] container mx-auto'>
    <div className='bg-[#e9e9e9] rounded-lg py-2 h-[100%] w-[100%]'>
    <label className='m-2 flex flex-col justify-center items-center cursor-pointer h-full 
         border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>
          
          {!selectedFile?
          <div className='flex items-center flex-col'>
           <HiArrowUpCircle className='text-[22px]'/>   
            <h2 className='font-semibold'>Click to Upload</h2>
            </div>
            :null}
            {selectedFile?
            <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            className='object-contain h-[100%] w-full'
            />:null}
            <input id="dropzone-file" type="file"
             className="hidden"
    
             onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0])}} 
             />
        </label>
        </div>
        </div>
        </>
  )
}

export default UploadImage


