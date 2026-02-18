import React, { useState } from 'react'
import SearchedCars from '../SearchedCars/SearchedCars';

const Content1 = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className='flex flex-col items-center text-center justify-center mt-10 px-4'>
      <h1 className='text-yellow-400 text-sm md:text-xl font-bold tracking-widest uppercase'>experience excellence</h1>
      
      <div className="pageInfo mt-10 md:mt-20 flex flex-col items-center w-full">
        <h1 className='text-white text-3xl md:text-5xl font-extrabold tracking-widest'>LUXURY MEETS</h1>
        {/* Yellow box perfect center alignment */}
        <div className="yellowBox w-full max-w-[280px] md:max-w-[650px] bg-yellow-600 h-[35px] md:h-[60px] mt-2 mx-auto"></div>
        <p className='text-white mt-4 max-w-2xl text-xs md:text-base opacity-80'>Discover the World's top automobiles, where engineering meets elegance.</p>
      </div>

      <div className="searchBar text-white mt-12 md:mt-20 flex flex-col items-center w-full">
        {/* Container for Input + Button */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 w-full max-w-[600px]'>
          <input 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
            className='bg-zinc-900 border border-zinc-700 p-3 md:p-4 w-full rounded-xl md:rounded-l-xl md:rounded-r-none outline-none focus:border-yellow-600 transition-all text-sm md:text-base' 
            placeholder='🔍 Search car name...' 
          />
          <button className='bg-yellow-600 w-full md:w-[130px] rounded-xl md:rounded-r-xl md:rounded-l-none font-black text-black h-[50px] md:h-[58px] hover:bg-yellow-500 transition-all active:scale-95 text-sm md:text-base uppercase tracking-wider'>
            Search
          </button>
        </div> 

        {/* Searched Results Container */}
        <div className="w-full">
          <SearchedCars searchedInput={searchText}/>
        </div>
      </div>
    </div>
  )
}
export default Content1