import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mt-24">
      <div className="lg:mr-96 lg:ml-96">
        <div className="lg:flex grid h-[142px] items-center justify-between border-b-2 border-gray-200 border-solid pl-12 lg:pl-0">
          <div className="font-bold text-2xl">Bandage</div>
          <div className="text-[#23A6F0]">
            <FontAwesomeIcon icon={faFacebook} className="mr-3 text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="mr-3 text-2xl" />
            <FontAwesomeIcon icon={faTwitter} className="mr-3 text-2xl" />
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center ml-12 lg:ml-0 mt-4 lg:mt-0">
        <div className=" lg:w-[10%] lg:mb-0 mb-4">
          <h3 className="text-[#252B42] font-bold mb-3">Company Info</h3>
          <div className="text-[#737373] font-bold">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" lg:w-[11%] lg:mb-0 mb-4">
          <h3 className="text-[#252B42] font-bold mb-3">Legal</h3>
          <div className="text-[#737373] font-bold">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" lg:w-[11%] lg:mb-0 mb-4">
          <h3 className="text-[#252B42] font-bold mb-3">Features</h3>
          <div className="text-[#737373] font-bold">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className=" lg:w-[11%] lg:mb-0 mb-4">
          <h3 className="text-[#252B42] font-bold mb-3">Resources</h3>
          <div className="text-[#737373] font-bold pb-3">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="grid lg:block w-[13%]">
          <h4 className="text-[#252B42] font-bold">Get In Touch</h4>
          <div className="flex lg:h-[58px]">
            <div className="lg:flex w-2/3 border border-solid border-gray-300 rounded-md">
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#E6E6E6] font-semibold p-4"
              />
            </div>

            <div className="flex bg-[#23A6F0] text-center justify-center w-1/3 rounded-e-md text-white">
              <button>Subscribe</button>
            </div>
          </div>
          <div className="pt-2 text-[#737373] font-bold">
            Lore imp sum dolor Amit
          </div>
        </div>
      </div>
      <div className="flex bg-[#FAFAFA] h-[74px] text-[#737373] items-center font-bold lg:pl-[412px] p-4">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
