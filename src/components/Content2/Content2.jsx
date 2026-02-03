import React from 'react'
import '../Content2/Conten2.css'
import Card from '../Card/Card'

const Content2 = () => {
  return (
    <div className='hideScrollBar'>
      <div className="container text-white flex flex-col justify-center items-center mt-10">
        <div className="topTexts text-center">
          <h1 className='text-yellow-400 text-xl font-bold tracking-widest uppercase'>Exclusive Selection</h1>
          <h1 className='text-white text-3xl font-extrabold tracking-widest uppercase mt-2'>Featured collection</h1>
          <hr className='w-[500px] mt-1 bg-amber-500 h-[10px] outline-0 border-0' />
        </div>
        <div  className="carCardsContainer mt-10 flex flex-wrap w-screen h-fit justify-center items-center gap-10 m-10">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Content2
