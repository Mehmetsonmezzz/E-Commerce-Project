import React from "react";
import { featuredDesc, featuredPosts } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment } from "@fortawesome/free-regular-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function FeaturedPosts() {
  return (
    <div className="lg:h-[720px] mb-12">
      {featuredDesc.map(({ practive, featured, problems }) => (
        <div className=" mt-20 mb-20 grid justify-center items-center text-center  gap-6">
          <h3 className="text-[#23A6F0] font-bold">{practive}</h3>
          <h1 className="font-bold text-5xl text-[#252B42]">{featured}</h1>
          <p className="text-[#737373] font-bold">{problems}</p>
        </div>
      ))}

      <div className="lg:flex grid justify-center">
        {featuredPosts.map(
          (
            { src, relating1, relating2, name, desc, date, comment, more },
            idx
          ) => (
            <div className="lg:w-1/6 lg:mr-4 shadow-xl">
              <div>
                <img
                  src={src}
                  alt="desc"
                  className="lg:w-80 lg:h-72 px-6 lg:px-0"
                ></img>
              </div>
              <div className="p-3">
                <div className="flex p-2">
                  <div className="mr-3 pb-2">
                    <p className="text-[#8EC2F2]">{relating1} </p>{" "}
                  </div>
                  <div className="pb-2">
                    <p> {relating2}</p>
                  </div>
                </div>
                <div className="font-medium text-2xl pb-2">{name}</div>
                <div className="text-[#737373] font-bold pb-2">{desc}</div>
                <div className="flex pb-2">
                  <p className="mr-12">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-[#8EC2F2]"
                    />{" "}
                    {date}
                  </p>{" "}
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-[#23856D]"
                    />{" "}
                    {comment}
                  </p>
                </div>
                <div>
                  {more}{" "}
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className="text-[#8EC2F2]"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FeaturedPosts;
