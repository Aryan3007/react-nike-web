import React from "react";
import likeddata from "./Likeddata";
import { useState } from "react";
// import Sizebtn from "./Sizebtn";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Likedelem = () => {
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

  function handleclick() {
    if (num > 0) {
      console.log(likeddata);
    }
  }
  return likeddata.map((likeddata, id) => {
    return (
      <div key={id} className="h-full  flex-shrink-0 justify-center px-20 w-full flex flex-row scrollldiv items imagedivmargin">
        <div className="h-ful  w-full flex likedimg mt-8 overflow-hidden">
          <img className=" w-3/5 mobileimg" src={likeddata.image} alt="" />
        </div>

        <div className="h-full w-full mt-8 mx-20 details ">
          <div>
            <h1 className="text-3xl font-semibold name">{likeddata.name}</h1>
          </div>
          <p>Men's Shoes</p>
          <span className="font-bold"> ₹ {likeddata.price}.00</span>
          <p className="dis">
            Discounted from MRP : ₹ {likeddata.price}.00 <br />
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

          <div className="flex flex-row flex-wrap gap-4 w-4/5 size">
            {/* <Sizebtn no={props.no} /> */}
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

              
            </div>
          </Link>
          <br />
        </div>
      </div>
    );
  });
};

export default Likedelem;
