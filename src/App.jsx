import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Faq from './pages/Faq'
import Navbar from './components/Navbar'
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  // const [title, setTitle] = useState('');
  // const [blog, setBlog] = useState();
  // const [link, setLink] = useState();
  // const [file, setFile] = useState();

  
  const toggle = () => {
    setshowModal(!showModal);
  };


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  

  return (
    <BrowserRouter>
    <Navbar showModal={showModal} toggle={toggle} setIsAuth={setIsAuth} isAuth={isAuth} signUserOut={signUserOut} />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/blogpage' element={<BlogPage />} />
      <Route path='/create' element={<Create />} />
      <Route path='/faq' element={<Faq />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
