import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to= '/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>EMMAT </span>
            <span className='text-green-700'> SOLUTIONS</span>
                    </h1>
         </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Find...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-700' />
        </form>
        <ul className='flex gap-2 cursor-pointer hover:cursor-pointer  text-slate-700'>
          <Link to= '/'>
          <li className='hidden sm:inline hover:underline hover:text-blue-500'>Home</li>
          </Link>
          <Link to= '/About'>
          <li className='hidden sm:inline  hover:underline'>About</li>
          </Link>
          <Link to= '/Create'>
          <li className='hover:underline hover:text-blue-500'>Create Account</li>
          </Link>
                  < Link to='/Signin'>
          <li className='hover:underline'>Sign-In</li>
          </Link>
          < Link to='/doc'>
          <li className=' hidden sm:inline hover:underline'>Documentatiom</li>
          </Link>


        </ul>
        </div> 
       

    </header>  
  )
}
