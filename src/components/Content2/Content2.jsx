import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

const Content2 = () => {
  const [carDataArray, setCarDataArray] = useState([]);

  useEffect(() => {
    axios.get("https://motormallspringbootapi-production.up.railway.app/")
      .then((res) => setCarDataArray(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="mt-16 px-2 md:px-10 lg:px-20 w-full">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-yellow-400 text-xs md:text-lg font-bold uppercase tracking-[0.3em]">
          Exclusive Selection
        </h3>
        <h1 className="text-white text-3xl md:text-5xl font-black uppercase mt-2 italic">
          Featured collection
        </h1>
        <div className="mx-auto w-20 md:w-40 bg-yellow-500 h-1 mt-4" />
      </div>

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 w-full max-w-[1400px] mx-auto">
        {carDataArray.map((car, index) => (
          <div 
            key={index} 
            className="w-[46%] sm:w-[30%] lg:w-[22%] flex justify-center"
          >
            <Card carDetails={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content2;