import React from "react";
import Jordan from "./Jordan";
import Jordandata from "./Jordandata";
import Airmaxdata from "./Airmaxdata";
import Airmaxelements from "./Airmaxelements";
import nikevideo from "../assets/nikevideo.mp4";
import { useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Sales = (props) => {
  let noticart = document.getElementById("notification");
  let notilike = document.getElementById("notification2");
  const [noticlass, updatenoticlass] = useState("notifi");
  const [noticlass2, updatenoticlass2] = useState("notifi");

  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 jordanhead ">
        Most Loved Jordan's
      </h1>
      <br />
      <div>
        <div className="flex flex-row flex-wrap h-full gap-16 w-full justify-evenly salesdiv">
          {Jordandata.map((Jordandata, i) => {
            return (
              <Jordan
                likeid={notilike}
                notiid={noticart}
                noticlass={updatenoticlass}
                noticlass2={updatenoticlass2}
                key={i}
                image={Jordandata.image}
                image2={Jordandata.image2}
                image3={Jordandata.image3}
                image4={Jordandata.image4}
                price={Jordandata.price}
                name={Jordandata.name}
              />
            );
          })}
        </div>
        <br />
        <hr />
        <br />

        <div className="flex flex-row my-8 maindiv divv2">
        <div className=" imagecontainer2 h-full w-full my-6">
        <video
            className="img2"
            src={nikevideo}
            autoPlay
            loop
            muted
          ></video>

        </div>
        <div className=" h-full w-full px-12 para">
          <div className="w-full  my-8 flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold">NIKE AIR MAX</h1>
            <p className="text">
                Stability where you need it, cushion where you want it.
              </p>
          </div>
          <p>
          The first Nike Air Max model, the Air Max 1 (also known as the Air
              Max '87), was introduced in 1987. It was designed by Tinker
              Hatfield and featured a visible air unit in the heel of the shoe.
              This revolutionary design concept marked a significant milestone
              in footwear technology, Nike regularly releases new colorways and collaborations, making Air Max sneakers highly sought after by sneaker enthusiasts and collectors.

          </p>

         
          <div className=" bgcenter flex flex-row mt-4 gap-1 w-full h-36 mt- bg-center overflow-auto">
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1556878882-55e3e222a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1581343600786-875f20ac7005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80" alt="" />
             
          </div>
        </div>
      </div>

        <br />
        <br />

        <hr />
        <h1 className="text-2xl font-semibold my-4 mt-12 ">
          Most Loved Air Max
        </h1>
        <br />
        <div className="flex flex-row flex-wrap h-full gap-16 w-full justify-evenly salesdiv2 ">
          {Airmaxdata.map((element, index) => {
            return (
              <Airmaxelements
                likeid={notilike}
                notiid={noticart}
                noticlass={updatenoticlass}
                noticlass2={updatenoticlass2}
                image={element.image}
                image2={element.image2}
                image3={element.image3}
                image4={element.image4}
                price={element.price}
                name={element.name}
                id={element.id}
                key={index}
              />
            );
          })}
        </div>

        <div id="notification" className={noticlass}>
          <IoCheckmarkDoneOutline className="text-green-400 text-3xl m-2" />
          <h1 className="text-lg font-semibold text-white">
            Item Added To bag
          </h1>
        </div>
        <div id="notification2" className={noticlass2}>
          <IoCheckmarkDoneOutline className="text-green-400 text-3xl m-2" />
          <h1 className="text-lg font-semibold text-white">
            Item Added To Liked
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sales;
