// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKvsF_Iv69_fF21ZLlUZTiG1PAbxYOPIU",
  authDomain: "fireblog-ab8c4.firebaseapp.com",
  projectId: "fireblog-ab8c4",
  storageBucket: "fireblog-ab8c4.firebasestorage.app",
  messagingSenderId: "1095639420882",
  appId: "1:1095639420882:web:41ea44fae894132c09420b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const textDB =  getFirestore(app)
export const storage = getStorage(app)