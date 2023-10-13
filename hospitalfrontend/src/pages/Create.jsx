import React from 'react'
import  {Link} from 'react-router-dom'; 

export default function Create() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-serif font-semibold my-7 text-blue-900'> CREATE HOSPITAL PROFILE</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username ' className='border p-3 rounded-lg ' id='
        username' />
         <input type="text" placeholder='email ' className='border p-3 rounded-lg ' id='email' />
         <input type="password" placeholder='password ' className='border p-3 rounded-lg ' id='password'/>
    
      <button  className= 'hover:opacity-75  disabled:opacity-60 bg-slate-900 text-white p-3 rounded-lg uppercase'>Sign-Hospital</button>
      </form>
      <div  className='flex gap-2 mt-5 uppercase font-serif '>
        <p>Do Hospital Have account?</p>
      <Link to='/Signin'>
        <span className='text-blue-700 uppercase font-semibold'> Sign  In</span>

      </Link>
      </div>
    </div>
  )
}
