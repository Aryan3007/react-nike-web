import React from "react";
import Footer from "./Footer";
import Sales from "./Sales";

const page1 = () => {
  return (
    <>


    {/* nike upper home */}
      <div className="flex flex-row my-8 mt-20 maindiv">
        <div className=" imagecontainer2 h-full w-full my-6">
          <img className="iamg2"
            src="https://images.unsplash.com/photo-1559479083-f3b234ad0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div className=" h-full w-full px-12 para">
          <div className="w-full  my-8 flex flex-col justify-center">
            <h1>Just In,</h1>
            <h1 className="text-5xl font-extrabold">NIKE READY PACK</h1>
          </div>
          <p>
            Nike is a multinational corporation that specializes in the design,
            manufacturing, and sale of athletic footwear, apparel, equipment,
            and accessories. It is one of the world's largest suppliers of
            athletic shoes and apparel and a major manufacturer of sports
            equipment. Nike is known for its iconic "swoosh" logo and its slogan
            "Just Do It."
          </p>
          <br />
          <p className="para2">
            Nike was founded on January 25, 1964, by Bill Bowerman and Phil
            Knight under the name Blue Ribbon Sports (BRS). The company
            initially operated as a distributor for the Japanese shoe company
            Onitsuka Tiger (now ASICS). In 1971, BRS officially became Nike,
            Inc.
          </p>
          <div className=" bgcenter flex flex-row mt-4 gap-1 w-full h-36 mt- bg-center overflow-auto">
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track ' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1558128242-6e97528bf8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1629348671688-e9ed9b9e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
              <img className='h-full slide-track none' src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
          </div>
        </div>
      </div>

      <hr />
      <Sales />
      <br />
      <hr className="my-12" />

      <Footer />
    </>
  );
};

export default page1;
