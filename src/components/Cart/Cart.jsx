import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Cart = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [prices, setPrices] = useState({ price: "0", advance: "0", remaining: "0" });

  useEffect(() => {
    if (state?.price) {
      let num = parseFloat(state.price.replace(/[^\d.]/g, ""));
      setPrices({
        price: num.toString(),
        advance: (num * 0.3).toFixed(2),
        remaining: (num * 0.7).toFixed(2),
      });
    }
  }, [state]);

  if (!state)
    return (
      <div className="text-white p-10 text-center bg-black min-h-screen flex items-center justify-center font-black tracking-widest uppercase">
        Garage is Empty
      </div>
    );

  return (
    <div className="w-full text-white min-h-screen bg-[#050505] flex items-center justify-center p-6 md:p-10">
      <div className="max-w-[1250px] w-full">
        {/* Navigation */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-zinc-600 hover:text-white transition text-[10px] tracking-[0.3em] uppercase flex items-center gap-3"
        >
          <span className="text-xl">←</span> Return to Showroom
        </button>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* LEFT: Product Card */}
          <div className="w-full lg:w-[68%] bg-zinc-900/40 rounded-[2.5rem] border border-zinc-800/80 overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row p-6 md:p-10 gap-10">
              <div className="w-full md:w-[280px] lg:w-[320px] aspect-square shrink-0 bg-black rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl">
                <video
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                  src={`https://motormallspringbootapi-production.up.railway.app/videos/${state.videoLink}`}
                />
              </div>

              <div className="flex flex-col justify-center flex-grow">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-500 uppercase italic tracking-tighter leading-[0.85]">
                  {state.carName}
                </h1>
                <p className="text-zinc-500 font-bold text-[10px] md:text-xs mt-5 tracking-[0.4em] uppercase opacity-80">
                  {state.carBrand}
                </p>
                <div className="h-[2px] bg-gradient-to-r from-yellow-500/50 to-transparent w-32 my-8"></div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light opacity-80">
                  {state.cardetails}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Payment Sidebar */}
          <div className="w-full lg:w-[32%] flex">
            <div className="w-full bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-800 shadow-2xl flex flex-col justify-between border-t-yellow-500/20">
              <div>
                <h2 className="text-[10px] font-bold mb-6 text-zinc-500 uppercase tracking-[0.3em]">
                  Purchase Summary
                </h2>

                <div className="space-y-5">
                  <div className="flex justify-between text-xs text-zinc-400 font-medium border-b border-zinc-800/50 pb-3">
                    <span>Valuation</span>
                    <span className="text-white tracking-widest">{state.price}</span>
                  </div>

                  {/* SMALLER INITIAL DEPOSIT BOX */}
                  <div className="flex flex-col gap-1 py-4 px-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-center">
                    <span className="text-yellow-500 font-bold text-[9px] uppercase tracking-widest">
                      Initial Deposit
                    </span>
                    <span className="text-3xl font-black text-yellow-500 tracking-tight italic">
                      ₹{prices.advance}cr
                    </span>
                  </div>

                  <div className="flex justify-between text-[10px] text-zinc-600 font-bold italic px-2 uppercase tracking-tighter">
                    <span>Balance Due</span>
                    <span className="text-zinc-400">₹{prices.remaining}cr</span>
                  </div>
                </div>
              </div>

              {/* SMALLER COMPACT BUTTON */}
              <button
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      carName: state.carName,
                      carBrand: state.carBrand,
                      carPrice: prices.price,
                      carAdvance: prices.advance,
                      payableAmount: prices.remaining,
                    },
                  })
                }
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-black mt-8 uppercase text-xs tracking-[0.2em] transition-all transform active:scale-95 shadow-xl shadow-yellow-500/10"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-center gap-4 opacity-10">
          <div className="h-[1px] w-12 bg-white"></div>
          <p className="text-[8px] uppercase tracking-[0.5em]">MotorMall Luxury Systems</p>
          <div className="h-[1px] w-12 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;