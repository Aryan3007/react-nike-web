import React from "react";
import cartdata from './Cartdata';
import likeddata from './Likeddata';
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import innerdata from "./Innerdata";

const Airmaxelements = (props) => {


  function clickbyuArray() {
    cartdata.unshift(props)
    notificationhandle()
  }
  function notificationhandle(){
    props.noticlass("notificationclicked")
    
    setTimeout(()=>{
      props.noticlass("notifi")
    }, 1200)
  }
  
  function notificationhandle2(){
    props.noticlass2("notificationclicked")
   
    setTimeout(()=>{
      props.noticlass2("notifi")
    }, 1200)
  }
  function likedClicked() {
    likeddata.unshift(props)
    notificationhandle2()
    let like=document.getElementById(props.id)
    like.style.color="red"
  }

  function handleinner() {
    innerdata.unshift(props)
  }

  return (
    <>
      <div
        
        className="airmaxmargin h-84 w-72 flex justify-between flex-col  "
      >
        <Link to="/Inner">
        <div onClick={handleinner} className="imagecontainer">
        <img className="h-84 iamg" src={props.image} alt="" />
        </div>
        </Link>
        <h1 className="text-xl my-3 font-semibold">{props.name}</h1>
        <p className="text-sm">MRP : ₹ {props.price}</p>

        <div className="flex flex-row gap-2">
        <button
          onClick={clickbyuArray}
          className="buybutton w-28 h-24 bg-black text-white text-sm my-4 rounded-full"
          >
          Add to Bag
        </button>


        <button onClick={likedClicked} className=" h-10 w-10 mt-3 rounded-2xl  text-black">
          <AiFillHeart id={props.id} className="text-2xl likedicon text-black mx-2 font-bold " />
        </button> 
          </div>
      </div>
    </>
  );
};
export default Airmaxelements;
