import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import cartdata from "./Cartdata";
import { useState } from "react";

const Cartelem = (items) => {
  const [cart, setCart] = useState(cartdata);
  
  // console.log(cart)
  function deleteitem(){
    console.log(items.name)
    const newcart=cart.filter(item=> item!== items);
    setCart([...newcart]);
    console.log(newcart)
  }

  return (
    <>
      <div id={items.id} className=" w-full h-full flex flex-col">
        <div className=" h-48 w-full mt-8 cartdiv justify-between flex flex-row ">
          <div className="h-full gap-4 innercart flex ">
            <img className="h-full w-44" src={items.image} alt="" />
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold cartrate">{items.name}</h1>
              <p>Men's Shoes</p>
              <p>Quantity : 1</p>
              <div className="text-2xl my-3">
                <RiDeleteBin6Line  onClick={deleteitem} />
              </div>
            </div>
          </div>
          <h1 className="font-semibold cartrate">MPR : ₹ {items.price}</h1>
        </div>
        <hr className="mt-5" />
      </div>
    </>
  );
};

export default Cartelem;
