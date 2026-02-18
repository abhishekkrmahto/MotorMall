import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const SearchedCars = ({ searchedInput }) => {
  const [carDataArray, setCarDataArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://motormallspringbootapi-production.up.railway.app/")
      .then((res) => {
        setCarDataArray(res.data);
      })
      .catch((e) => {
        console.error("API Error:", e);
      });
  }, []);

  // Agar input empty hai to kuch mat dikhao
  if (!searchedInput || searchedInput.trim() === "") return null;

  const filteredCars = carDataArray.filter((car) =>
    car.carBrand?.toLowerCase().includes(searchedInput.toLowerCase()) ||
    car.carName?.toLowerCase().includes(searchedInput.toLowerCase()) // carName bhi search mein add kiya
  );

  return (
    <div className="searchedOutputBox w-full px-2 md:px-10 mt-10 animate-fade-in">
      {/* Separator Line */}
      <hr className="border-zinc-800 mb-8" />
      
      {/* Search Header */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-sm md:text-lg bg-yellow-500 text-black font-black py-2 px-6 rounded-full uppercase tracking-widest shadow-lg">
          SEARCHED RESULT
        </h1>
      </div>
      
      {/* Flex Container - Matching Content2 Layout */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 pb-20 max-w-[1400px] mx-auto">
        {carDataArray.length === 0 ? (
          <div className="text-red-500 font-black tracking-tighter text-xl">
            ERROR 404: SERVER DISCONNECTED
          </div>
        ) : filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div 
              key={index} 
              className="w-[46%] sm:w-[30%] lg:w-[22%] flex justify-center"
            >
              <Card carDetails={car} />
            </div>
          ))
        ) : (
          <div className="text-zinc-500 italic text-lg py-10">
            No supercars found matching "{searchedInput}"
          </div>
        )}
      </div>

      <hr className="border-zinc-800" />
    </div>
  );
};

export default SearchedCars;