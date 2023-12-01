import React from "react";
import { shopCategory } from "../../data/data";

function ShopCategory() {
  return (
    <div className="flex justify-center bg-[#FAFAFA] mb-24">
      {shopCategory.map(({ src, categoryName, itemCount }) => (
        <div className=" relative">
          <img
            src={src}
            alt="srcname"
            className="w-[280px] h-[223px] mr-3"
          ></img>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h3 className="font-bold">{categoryName}</h3>
            <p>{itemCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCategory;
