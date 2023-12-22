import React from "react";
import { fluid } from "../../data/data";

function Fluid() {
  return (
    <div className="flex  flex-wrap-reverse gap-4 lg:gap-0 items-center justify-center mt-10 lg:mt-0">
      <div></div>
      <div className=" bg-white lg:mr-20 md:w-1/3 px-4">
        <img
          src={fluid.src}
          alt="fluid"
          className=" lg:w-[682px]  lg:h-[682px]"
        ></img>
      </div>
      <div className=" text-center lg:w-1/3 w-2/3 lg:gap-32">
        <div>
          <h3 className="text-[#BDBDBD] font-medium text-xl  leading-10 mb-12">
            SUMMER 2020
          </h3>
        </div>
        <div>
          {" "}
          <h1 className="text-[#252B42] font-bold text-3xl lg:text-6xl mb-12">
            Part of the Neural Universe
          </h1>
        </div>
        <div>
          {" "}
          <h2 className="leading-10 text-[#737373] mb-12 font-semibold">
            We know how large objects will act, but things on a small scale
          </h2>
        </div>
        <div className="lg:flex grid justify-center text-center ">
          {" "}
          <div className=" w-1/3">
            <button className=" text-[#FFFFFF] bg-[#2DC071] w-[150px] h-[62px] rounded-md leading-10 mb-4">
              BUY NOW
            </button>
          </div>
          <div className=" w-1/3">
            <button className=" text-[#2DC071] border border-solid border-[#2DC071] w-[150px] h-[62px] rounded-md leading-10">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fluid;
