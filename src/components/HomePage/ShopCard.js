import { shopCard } from "../../data/data";
// {Headerrepo.navlink.map(([name, url], id) => (
const ShopCard = () => {
  return (
    <div className=" text-center lg:h-[770px] bg-[#FAFAFA] pt-12">
      <h1 className="text-[#252B42] text-2xl font-bold">EDITOR'S PICK</h1>
      <p className=" text-sm font-normal">
        Problems trying to resolve the conflict between
      </p>
      <div className="lg:flex grid gap-3 lg:gap-0 justify-center mt-12">
        <div className="relative flex lg:mr-5">
          <img
            src={shopCard.menImg}
            alt="men"
            className="lg:w-[350px] lg:h-[500px] h-[300px]  w-[324px]"
          ></img>
          <button className=" absolute bottom-[5%] left-[5%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
            MEN
          </button>
        </div>
        <div className="lg:flex grid gap-3 lg:gap-0 relative">
          <div>
            {" "}
            <img
              src={shopCard.womenImg}
              alt="women"
              className="lg:w-[240px] lg:h-[500px] h-[300px]  w-[324px]"
            ></img>
            <button className=" absolute bottom-[68%] left-[5%] lg:bottom-[5%] lg:left-[5%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
              WOMEN
            </button>
          </div>
          <div>
            <div>
              <img
                src={shopCard.accesImg}
                alt="acces"
                className="lg:w-[240px] lg:h-[244px] lg:ml-5 mb-3 h-[250px]  w-[324px]"
              ></img>
              <button className=" absolute bottom-[36%] left-[5%]  lg:bottom-[55%] lg:left-[56%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
                ACCESSORIES
              </button>
            </div>
            <div>
              <img
                src={shopCard.kidsImg}
                alt="kids"
                className="lg:w-[240px] lg:h-[244px] lg:ml-5 h-[250px]  w-[324px]"
              ></img>
              <button className=" absolute bottom-[4%] left-[5%] lg:bottom-[5%] lg:left-[56%] w-[120px] text-slate-800 text-base font-bold py-3 bg-white">
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
