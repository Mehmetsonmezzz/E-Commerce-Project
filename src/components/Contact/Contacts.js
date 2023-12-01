import React from "react";
import contact from "../../assets/contact/contact.png";

function Contacts() {
  return (
    <div className="relative text-center">
      <div>
        <img src={contact} alt="contact img"></img>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5">
        <h1 className="font-bold text-3xl mb-4">Questions & Answers</h1>
        <p className="text-[#737373] font-normal mb-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
        <button className="text-[#23A6F0] font-bold text-2xl">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Contacts;
