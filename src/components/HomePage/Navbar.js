import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faPhone,
  faEnvelope,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Headerrepo } from "../../data/data";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#252B42] h-[58px] w-[100%] flex text-white pl-24 pr-12 items-center justify-between">
        <div className="flex">
          <p className="mr-40">
            <FontAwesomeIcon icon={faPhone} size="sm" className="mr-3" />{" "}
            {Headerrepo.number}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} size="sm" className="mr-3" />
            {Headerrepo.email}
          </p>
        </div>

        <div>
          <p>{Headerrepo.follow}</p>
        </div>
        <div>
          Follow Us : <FontAwesomeIcon icon={faInstagram} className="mr-3" />{" "}
          <FontAwesomeIcon icon={faYoutube} className="mr-3" />{" "}
          <FontAwesomeIcon icon={faFacebook} className="mr-3" />{" "}
          <FontAwesomeIcon icon={faTwitter} className="mr-3" />
        </div>
      </div>
      <div className=" bg-white h-[58px] w-[100%] pl-24 pr-12 flex  justify-between">
        <div className="flex items-center">
          <div className=" text-[#252B42] text-2xl font-bold mr-52 ">
            <h1>{Headerrepo.Bandage}</h1>
          </div>
          <div>
            {Headerrepo.navlink.map(([name, url], id) => (
              <a
                href={url}
                key={id}
                className=" mr-6 text-neutral-500 font-bold text-l leading-normal tracking-tigh hover:text-slate-900"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {" "}
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          <p className="mr-5">Login / Register</p>
          <FontAwesomeIcon icon={faSearch} className="mr-5" />
          <FontAwesomeIcon icon={faCartShopping} className="mr-5" />
          <FontAwesomeIcon icon={faHeart} className="mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
