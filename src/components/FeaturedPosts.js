import React from "react";
import { featuredDesc, featuredPosts } from "../data/data";

function FeaturedPosts() {
  return (
    <div className="h-[720px]">
      {featuredDesc.map(({ practive, featured, problems }) => (
        <div className=" mt-20 mb-20 grid justify-center items-center text-center  gap-6">
          <h3 className="text-[#23A6F0] font-bold">{practive}</h3>
          <h1 className="font-bold text-5xl text-[#252B42]">{featured}</h1>
          <p className="text-[#737373]">{problems}</p>
        </div>
      ))}

      <div className="flex justify-center h-[px]">
        {featuredPosts.map(
          (
            { src, relating1, relating2, name, desc, date, comment, more },
            idx
          ) => (
            <div className="w-1/6 mr-4 ">
              <div>
                <img src={src} alt="desc" className="w-80 h-72"></img>
              </div>
              <div>
                <div>
                  <p>
                    {relating1} {relating2}
                  </p>
                </div>
                <div>{name}</div>
                <div>{desc}</div>
                <div className="flex">
                  <p className="mr-28">{date}</p> <p>{comment}</p>
                </div>
                <div>{comment}</div>
                <div>{more}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FeaturedPosts;
