import { shopCard } from "../../data/data";
// {Headerrepo.navlink.map(([name, url], id) => (
const ShopCard = () => {
  return (
    <div className=" text-center h-[770px] bg-[#FAFAFA] pt-12">
      <h1 className="text-[#252B42] text-2xl font-bold">EDITOR'S PICK</h1>
      <p className=" text-sm font-normal">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex justify-center mt-12">
        <div className="relative flex mr-5">
          <img
            src={shopCard.menImg}
            alt="men"
            className="w-[500px] h-[500px]"
          ></img>
          <button className=" absolute bottom-[5%] left-[5%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
            MEN
          </button>
        </div>
        <div className="flex relative">
          <div>
            {" "}
            <img
              src={shopCard.womenImg}
              alt="women"
              className="w-[240px] h-[500px]"
            ></img>
            <button className=" absolute bottom-[5%] left-[5%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
              WOMEN
            </button>
          </div>
          <div>
            <div>
              <img
                src={shopCard.accesImg}
                alt="acces"
                className="w-[240px] h-[244px] ml-5 mb-3"
              ></img>
              <button className=" absolute bottom-[55%] left-[56%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
                ACCESSORIES
              </button>
            </div>
            <div>
              <img
                src={shopCard.kidsImg}
                alt="kids"
                className="w-[240px] h-[244px] ml-5"
              ></img>
              <button className=" absolute bottom-[5%] left-[56%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
