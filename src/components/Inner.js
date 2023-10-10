import React from "react";
import { BsCart } from "react-icons/bs";
import innerdata from "./Innerdata";
const Inner = (props) => {
  const addToBag = () => {
    alert("I'm bit lazy to add that Sorry!!!!" )
  };
  return innerdata.map((arrays, i) => {
    return (
      <div
        key={i}
        className="pt-20  h-[80%] justify-center items-center  w-[90%] inn flex flex-row"
      >
        <div className="flex flex-row w-full inner items-center justify-center">
          <div className="w-[50%] flex justify-center h-[80%] innerimg ">
            <img className="w-[70%] h-full" src={arrays.image} alt="" />
          </div>
          <div className="p-2 w-1/2 scrollerbuy">
            <h1 className="font-semibold text-2xl">{arrays.name}</h1>
            <br />
            <p className="text-xl font-semibold">Men's Shoes</p>
            <br />
            <p>MRP : ₹ <span className="font-semibold"> {arrays.price} </span></p>
            <p className="dis">
              Discounted from MRP : ₹ <span className="font-semibold"> {arrays.price} </span>incl. of taxes <br />
              (Also includes all applicable duties)
            </p>

            <p className="my-1">Quantity : 1</p>
            <p className="dis">Total Price : ₹ <span className="font-semibold"> {arrays.price}</span></p>
            <br />
            
            <button
              onClick={addToBag}
              id="addcartbtn"
              className="bg-black scrollerbuy text-white p-3 my-8 w-3/5 text-xl rounded-2xl flex flex-row align-middle justify-center gap-3"
            >
              <BsCart className="text-2xl" />
              Buy now
            </button>

            <div className="h-32 flex mx-2 flex-row gap-2 innermore">
              <img id="img1" className="w-32 h-40" src={arrays.image2} alt="" />
              <img id="img2" className="w-32 h-40" src={arrays.image3} alt="" />
              <img id="img3" className="w-32 h-40" src={arrays.image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Inner;
