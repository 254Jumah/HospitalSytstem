import React, { useState } from 'react'
import  {Link} from 'react-router-dom'; 

export default function Create() {
  const [formData, setFormdata] =useState({})
  const handleChange =(e) =>{
    setFormdata( {
      ...formData,
      [e.target.id] : e.target.value,
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <h1 className='text-3xl text-center font-serif font-semibold my-7 text-blue-900'> CREATE HOSPITAL PROFILE</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username ' className='border p-3 rounded-lg ' id='username' onChange={handleChange} />
         <input type="text" placeholder='email ' className='border p-3 rounded-lg ' id='email'onChange={handleChange} />
         <input type="password" placeholder='password ' className='border p-3 rounded-lg ' id='password'onChange={handleChange}/>
    
      <button  className= 'hover:opacity-75  disabled:opacity-60 bg-slate-900 text-white p-3 rounded-lg uppercase'>Sign-Hospital</button>
      </form>
      <div  className='flex gap-2 mt-5 uppercase font-serif '>
        
        <p>Do Hospital Have account?</p>
      <Link to='/Signin'>
        <span className='text-blue-700 uppercase font-semibold w-full sm:w-1/2 md:w-1/3 lg:w-1/4'> Sign  In</span>

      </Link>
      </div>
    </div>
  )
}
