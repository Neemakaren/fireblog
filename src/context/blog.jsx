import { createContext, useState, useEffect } from 'react'
import { storage } from '../firebase-config';
import { ref } from 'firebase/database';
import { uploadBytes } from 'firebase/storage';


export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState();
    const [link, setLink] = useState();
    const [file, setFile] = useState();
 

    const onSave = () => {
        console.log(title, blog, file)
        uploadFile()
     }

     const uploadFile = () => {
        const storageRef = ref(storage, 'blogImg/'+ file.name)
        uploadBytes(storageRef,file).then((snapshot) => {
            console.log('file uploaded')
        })
     }
  

  
  return (
    <BlogContext.Provider
      value={{
        setTitle,
        setBlog,
        setLink,
        setFile,
        onSave
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};