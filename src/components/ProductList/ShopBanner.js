import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ShopBanner() {
  return (
    <div className="lg:flex justify-between text-center lg:pr-56 lg:pl-56 bg-[#FAFAFA] h-24 items-center">
      <div className="mb-3">
        <h3 className="font-bold text-[#252B42] text-xl">Shop</h3>
      </div>
      <div className="flex justify-center">
        <p className="font-bold">Home</p>
        <FontAwesomeIcon icon={faChevronRight} className="mr-2 ml-2 mt-1" />
        <p className="text-[#BDBDBD]">Shop</p>
      </div>
    </div>
  );
}

export default ShopBanner;
