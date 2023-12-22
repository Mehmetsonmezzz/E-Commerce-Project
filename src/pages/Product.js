import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousels from "../components/Product/Carousels";
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import QuickFox from "../components/Product/QuickFox";
import ProductCards from "../components/ProductList/ProductCards";
import Client from "../components/ProductList/Client";

const Product = () => {
  return (
    <div>
      <div className="lg:flex px-12 lg:px-0 justify-center py-16 bg-[#FAFAFA]">
        <div className="lg:w-[500px] lg:h-[450px] ">
          <Carousels />
        </div>
        <div className="lg:w-1/4 grid lg:ml-20 gap-3">
          <h1 className="text-[#252B42] font-bold text-lg">Floating Phone</h1>

          <div className="flex">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-300"
              size="lg"
            />
            <p className="ml-3 text-[#737373] font-bold">10 Reviews</p>
          </div>
          <div>
            <p className="text-[#252B42] font-bold text-xl">$1,139.33</p>
          </div>
          <div className="flex">
            <p className="font-bold text-[#737373] mr-1">Availability : </p>
            {"  "}
            <p className=" text-blue-400 font-bold"> In Stock</p>
          </div>
          <div>
            <p className="border-b-2 border-gray-200 border-solid pb-4 text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div>
            <div className="w-[150px] h-[30] flex gap-2">
              <div className="h-7 w-7 rounded-[50%] bg-[#23A6F0]"></div>
              <div className="h-7 w-7 rounded-[50%] bg-[#23856D]"></div>
              <div className="h-7 w-7 rounded-[50%] bg-[#23856D]"></div>
              <div className="h-7 w-7 rounded-[50%] bg-[purple]"></div>
            </div>
            <div className="flex justify-start gap-3 mt-3">
              <div className=" bg-[#23A6F0]  px-3 py-2.5 rounded-md text-white">
                <button>Select Options</button>
              </div>

              <div className="rounded-full border border-gray-800 w-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="sm"
                  className="text-red-600"
                />
              </div>
              <div className="rounded-full border border-gray-800 w-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="sm"
                  className="text-slate-600"
                />
              </div>
              <div className="rounded-full border border-gray-800 w-10 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEye}
                  size="sm"
                  className="text-slate-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickFox />
      <div>
        <div className="text-center lg:text-start mt-12 border-b-2 border-gray-200 border-solid pb-4 text-[#737373] lg:mr-96 lg:ml-96">
          <h1 className="text-[#252B42] font-bold text-2xl">
            Bestseller Products
          </h1>
        </div>
        <div>
          <ProductCards />
        </div>
      </div>
      <Client />
    </div>
  );
};

export default Product;
