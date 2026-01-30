import React from 'react'

const NavBar = () => {
  return (
    <nav className='w-screen h-[60px] bg-zinc-800 text-white flex justify-around items-center p-[20px]'>
        <div className="leftNav cursor-pointer">
            ☰
        </div>
        <div className="logo text-2xl font-bold">
           <span className="logo-img"></span> Motor Mall
        </div>
        <div className="profileNav ">
            <span className="profile-icon bg-white rounded-2xl">👤</span>Profile
        </div>
    </nav>
  )
}

export default NavBar
