import React from 'react'
import { Link } from "react-router-dom";
import {
    MdOutlineArrowBackIosNew,
    MdOutlineArrowForwardIos,
  } from "react-icons/md";
import Likedelem from './Likedelem';
import likeddata from './Likeddata';
// import Airmaxelements from './Airmaxelements';

const Liked = () => {
  const slideright = () =>{
    var slides=document.getElementById("slider")
    slides.scrollLeft =slides.scrollLeft + slides.clientWidth
}

const slideleft = () =>{
    var slides=document.getElementById("slider")
    slides.scrollLeft =slides.scrollLeft - slides.clientWidth
}

if(likeddata.length===0){
  return(
    <div className=" emptycart ttt h-full w-full px-32 mt-36 text-center flex flex-col">
      <h1 className="text-4xl font-semibold">Oops... You have nothing Liked Yet</h1>
      <p className="mt-6 authen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam animi, amet temporibus quibusdam cum minus nihil quisquam corrupti facere minima, nam suscipit architecto. Beatae est autem eum sed fugiat.</p>
      <Link to="/">
      <button className="buybutton w-28 bg-black text-white text-sm my-4 rounded-full">Back to Home</button>
      </Link>
    </div>
    )
}
else{

  return (
    
    <div className='flex justify-center likeddiv h-full w-full flex-col '>
    <div id='slider'  className=" mt-36 h-full w-[100%] flex flex-row items overflow-x-scroll whitespace-nowrap scroll  scroll-smooth">
       <Likedelem/>
    </div>
    <div className="z-20 mt-18 w-full h-14 flex flex-row justify-center gap-8 my-3">
        <div onClick={slideleft} className="leftrightbtn h-12 w-12 rounded-3xl border-2 border-black text-black hover:bg-black hover:text-white flex justify-center text-2xl pt-2 px-1">
          <MdOutlineArrowBackIosNew />
        </div>
        <div onClick={slideright}  className="leftrightbtn h-12 w-12 rounded-3xl border-2 border-black text-black hover:bg-black hover:text-white flex justify-center text-2xl pt-2 px-1">
          <MdOutlineArrowForwardIos />
        </div>
      </div>
 
   </div>

  )
}
}

export default Liked
