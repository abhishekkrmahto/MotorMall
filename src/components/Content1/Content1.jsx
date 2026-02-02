import React from 'react'

const Content1 = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center mt-10'>
      <div className="top-heading">
        <h1 className='text-yellow-400 text-xl font-bold tracking-widest uppercase'>experience excellence</h1>
      </div>
      <div className="pageInfo mt-22">
          <h1 className='text-white text-5xl font-extrabold tracking-widest'>LUXURY MEETS</h1>
          <div className="yellowBox w-[700px] bg-yellow-600 h-[70px] mt-2"></div>
          <p className='text-white mt-2'>Discover the World's top most automobiles,Where Engineering Meets Unparalleled Elegance</p>
        </div>
        <div className="searchBar text-white mt-27 flex gap-1 items-center">
          <input className='searchBar-input searchBarAnimation border outline-0 border-amber-50 p-4 w-[450px] rounded-2xl' placeholder='🔍︎ Search by car name,model,brand ...' type="text" name="" id="" />
          <button className='bg-yellow-600 cursor-pointer w-[100px] ml-1 rounded-xl font-bold text-black text-xl h-[50px]'>Search</button>
        </div>
    </div>
  )
}

export default Content1
