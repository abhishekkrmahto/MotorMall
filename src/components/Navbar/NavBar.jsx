import React from 'react'
import logoImg from '../../assets/logo.png'
import '../Navbar/Navbar.css'

const NavBar = () => {
  return (
    // "fixed" ya "sticky" top-0 add kiya hai taaki scroll karne par nav upar hi rahe
    <nav className='w-full h-[70px] backgroundOfNav text-white flex justify-center items-center px-4 md:px-10 border-b border-white/5 sticky top-0 z-50'>
        
        {/* Inner Container: Ye poori horizontal width cover karega (max-w-[1400px]) */}
        <div className="w-full max-w-[1400px] flex justify-between items-center">
            
            {/* LEFT: Menu & Logo */}
            <div className="flex items-center gap-4">
                <div className="leftNav cursor-pointer md:hidden text-2xl hover:text-orange-500 transition-colors">☰</div>
                
                <div className="logo text-xl md:text-2xl font-black flex items-center gap-3">
                    <span className="logo-img w-[40px] md:w-[50px] p-1.5 rounded-xl cursor-pointer bg-orange-600 flex justify-center shadow-lg shadow-orange-600/20">
                        <img className='max-h-[25px] md:max-h-[35px] rounded-md' src={logoImg} alt="Logo" />
                    </span> 
                    <span className="hidden sm:inline tracking-tighter uppercase italic">Motor Mall</span>
                </div>
            </div>

            <div className="profileNav flex items-center gap-6 md:gap-10">
                {/* Profile Icon */}
                <div className="flex items-center gap-3 bg-white/10 p-1.5 pr-4 rounded-full border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                    <span className="profile-icon bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                        👤
                    </span>
                    <span className="hidden md:inline text-xs font-bold uppercase tracking-tighter">My Profile</span>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default NavBar