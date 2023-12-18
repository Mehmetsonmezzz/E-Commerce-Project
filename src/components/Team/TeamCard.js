import React from "react";
import { team } from "../../data/data";

function TeamCard() {
  return (
    <div>
      <div className="text-center pb-2">
        <h3 className="font-bold text-2xl pb-2">Meet Our Team</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex flex-wrap justify-center pl-40 pr-40 mb-6 mt-6">
        {team.map(({ src, name, itemCount }) => (
          <div className="pr-10 mb-6 ">
            <div>
              <img
                src={src}
                alt="name"
                className="w-[300px] h-[300px] shadow-xl rounded-sm"
              ></img>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-[#252B42] pb-2 pt-2">{name}</h1>
              <p className="text-[#737373] font-bold">{itemCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
