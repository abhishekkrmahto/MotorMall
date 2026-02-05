import React, { useEffect, useState } from "react";
import "../Checkout/Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [inputIsEmptyNotification, setInputIsEmptyNotification] =
    useState(false);
  const [
    phoneNumberAndPinValidNotification,
    setPhoneNumberAndPinValidNotification,
  ] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);

  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      phoneNumber === "" ||
      address === "" ||
      city === "" ||
      pinCode === ""
    ) {
      setInputIsEmptyNotification(true);
      return;
    } else {
      setInputIsEmptyNotification(false);
    }

    if (isNaN(phoneNumber) || isNaN(pinCode)) {
      setPhoneNumberAndPinValidNotification(true);
      return;
    } else {
      setPhoneNumberAndPinValidNotification(false);
    }

    if (
      name != "" &&
      phoneNumber != "" &&
      address != "" &&
      city != "" &&
      pinCode != ""
    ) {
      setTimeout(() => {
        setSuccessNotification(true);
        setTimeout(() => {
            navigate("/");
        }, 1000);
      }, 100);
      setSuccessNotification(false);
    }
  };

  return (
    <div className="container text-white flex items-center flex-col justify-center">
      {inputIsEmptyNotification && (
        <div className="formNotFilledNotification animationNotification absolute top-5">
          ⚠️ please provide all information correctly
        </div>
      )}

      {phoneNumberAndPinValidNotification && (
        <div className="phoneAndPinNotValidNotification animationNotification absolute top-5">
          ⚠️ phone number and pin should be number
        </div>
      )}

      {successNotification && (
        <div className="successNotification animationNotification absolute top-5">
          ✅ Success
        </div>
      )}

      <div className="innerBox mt-4 p-3 w-[1200px] max-w-[1200px] max-h-[600px] h-[600px] flex flex-col gap-5">
        {/* Back Button */}
        <nav className="heading cursor-pointer w-fit mt-3">
          <div
            onClick={(e) => {
              navigate("/");
            }}
            className="backBtn text-s text-zinc-300"
          >
            🔙 Back to Home
          </div>
        </nav>

        {/* Main Cart Area */}
        <h1 className="text-2xl ml-5">Checkout</h1>
        <div className="infoBox flex justify-between gap-6 ml-3 h-[600px] rounded-2xl p-4">
          <div className="address-details w-[60%] bg-zinc-900 rounded-xl p-6 flex flex-col gap-6 h-fit mt-1">
            <h1 className="justify-self-center text-center text-xl">
              Shipping details
            </h1>
            <hr className="h-[5px] border-0 bg-yellow-500" />
            <form action="">
              <div className="inputs flex flex-col justify-center items-center">
                <fieldset className="p-3 w-[80%]">
                  <legend className="text-l">Name</legend>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="border p-2 w-[80%] rounded-xl outline-0 border-zinc-500"
                    type="text"
                    placeholder="eg: Abhishek Kumar"
                    name=""
                    id=""
                  />
                </fieldset>

                <fieldset className="p-3 w-[80%]">
                  <legend className="text-l">Phone Number</legend>
                  <input
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    className="border p-2 w-[80%] rounded-xl outline-0 border-zinc-500"
                    type="text"
                    placeholder="eg: 81023XXXXX"
                    name=""
                    id=""
                  />
                </fieldset>

                <fieldset className="p-3 w-[80%]">
                  <legend className="text-l">Address</legend>
                  <input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className="border p-2 w-[80%] rounded-xl outline-0 border-zinc-500"
                    type="text"
                    placeholder="eg: Ranchi MotorMall"
                    name=""
                    id=""
                  />
                </fieldset>

                <div className="input-city-pinCode flex justify-between w-[80%]">
                  <fieldset className="p-3">
                    <legend className="text-l">City</legend>
                    <input
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      className="border p-2 w-[50%] rounded-xl outline-0 border-zinc-500"
                      type="text"
                      placeholder="eg: Lalpur"
                      name=""
                      id=""
                    />
                  </fieldset>
                  <fieldset className="p-3">
                    <legend className="text-l">Pin Code</legend>
                    <input
                      value={pinCode}
                      onChange={(e) => {
                        setPinCode(e.target.value);
                      }}
                      className="border p-2 w-[50%] rounded-xl outline-0 border-zinc-500"
                      type="text"
                      placeholder="eg: 812XXX"
                      name=""
                      id=""
                    />
                  </fieldset>
                </div>
              </div>
            </form>
            <hr className="h-[5px] border-0 bg-yellow-500" />
          </div>

          <div className="amount-details w-[40%] bg-zinc-900 rounded-xl p-6 flex flex-col gap-6 h-fit mt-18">
            <h2 className="text-xl">Checkout</h2>

            <div className="flex justify-between text-zinc-300">
              <span>Subtotal</span>
              <span>price</span>
            </div>

            <div className="flex justify-between text-zinc-300">
              <span>Advance</span>
              <span>advance</span>
            </div>

            <hr className="border-zinc-700" />

            <div className="flex justify-between text-lg">
              <span>Remaining</span>
              <span>price</span>
            </div>
            <p>CARDS,UPI,NET BANKING</p>
            <button
              onClick={(e) => {
                formHandler(e);
              }}
              className="bg-yellow-500 text-black p-3 rounded-xl hover:bg-yellow-400 transition"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
