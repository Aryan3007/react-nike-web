import React from "react";
// import { useNavigate } from "react-router-dom";
import cartdata from "./Cartdata";
import { FiHeart } from "react-icons/fi";
import likeddata from "./Likeddata";
import { Link } from "react-router-dom";
import innerdata from "./Innerdata";

const Jordan = (props) => {

  // const navigate = useNavigate();

  function byunowClicked() {
    cartdata.unshift(props);
    // alert("Addded to Cart")
    notificationhandle();
    // navigate("/Cart", { state: cartdata });
  }
  function notificationhandle() {
    props.noticlass("notificationclicked");
  
    setTimeout(() => {
      props.noticlass("notifi");
    }, 1200);
  }

  function notificationhandle2() {
    props.noticlass2("notificationclicked");

    setTimeout(() => {
      props.noticlass2("notifi");
    }, 1200);
  }

  function likedClicked() {
    notificationhandle2();
    likeddata.unshift(props);
  }
  
  function handleinner() {
    innerdata.unshift(props)
  }

  return (
    <div
     className=" h-84 w-72 flex justify-center flex-col mobilmargin">
      <Link to="/Inner">
        <div onClick={handleinner} className="imagecontainer">
          <img className="h-84 iamg " src={props.image} alt="" />
        </div>
      </Link>

      <h1 className="text-xl my-3 font-semibold">{props.name}</h1>
      <p>MRP : ₹ {props.price}</p>
      <div className="flex flex-row gap-2">
        <button
          onClick={byunowClicked}
          id={props.id}
          className="buybutton w-28 bg-black text-white text-sm my-4 rounded-full"
        >
          Add to Bag
        </button>

        <button
          onClick={likedClicked}
          className=" h-10 w-10 mt-3 likedicon rounded-2xl  text-black"
        >
          <FiHeart className="text-2xl mx-2 font-bold " />
        </button>
      </div>
    </div>
  );
};

export default Jordan;
