import { useEffect, useState } from "react";
import "../../components/Cart/Cart.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const { state } = useLocation();
  console.log(state.videoLink);
  const navigate = useNavigate();
  const [advancePayment, setAdvancePayment] = useState(0);
  const [price, setPrice] = useState(0);
  const [payablePrice, setPayablePrice] = useState(0);
  useEffect(() => {
    let num = parseFloat(state.price.replace("₹", "").replace("cr", ""));
    setPrice((num));
    setAdvancePayment(Math.floor((num *0.3)* 100) / 100);
    setPayablePrice(Math.floor((num-(num*0.3))* 100) / 100);
    // num-(num*0.3), here this logic is for getting digits upto 2 digits only
  }, []);

  return (
    <div className="container text-white flex items-center flex-col justify-center">
      <div className="innerBox mt-10 p-3 w-[1200px] max-w-[1200px] max-h-[600px] h-[600px] flex flex-col gap-5">
        {/* Back Button */}
        <nav className="heading cursor-pointer w-fit mt-3">
          <div
            onClick={(e) => {
              navigate("/");
            }}
            className="backBtn text-s text-zinc-300"
          >
            🔙 Continue Shopping
          </div>
        </nav>

        {/* Main Cart Area */}
        <div className="infoBox flex items-start gap-6 ml-3 h-[600px] rounded-2xl p-4">
          {/* LEFT SIDE (Cart Items) */}
          <div className="info-left w-[70%] flex flex-col gap-10">
            <h1 className="text-3xl">Your Cart</h1>

            {/* Cart Item */}
            <div className="relative img-and-info bg-zinc-900 rounded-2xl w-full h-[300px] p-4 flex gap-5">
              <div className="deleteButton absolute right-6 top-5 invert-100 cursor-pointe p-1 rounded-2xl">
                🗑
              </div>

              <video
                className="max-w-[50%]"
                autoPlay
                muted
                loop
                src={`http://localhost:4455/videos/${state.videoLink}`}
              ></video>

              <div className="info flex flex-col gap-4 justify-center">
                <h2 className="font-black tracking-widest">{state.carName}</h2>
                <p>{state.cardetails}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Checkout) */}
          <div className="info-right w-[30%] bg-zinc-900 rounded-xl p-6 flex flex-col gap-6 h-fit mt-15">
            <h2 className="text-xl">Checkout</h2>

            <div className="flex justify-between text-zinc-300">
              <span>Subtotal</span>
              <span>{state.price}</span>
            </div>

            <div className="flex justify-between text-zinc-300">
              <span>Advance</span>
              <span>₹{advancePayment}cr</span>
            </div>

            <hr className="border-zinc-700" />

            <div className="flex justify-between text-lg">
              <span>Remaining</span>
              <span>₹{payablePrice}cr</span>
            </div>

            <button
              onClick={() => navigate("/checkout", { state: {
                "carPrice":price,
                "carAdvance":advancePayment,
                "carBrand":state.carBrand,
                "payableAmount":payablePrice,
              } })}
              className="bg-yellow-500 text-black p-3 rounded-xl hover:bg-yellow-400 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
