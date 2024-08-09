import React from 'react'

function Header() {
  return (
    <header className='bg-gradient-to-r from-slate-900 to-slate-700 h-[12vh] border-b-2 border-lime-500 flex items-center'>
      <div className='flex '>
        <img src="https://i.ibb.co/9hBTMDR/Captura-de-tela-2024-08-08-163750-removebg-preview.png" alt="" className='w-[10rem] ml-5 p-2'/>
        <button className='h-[9.2vh] w-[6vw] absolute right-4 rounded-lg text-center text-lime-500 text-[1.4em] font-Gilroy-Black border-2 border-lime-500 duration-300 hover:border-white hover:text-white'>Login</button>
        </div>
    </header>
  )
}

export default Header