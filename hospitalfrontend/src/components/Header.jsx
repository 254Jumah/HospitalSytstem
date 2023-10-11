import React from 'react'

export default function Header() {
  return (
    <header>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'> 
            <span className='text-slate-500'>Dophil</span>
            <span className='text-slate-800'> Hospital</span>
        </h1>
        <form>
            <input type="text" placeholder='Search..' />
        </form>

    </header>
  )
}
