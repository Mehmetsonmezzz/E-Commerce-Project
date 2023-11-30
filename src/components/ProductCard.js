import { productCard } from "../data/data";

const ProductCard = () => {
  return (
    <div>
      <div className="grid text-center mt-3">
        <p className=" text-sm font-bold text-[#737373]">Featured Products</p>
        <h1 className="text-[#252B42] text-2xl font-bold">
          BESTSELLER PRODUCTS
        </h1>
        <p className=" text-sm font-normal text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mr-[13rem] ml-[13rem]">
        {productCard.map(({ src, name, desc, price, colors }, idx) => (
          <div className="p-10" key={idx}>
            <img src={src} alt={desc} className="w-[240px] h-[427px]" />
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
              <div className="w-[82px] h-[20]">
                <div className={`h-4 w-4 rounded-[50%] ${colors}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
