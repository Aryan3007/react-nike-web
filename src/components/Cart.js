import React from "react";
import Checkout from "./Checkout";
import Cartelement from "./Cartelement";
import cartdata from './Cartdata';
import { Link } from "react-router-dom";

const Cart = (props) => {

if(cartdata.length===0){
    return(

      <div className="emptycart h-full w-full ttt px-32 mt-36 text-center flex flex-col">
      <h1 className="text-4xl font-semibold">Oops... Your Bag Is Empty</h1>
      <p className="mt-6 authen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam animi, amet temporibus quibusdam cum minus nihil quisquam corrupti facere minima, nam suscipit architecto. Beatae est autem eum sed fugiat.</p>
      <Link to="/">
      <button className="buybutton w-28 bg-black text-white text-sm my-4 rounded-full">Back to Home</button>
      </Link>
    </div>
      )
  }
  else{

  return (
    <div className="flex flex-row cartsss">
    
      <div className="wrapper carttt w-3/5 flex flex-col justify-between py-14 mt-24 px-20">
        <Cartelement/>
      </div>
      <div className="mt-20 checkk">
        <Checkout />
      </div>
    </div>
  );
      }
};

export default Cart;
