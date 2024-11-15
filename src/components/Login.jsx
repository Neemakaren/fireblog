import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from "firebase/auth"
import { FaGoogle } from 'react-icons/fa';


const Login = ({showModal, toggle, setIsAuth}) => {
    let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    showModal && (
       ( <section className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative '>
            <div className='flex justify-between'>
            <h2 className='text-2xl text-black'>login</h2>
            <button
            className="bg-gray-800 px-4 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle} 
          >
            Close
          </button>

            </div>

          <div className='flex flex-col items-center justify-center my-10'>
          <p>Sign In With Google to Continue</p>
      <button className="border border-black my-4 px-6 py-2 hover:bg-black hover:text-white font-bold flex items-center justify-center gap-2" onClick={signInWithGoogle}> 
        <FaGoogle className='text-orange-600 text-[18px]' />
        Sign in with Google</button>
          </div>   
        </div>
        </section>)

    )
  )
}

export default Login