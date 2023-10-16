import React, { useState } from "react";

const Footer = () => {
   const [contactval, setcontact] = useState("");
  //  const [textval, settextval] = useState("");

  const contactsend = (e) => {
    setcontact(e.target.value)
  };
  const submitbtn=()=>{
    alert('Contact Form Submitted');
  }
  return (
    <>
      <div className=" w-full p-12 flex flex-row justify-between  footer upfoot">
        <div className="mobilefooter">
          <h1 className="text-2xl font-semibold my-6">Get in Touch :</h1>

          <h2>Don't miss out. Stay in the loop.</h2>
          <textarea
            name=""
            id=""
            cols="40"
            rows="1"
            placeholder="send your feedback here"
            className="textarea mt-6 border-2 resize-none border-bottom-black p-2"
          ></textarea>
          <div className="flex emailbox">
            <input
              onChange={contactsend}
              value={contactval}
              required
              type="email"
              placeholder="email"
              className="email"
            />
            <button onClick={submitbtn} type="submit" className="subscribe">
              Submit
            </button>
          </div>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col h-24 my-6 w-34 text-3xl gap-10">
            <h1 className="text-xl font-semibold">About</h1>
            <ul className="text-sm gap-6">
              <li className="links">Contact us</li>
              <li className="links">About us</li>
              <li className="links">Careers</li>
              <li className="links">Stories</li>
              <li className="links">Corporate information</li>
            </ul>
          </div>
          <div className="flex flex-col h-24 my-6 w-34 text-3xl gap-10">
            <h1 className="text-xl font-semibold">Social Links</h1>
            <ul className="text-sm gap-6">
              <li className="links">Instagram</li>
              <li className="links">Twitter</li>
              <li className="links">Github</li>
              <li className="links">Linkedin</li>
              <li className="links">YouTube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="empty w-full  flex justify-center py-10">
        @ All rights reserved to Aryan Tyagi
      </div>
    </>
  );
};

export default Footer;
