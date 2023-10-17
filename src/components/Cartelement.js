import React from "react";import Cartelem from "./Cartelem";
import cartdata from './Cartdata';
import { Link } from "react-router-dom";
// import { useState } from "react";


const Cartelement = (array) => {



  if(cartdata.length===0){
    return(

      <div className="h-full w-full mt-4">
      <h1 className="text-4xl font-semibold">Oops... Your Cart Is Empty</h1>
      <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam animi, amet temporibus quibusdam cum minus nihil quisquam corrupti facere minima, nam suscipit architecto. Beatae est autem eum sed fugiat.</p>
      <Link to="/">
      <button className="buybutton w-28 bg-black text-white text-sm my-4 rounded-full">Back to Home</button>
      </Link>
    </div>
      )
  }
  else{

    return (
    
          <Cartelem image={array.image} price={array.price} name={array.name}/>
          )
        
  
      }
};

export default Cartelement;
