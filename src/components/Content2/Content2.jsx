import React, { useEffect, useState } from "react";
import "../Content2/Conten2.css";
import Card from "../Card/Card";
import axios from "axios";
import 'aos/dist/aos.css';

const Content2 = () => {
  const [carDataArray, setCarDataArray] = useState([]);

  useEffect(() => {
    let apiFetchedData = axios
      .get("http://localhost:4455/")
      .then((res) => {
        console.log(res.data);
        setCarDataArray(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

  }, []);

  return (
    <div className="hideScrollBar ">
      <div className="container text-white flex flex-col justify-center items-center mt-15">
        <div className="topTexts text-center">
          <h1 className="text-yellow-400 text-xl font-bold tracking-widest uppercase">
            Exclusive Selection
          </h1>
          <h1 className="text-white text-3xl font-extrabold tracking-widest uppercase mt-2">
            Featured collection
          </h1>
          <hr className="w-[500px] mt-1 bg-amber-500 h-[10px] outline-0 border-0" />
        </div>
        <div className="carCardsContainer mt-10 flex flex-wrap w-screen h-fit justify-center items-center gap-10 m-10">
          {carDataArray.length > 0 ? carDataArray.map((car, index) => (
              <Card key={index} carDetails={car} />
            )):<div>ERROR 404 SERVER BUSY</div>
            }
        </div>
      </div>
    </div>
  );
};

export default Content2;
