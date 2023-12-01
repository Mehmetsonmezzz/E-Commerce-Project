import React from "react";
import { clients } from "../../data/data";

function Client() {
  return (
    <div className="flex pt-12 pb-24 justify-center gap-20 bg-[#FAFAFA]">
      {clients.map(({ src, alt }) => (
        <div className="w-[103px] h-[34px] mr-6">
          <img src={src} alt={alt}></img>
        </div>
      ))}
    </div>
  );
}

export default Client;
