import React from "react";

const Checkout = () => {
  return (
    <div className="checkout h-56 w-96 mx-36 my-24 flex flex-col">
      <h1 className="text-2xl font-semibold">Summary</h1>
      <p className="my-3 ">Subtotal : </p>
      <p className=" ">Delivery Charges : </p>

      <button className="buybutton w-full bg-black text-white text-sm my-4 rounded-full">
        Procced To Pay
      </button>
    </div>
  );
};

export default Checkout;
