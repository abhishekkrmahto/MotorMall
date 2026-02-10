import { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const SearchedCars = ({ searchedInput }) => {
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

  if (searchedInput != "") {
    return (
      <div className="searchedOutputBox w-[1200px]">
        <hr className="w-[1200px] h-[20px] mt-1" />
        <h1 className="text-2xl bg-yellow-500">Searched Cars</h1>
        <div className="searchedCarRending flex flex-wrap ">
          <div className="carCardsContainer mt-10 flex flex-wrap w-screen h-fit justify-center items-center gap-10 m-10">
            {carDataArray.length > 0 ? (
              carDataArray
                .filter((car) =>
                  car.carBrand
                    ?.toLowerCase()
                    .includes(searchedInput?.toLowerCase() || ""),
                )
                .map((car, index) => <Card key={index} carDetails={car} />)
            ) : (
              <div>ERROR 404,SERVER NOT RESPONDING</div>
            )}
          </div>
        </div>
        <hr className="w-[1200px] h-[20px] mt-1" />
      </div>
    );
  } else {
    return null;
  }
};

export default SearchedCars;
