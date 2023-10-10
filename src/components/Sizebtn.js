import React from 'react'
import { useState } from "react";

const Sizebtn = (props) => {
  const Sizearray=[
    {id:1,
    no:"6"},
    {id:2,
    no:"6.5"},
    {id:3,
    no:"7"},
    {id:4,
    no:"7.5"},
    {id:5,
    no:"8"},
    {id:6,
    no:"8.5"},
    {id:7,
    no:"9"},

  ]
    const [btnstate, setbtnstate]=useState(false)
    function sizeclick(props){
        setbtnstate(btnstate=> !btnstate)
        console.log(props)
      }
    
      let toggleclass=btnstate ? ' active' : '';
  return (
    Sizearray.map((Sizearray, index)=>{
      return(
    <button id={Sizearray.id} key={index} onClick={sizeclick} className={`hover:duration-200 sizebtn text-black p-3 rounded-xl border-2 border-black hover:bg-black hover:text-white ${toggleclass}`}>
         UK {Sizearray.no}
        </button>
        
      )
    })
  )
}

export default Sizebtn
