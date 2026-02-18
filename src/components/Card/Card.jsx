import { useNavigate } from "react-router-dom";
import powerIcon from "../../assets/powerIcon.png";
import engineIcon from "../../assets/engineIcon.png";
import speedIcon from "../../assets/speedIcon.png";

const Card = ({ carDetails }) => {
  const navigate = useNavigate();
  return (
    <div className="text-white bg-zinc-900 rounded-xl overflow-hidden w-full max-w-[170px] md:max-w-[300px] h-[280px] md:h-[440px] flex flex-col border border-zinc-800">
      <div className="h-[120px] md:h-[250px] bg-black">
        <img className="w-full h-full object-cover" src={`https://motormallspringbootapi-production.up.railway.app/images/${carDetails.imgLink}`} alt="car" />
      </div>
      <div className="p-2 flex flex-col justify-between flex-grow">
        <div>
          <h1 className="text-[12px] md:text-lg font-bold truncate">{carDetails.carName}</h1>
          <p className="text-[9px] md:text-xs text-zinc-500">{carDetails.carBrand}</p>
        </div>
        <div className="flex justify-between py-1 border-y border-zinc-800 my-1">
          <div className="flex flex-col items-center"><img src={powerIcon} className="w-3 md:w-6 invert"/><span className="text-[7px] md:text-xs">{carDetails.carPower}</span></div>
          <div className="flex flex-col items-center"><img src={speedIcon} className="w-3 md:w-6 invert"/><span className="text-[7px] md:text-xs">{carDetails.speed0to100}</span></div>
          <div className="flex flex-col items-center"><img src={engineIcon} className="w-3 md:w-6 invert"/><span className="text-[7px] md:text-xs">{carDetails.topSpeed}</span></div>
        </div>
        <button onClick={() => navigate("/cart", { state: carDetails })} className="bg-yellow-500 text-black py-1 md:py-2 rounded-lg font-bold text-[10px] md:text-base">
          {carDetails.price}
        </button>
      </div>
    </div>
  );
};
export default Card