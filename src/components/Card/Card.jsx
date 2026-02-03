import React from 'react'
import powerIcon from '../../assets/powerIcon.png'
import engineIcon from '../../assets/engineIcon.png'
import speedIcon from '../../assets/speedIcon.png'
import '../Card/Card.css'

const Card = ({carDetails}) => {
  console.log(carDetails.imgLink);
  return (
    <div className='text white border-2  w-[300px] max-w-[300px] h-[440px] max-h-[440px]'>
      <div className="imgBox relative m-2 rounded-2xl  h-[250px] max-h-[250px]">
        <img className='object-cover w-full h-[250px] max-h-[250px]'  src={`http://localhost:4455/images/${carDetails.imgLink}`} />
        <div className="carBrandInImage text-amber-500 absolute top-5 left-5 border-2 p-1 text-xs rounded-2xl">
            {carDetails.carBrand}
        </div>
      </div>
      <div className="details ml-3 mr-3">
        <h1>{carDetails.carName}</h1>
        <h1>{carDetails.carBrand}</h1>
        <div className="engineDetails mt-1 p-1 justify-between flex w-full items-center">
            <div className="text-white text-center flex flex-col gap-1">
                <img className='w-[35px] power p-1 rounded-3xl invert-100' src={powerIcon} alt="" />
                <h1 className='text-xs'>{carDetails.carPower}</h1>
            </div>
            <div className="text-white text-center flex flex-col gap-1">
                <img className='w-[35px] speed p-1 rounded-3xl invert-100' src={speedIcon} alt="" />
                <h1 className='text-xs'>{carDetails.speed0to100}</h1>

            </div>
            <div className="text-white text-center flex flex-col gap-1">
                <img className='w-[35px] max-speed p-1 rounded-3xl invert-100' src={engineIcon} alt="" />
                <h1 className='text-xs'>{carDetails.topSpeed}</h1>
            </div>
        </div>
        <div className="buy-button border-2 border-yellow-500 w-full text-center mt-1 font-black tracking-widest rounded-2xl p-2 bg-yellow-500 cursor-pointer">
            <h1>{carDetails.price}</h1>
        </div>
      </div>
      
    </div>
  )
}

export default Card
