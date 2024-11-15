import {useState, useRef} from 'react'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import Login from './Login';

const Navbar = ({showModal, toggle, setIsAuth, isAuth, signUserOut}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  // const navRef = useRef();

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };
  return (
    <nav className="w-full px-4 md:px-10 mx-auto p-6 z-10 list-none bg-gray-900 select-none">
    
    <div className="flex items-center justify-between">
      
      <div className="pt-2 shadow-2xl shadow-orange-500">
        <h2 className='font-Licorice text-3xl text-orange-500 bg-transparent '>FireBlog</h2>
      </div>
      
    <div className="hidden z-10 text-white space-x-6 px-4 sm:text-[14px] md:text-[17px] md:flex">
        <Link to='/' className="hover:text-orange-500 cursor-pointer">Home</Link>
        <Link to='/create' className="hover:text-orange-500 cursor-pointer">Create</Link>
        <Link to='/blogpage' className="hover:text-orange-500 cursor-pointer">BlogPage</Link>
        <li to='/blogpage' className="hover:text-orange-500 cursor-pointer">Blog</li>
        <li to='/aboutus' className="hover:text-orange-500 cursor-pointer">AboutUs</li>
        <li to='/terms' className="hover:text-orange-500 cursor-pointer">Terms</li>
        <Link to='faq' className="hover:text-orange-500 cursor-pointer">Faq</Link>

        
      {!showModal && <div className='px-6 py-2 flex flex-row  bg-orange-500 text-white text-xs font-bold rounded-sm uppercase  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 text-[17px] border-none'
          onClick={toggle}
        >
          {!isAuth ? <button>Login</button> : <button onClick={signUserOut}>logout</button>}</div>} 
      </div>

      <Login  showModal={showModal} toggle={toggle} setIsAuth={setIsAuth}/>

      
      <button className='flex flex-row items-center fixed right-0 justify-center text-2xl cursor-pointer transition-all duration-0.3 linear md:hidden lg:hidden text-gray-200' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} className='mr-2'/> : <HiMenuAlt3 size={26} className='mr-2'/>}
          </button>
    </div>

    <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex bg-gray-900 " : "hidden"} md:hidden lg:hidden flex-col fixed min-h-full right-0 w-2/4 items-start pl-4 pt-4 transition duration-5 z-10 text-[19px] space-y-6 text-white`}
        >
          <Link to='/' >Home</Link>
          <Link to='/create'>Create</Link>
          <li to='/uploadjob' >UploadJob</li>
          <li to='/blogpage'>Blog</li>
          <li to='/aboutus' >AboutUs</li>
          <li to='/terms'>Terms</li>
          <Link to='/faq'>Faq</Link>
          <button  className='bg-orange-500 px-6 py-1 rounded-sm text-[17px] border-none'>LogIn</button>
        </div>

  </nav>
  )
}

export default Navbar