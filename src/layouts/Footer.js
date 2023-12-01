import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-around h-[142px] bg-[#FAFAFA] items-center">
        <div>Bandage</div>
        <div className="text-[#23A6F0]">
          <FontAwesomeIcon icon={faFacebook} className="mr-3 text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="mr-3 text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className="mr-3 text-2xl" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-[10%]">
          <h3 className="text-[#252B42] font-bold">Company Info</h3>
          <div className="text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" w-[11%]">
          <h3 className="text-[#252B42] font-bold">Legal</h3>
          <div className="text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" w-[11%]">
          <h3 className="text-[#252B42] font-bold">Features</h3>
          <div className="text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" w-[11%]">
          <h3 className="text-[#252B42] font-bold">Resources</h3>
          <div className="text-[#737373]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="w-[13%]">
          <h4 className="text-[#252B42] font-bold">Get In Touch</h4>
          <div className="flex h-[58px]">
            <div className="flex w-2/3">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#E6E6E6]"
              />
            </div>

            <div className="flex bg-[#23A6F0] text-center justify-center w-1/3">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FAFAFA] h-[74px] text-[#737373] items-center font-bold pl-[412px]">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
