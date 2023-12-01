import React from "react";
import { team } from "../../data/data";

function TeamCard() {
  return (
    <div>
      <div className="flex flex-wrap justify-center pl-40 pr-40 mb-6 mt-6">
        {team.map(({ src, name, itemCount }) => (
          <div className="pr-10 mb-6">
            <div>
              <img src={src} alt="name" className="w-[300px] h-[300px]"></img>
            </div>
            <div>
              {" "}
              <h1 className="font-bold text-[#252B42]">{name}</h1>
              <p>{itemCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
