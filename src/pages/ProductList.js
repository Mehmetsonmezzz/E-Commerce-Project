import ProductCards from "../components/ProductList/ProductCards";
import ShopBanner from "../components/ProductList/ShopBanner";
import ShopCategory from "../components/ProductList/ShopCategory";
import Client from "../components/ProductList/Client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripLinesVertical,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  return (
    <div>
      <ShopBanner />
      <ShopCategory />
      <div>
        <div className="pl-32 pr-32">
          <div className="flex justify-between pl-24 pr-24">
            <div className="font-bold text-[#737373]">
              Showing all 12 results
            </div>
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
        </div>
      </div>
      <ProductCards />
      <Client />
    </div>
  );
};

export default ProductList;
