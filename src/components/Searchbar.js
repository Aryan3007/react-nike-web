import React from "react";
import { BsFillBagCheckFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";

const Searchbar = () => {
  const navigate = useNavigate();
  function gotocart(){
    navigate("/Cart")  }
  return (
    <div className="flex flex-row srchmob px-3 justify-between ">
      <Link to="/">
      <h1 className="text-2xl">jOOta</h1>
      </Link>
      <div className="flex flex-row justify-center align-middle">
        <input
          className="h-10 w-80 p-4 bg-[#dfdfdf] search-bar border-0"
          type="search"
          name=""
          id=""
          placeholder="search"
        />
        <BsSearch className=" h-10 w-12 bg-[#dfdfdf] text-[#475569] p-3 search-icon" />
      </div>
      <div className="flex flex-row bg-white gap-7 like-cart">
        
        <div className="flex h-10 w-10 justify-center cartlogo ">
          <BsFillBagCheckFill onClick={gotocart} className=" z-10 text-2xl m-2" />
        </div>
        
        <Link to="/Liked">
        <div className="flex h-10 w-10 justify-center cartlogo">
          <FaHeartCircleCheck className="text-2xl my-2 font-bold" />
    
        </div>
        </Link>
        <div className="overflow-hidden bg-center bg-cover rounded-full h-9 w-9 profile">
          <img className="h-full w-full" src="https://images.unsplash.com/photo-1559479083-f3b234ad0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Searchbar;
