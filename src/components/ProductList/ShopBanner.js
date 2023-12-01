import React from "react";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ShopBanner() {
  return (
    <div className="flex justify-between pr-56 pl-56 bg-[#FAFAFA] h-24 items-center">
      <div>
        <h3 className="font-bold text-[#252B42]">Shop</h3>
      </div>
      <div className="flex">
        <p className="font-bold">Home</p>
        <FontAwesomeIcon icon={faChevronRight} className="mr-2 ml-2 mt-1" />
        <p className="text-[#BDBDBD]">Shop</p>
      </div>
    </div>
  );
}

export default ShopBanner;
