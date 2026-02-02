import React from 'react'
import logoImg from '../../assets/logo.png'
const NavBar = () => {
  return (
    <nav className='w-screen h-[60px] bg-zinc-800 text-white flex justify-around items-center p-[20px]'>
        <div className="leftNav cursor-pointer">
            ☰
        </div>
        <div className="logo text-2xl font-bold flex items-center gap-3">
           <span className="logo-img w-[50px] p-1 rounded-2xl cursor-pointer bg-orange-500"><img className='max-h-[40px] rounded-2xl justify-self-center' src={logoImg} alt="" /></span> Motor Mall
        </div>
        <div className="profileNav  flex items-center gap-3">
            <span className="profile-icon bg-white rounded-2xl cursor-pointer">👤</span><span className="cartLogo cursor-pointer">🛒</span>
        </div>
    </nav>
  )
}

export default NavBar
