import React from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import { useState } from "react";
import Sizebtn from "./Sizebtn";
import { Link } from "react-router-dom";

const Details = (props) => {
  const [num, setitems] = useState(0);

  function decrement() {
    if (num <= 0) {
      setitems(num);
    } else {
      setitems(num - 1);
    }
  }
  function increment() {
    setitems(num + 1);
  }
  let a = 0;
  function total() {
    a = num * 16147;
    return a;
  }
  total();

  
  function handleclick() {
    if (num > 0) {
      console.log(props)
    }
  }

  return (
    <div  className="h-full w-full mt-8 mx-20 details  ">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-3xl font-semibold name">{props.name}</h1>
      </div>
      <p>Men's Shoes</p>
      <span className="font-bold"> ₹ {props.price}.00</span>
      <p className="dis">
      
          Discounted from MRP : ₹ {props.price}.00 <br />
          incl. of taxes
          <br />
          (Also includes all applicable duties)
     
      </p>

      <div className="flex gap-3 mt-4 removem">
        <button
          onClick={decrement}
          className=" text-black w-10 h-8 rounded-lg text-xl border-2 font-bold border-black hover:bg-black hover:text-white"
        >
          -
        </button>
        <button className="bg-black rounded-lg text-white w-10 h-8">
          {num}
        </button>
        <button
          onClick={increment}
          className="text-black w-10 h-8 rounded-lg text-xl border-2 font-bold border-black hover:bg-black hover:text-white"
        >
          +
        </button>
      </div>

      <div className="my-2">
        <button>Total Amount : ₹ {a} </button>
      </div>

      <div className="flex flex-row flex-wrap gap-4 w-4/5 size">
        <Sizebtn no={props.no} />

      </div>
      <br />
        <Link to="/Cart">
      <div className=" btndivscroller flex flex-row gap-4 cart-btn ">
        <button
          onClick={handleclick}
          id="addcartbtn"
          className="bg-black scrollerbuy text-white p-3 w-3/5 text-xl rounded-2xl flex flex-row align-middle justify-center gap-3"
          >
          <BsCart className="text-2xl" />
          Buy Now
        </button>

        <button className="bg-[#cbd5e1] rounded-2xl  text-black">
          <BsHeart className="text-2xl mx-4 font-bold" />
        </button>
      </div>
          </Link>
      <br />
    </div>
  );
};

export default Details;
