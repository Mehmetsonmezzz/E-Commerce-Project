import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productCards } from "../../data/data";
import {
  faGripLinesVertical,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const ProductCards = () => {
  return (
    <div className="pl-32 pr-32">
      <div className="flex justify-between pl-24 pr-24">
        <div className="font-bold text-[#737373]">Showing all 12 results</div>
        <div className="text-[#737373] flex">
          {" "}
          <div className=" flex text-[#737373] h-[45px] justify-center items-center">
            {" "}
            Views:
          </div>
          <div className=" flex text-[#737373] border border-solid border-[#737373] w-[45px] h-[45px] justify-center items-center mr-3 ml-3">
            <FontAwesomeIcon icon={faGripLinesVertical} />
          </div>
          <div className=" flex text-[#737373] border border-solid border-[#737373] w-[45px] h-[45px] justify-center items-center">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <div className="flex">
          <div className=" flex text-[#737373] border border-solid border-[#737373] w-[141px] h-[45px] justify-center items-center mr-4 rounded-md">
            {" "}
            Popularity
          </div>
          <div>
            <button className=" text-white border border-solid bg-[#23A6F0] border-[#23A6F0] w-[100px] h-[45px] rounded-md leading-10">
              FILTER
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center ">
        {productCards.map(({ src, name, desc, price, colors }, idx) => (
          <div className="p-10" key={idx}>
            <img src={src} alt={desc} className="w-[300px] h-[300px]" />
            <div>
              <div>
                <h3>{name}</h3>
              </div>
              <div>
                <h4>{desc}</h4>
              </div>
              <div>
                <h2>{price}</h2>
              </div>
              <div className="w-[82px] h-[20] flex gap-2">
                <div className="h-4 w-4 rounded-[50%] bg-[#23A6F0]"></div>
                <div className="h-4 w-4 rounded-[50%] bg-[#23856D]"></div>
                <div className="h-4 w-4 rounded-[50%] bg-[#23856D]"></div>
                <div className="h-4 w-4 rounded-[50%] bg-[purple]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductCards;
