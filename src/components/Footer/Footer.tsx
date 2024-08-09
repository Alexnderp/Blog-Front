import { Copyright } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-slate-900 to-slate-700 border-t-[1px] border-lime-400'>
        <ul className='flex justify-evenly p-3 h-[2rem]'>
            <li className='text-lime-400 duration-300 hover:text-lg hover:text-white'>Home</li>
            <li className='text-lime-400 duration-300 hover:text-lg hover:text-white'>Profile</li>
            <li className='text-lime-400 duration-300 hover:text-lg hover:text-white'>Posts</li>
            <li className='text-lime-400 duration-300 hover:text-lg hover:text-white'>Users</li>
            <li className='text-lime-400 duration-300 hover:text-lg hover:text-white'>Category</li>
        </ul>
        <div className='flex items-center justify-center'>
        <Copyright size={34} className='p-1 mb-2 mt-2 text-white'/>
        <p className='text-center mb-2 mt-2 text-white'>2024 Alexander Pereira | Generation Brasil</p>
        </div>
    </footer>
  )
}

export default Footer