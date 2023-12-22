import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productCards } from "../../data/data";
import {
  faGripLinesVertical,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const ProductCards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center text-center lg:mr-72 lg:ml-72">
      {productCards.map(({ src, name, desc, price, colors }, idx) => (
        <div className="px-6 py-6 rounded-xl" key={idx}>
          <img src={src} alt={desc} className="w-[230px] h-[300px] shadow-xl" />
          <div className="mb-3 bg-white p-3">
            <div>
              <h3 className="font-bold text-[#252B42]">{name}</h3>
            </div>
            <div>
              <h4 className="text-[#737373] font-bold mb-3 mt-3">{desc}</h4>
            </div>
            <div>
              <h2 className="text-gray-500 font-bold">{price}</h2>
            </div>
            <div className="w-[82px] h-[20] flex gap-2 ml-[3.6rem] mt-3">
              <div className="h-4 w-4 rounded-[50%] bg-[#23A6F0]"></div>
              <div className="h-4 w-4 rounded-[50%] bg-[#23856D]"></div>
              <div className="h-4 w-4 rounded-[50%] bg-[#23856D]"></div>
              <div className="h-4 w-4 rounded-[50%] bg-[purple]"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCards;
