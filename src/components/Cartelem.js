import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import cartdata from "./Cartdata";
import { useState } from "react";

const Cartelem = () => {
  const [cart, setCart] = useState(cartdata);

  function deleteitem(id) {
    const newcart = cart.filter((item, index) => index !== id);
    setCart([...newcart]);
  }

  return (
    cart.map((cartss, i) => (
      <div key={i} className="w-full h-full flex flex-col">
        <div className="h-48 w-full mt-8 cartdiv justify-between flex flex-row">
          <div className="h-full gap-4 innercart flex">
            <img className="h-full w-44" src={cartss.image} alt="" />
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold cartrate">{cartss.name}</h1>
              <p>Men's Shoes</p>
              <p>Quantity : 1</p>
              <div className="text-2xl my-3">
                <RiDeleteBin6Line onClick={() => deleteitem(i)} />
              </div>
            </div>
          </div>
          <h1 className="font-semibold cartrate">MPR : ₹ {cartss.price}</h1>
        </div>
        <hr className="mt-5" />
      </div>
    ))
  );
};

export default Cartelem;
