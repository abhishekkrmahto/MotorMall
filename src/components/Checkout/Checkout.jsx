import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../../assets/logo-no-bg.png";
import ceoSign from "../../assets/founder-and-ceo-signature.png";
import coCeoSign from "../../assets/co-ceo-signature.png";
import mdSign from "../../assets/managing-director-signature.jpg";
import "../Checkout/Checkout.css"; // Apni CSS file check kar lein animations ke liye

const Checkout = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");

  // Wahi pehle wali notification states
  const [inputIsEmptyNotification, setInputIsEmptyNotification] =
    useState(false);
  const [
    phoneNumberAndPinValidNotification,
    setPhoneNumberAndPinValidNotification,
  ] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);
  const [invalidOtpNotification, setInvalidOtpNotification] = useState(false);

  const [showOtpPopUp, setShowOtpPopUp] = useState(false);
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const formHandler = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !address || !city || !pinCode) {
      setInputIsEmptyNotification(true);
      setTimeout(() => setInputIsEmptyNotification(false), 2000);
      return;
    }
    if (isNaN(phoneNumber) || isNaN(pinCode)) {
      setPhoneNumberAndPinValidNotification(true);
      setTimeout(() => setPhoneNumberAndPinValidNotification(false), 2000);
      return;
    }
    setShowOtpPopUp(true);
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    const remaining = Number(state.payableAmount) * 10000000;
    const singleEmi = Math.round(remaining / 30);
    let emiRows = Array.from({ length: 30 }, (_, i) => [
      `EMI ${i + 1}`,
      `${singleEmi}`,
    ]);

    // Header & Logo
    doc.addImage(logo, "PNG", 80, 10, 40, 20);
    doc
      .setFontSize(18)
      .text("MOTORMALL OFFICIAL INVOICE", 105, 40, null, null, "center");
    doc.line(10, 45, 200, 45);

    // Customer Info
    doc.setFontSize(11).text(`Customer: ${name}`, 14, 55);
    doc.text(`Contact: ${phoneNumber}`, 14, 62);
    doc.text(`Delivery: ${address}, ${city} - ${pinCode}`, 14, 69);
    doc.text(`Asset: ${state.carName} (MM25K${state.carBrand})`, 14, 80);
    doc.text(`Advance Paid: ${state.carAdvance} Cr`, 14, 87);

    // EMI Table
    autoTable(doc, {
      startY: 95,
      head: [["Installment", "Amount (INR)"]],
      body: emiRows,
      theme: "striped",
    });

    // Signatures Section (3 Signs in a Row)
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(9);

    // 1. CEO (Left)
    doc.addImage(ceoSign, "PNG", 20, finalY, 30, 10);
    doc.text("Founder & CEO", 20, finalY + 15);

    // 2. Co-CEO (Center)
    doc.addImage(coCeoSign, "PNG", 85, finalY, 30, 10);
    doc.text("Co-CEO", 85, finalY + 15);

    // 3. Managing Director (Right)
    doc.addImage(mdSign, "PNG", 150, finalY, 30, 10);
    doc.text("Managing Director", 150, finalY + 15);

    doc.save(`${name}_MotorMall_Receipt.pdf`);
  };

  const handleOtpConfirm = () => {
    if (otp[1] === "1" && otp[2] === "2" && otp[3] === "3" && otp[4] === "4") {
      setSuccessNotification(true);
      setTimeout(() => {
        setSuccessNotification(false);
        setShowOtpPopUp(false);
        downloadReceipt();
        navigate("/");
      }, 2000);
    } else {
      setInvalidOtpNotification(true);
      setTimeout(() => setInvalidOtpNotification(false), 2000);
    }
  };

  if (!state)
    return (
      <div className="h-screen flex items-center justify-center text-white">
        No State Found
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10 flex flex-col items-center justify-center relative">
      {/* ----------------- Notifications (Original Style) ----------------- */}
      {inputIsEmptyNotification && (
        <div className="formNotFilledNotification animationNotification absolute top-5 bg-red-600 px-6 py-2 rounded-full z-[100]">
          ⚠️ please provide all information correctly
        </div>
      )}

      {phoneNumberAndPinValidNotification && (
        <div className="phoneAndPinNotValidNotification animationNotification absolute top-5 bg-orange-600 px-6 py-2 rounded-full z-[100]">
          ⚠️ phone number and pin should be number
        </div>
      )}

      {successNotification && (
        <div className="flex flex-col items-center absolute top-5 z-[100] gap-2">
          <div className="successNotification animationNotification bg-green-600 px-6 py-2 rounded-full">
            ✅ Congratulation for new car 🎉🎉
          </div>
          <div className="successNotification animationNotification bg-blue-600 px-6 py-2 rounded-full text-xs">
            ⬇️ Receipt Downloading...
          </div>
        </div>
      )}

      {invalidOtpNotification && (
        <div className="wrongOtp animationNotification absolute top-5 bg-red-500 px-8 py-2 rounded-full z-[100]">
          Wrong OTP
        </div>
      )}

      {/* OTP POPUP */}
      {showOtpPopUp && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-yellow-500/30 p-8 rounded-[2.5rem] w-full max-w-[400px] text-center shadow-[0_0_50px_rgba(234,179,8,0.1)]">
            <h2 className="text-2xl font-black text-yellow-500 mb-2 italic tracking-tighter">
              VERIFY
            </h2>
            <p className="text-zinc-500 text-[10px] mb-8 uppercase tracking-widest">
              Code sent to {phoneNumber}
            </p>
            <div className="flex gap-4 justify-center mb-10">
              {[1, 2, 3, 4].map((i) => (
                <input
                  key={i}
                  maxLength="1"
                  className="w-12 h-14 bg-zinc-800 border-2 border-zinc-700 rounded-xl text-center text-xl font-bold focus:border-yellow-500 outline-none transition-all"
                  onChange={(e) => setOtp({ ...otp, [i]: e.target.value })}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowOtpPopUp(false)}
                className="flex-1 py-3 text-zinc-500 font-bold text-xs uppercase"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpConfirm}
                className="flex-1 bg-yellow-500 text-black rounded-xl font-black py-3 text-xs uppercase hover:bg-yellow-400 transition-all"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="w-full max-w-[1200px] flex flex-col gap-6">
        <button
          onClick={() => navigate("/")}
          className="text-zinc-500 text-[10px] tracking-widest uppercase hover:text-white transition w-fit"
        >
          ← Abort Checkout
        </button>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT: FORM BOX */}
          <div className="w-full lg:w-[60%] bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-xl">
            <h1 className="text-xl font-black mb-8 italic text-yellow-500 uppercase tracking-widest">
              Delivery Details
            </h1>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-2">
                    Full Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-zinc-800/50 border border-zinc-700 p-3.5 rounded-xl outline-none focus:border-yellow-500/50 transition-all text-sm"
                    placeholder="Abhishek Kumar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-2">
                    Secure Contact
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-zinc-800/50 border border-zinc-700 p-3.5 rounded-xl outline-none focus:border-yellow-500/50 transition-all text-sm"
                    placeholder="81023XXXXX"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-2">
                  Residency Address
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-zinc-800/50 border border-zinc-700 p-3.5 rounded-xl outline-none focus:border-yellow-500/50 transition-all text-sm"
                  placeholder="Street, Locality, Landmark"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-2">
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-zinc-800/50 border border-zinc-700 p-3.5 rounded-xl outline-none focus:border-yellow-500/50 transition-all text-sm"
                    placeholder="Ranchi"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold ml-2">
                    Zip Code
                  </label>
                  <input
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    className="bg-zinc-800/50 border border-zinc-700 p-3.5 rounded-xl outline-none focus:border-yellow-500/50 transition-all text-sm"
                    placeholder="812XXX"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: SUMMARY BOX */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-8">
                Financial Summary
              </h2>
              <div className="space-y-4 mb-8 px-2">
                <div className="flex justify-between text-zinc-400 text-xs italic">
                  <span>Asset Value</span>
                  <span className="text-white font-bold">
                    {state.carPrice} Cr
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400 text-xs italic border-b border-zinc-800 pb-4">
                  <span>Reservation Fee</span>
                  <span className="text-white font-bold">
                    {state.carAdvance} Cr
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-black uppercase tracking-tighter">
                    Payable Later
                  </span>
                  <span className="text-2xl font-black text-yellow-500 tracking-tighter italic">
                    ₹{state.payableAmount}cr
                  </span>
                </div>
              </div>

              {/* CHHOTA BUTTON: Padding aur font size kam kiya gaya hai */}
              <button
                onClick={formHandler}
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-black uppercase text-xs tracking-[0.1em] shadow-lg hover:bg-yellow-400 transition-all active:scale-95"
              >
                Complete Reservation
              </button>

              <p className="text-[8px] text-center text-zinc-600 mt-6 uppercase font-bold tracking-widest">
                Secure Encryption • Private Transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
