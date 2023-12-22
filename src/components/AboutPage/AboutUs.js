import { about } from "../../data/data";

const AboutUs = () => {
  return (
    <div className="lg:flex lg:w-[95%]">
      <div className=" my-24 grid items-start text-center lg:text-left lg:w-[80%] justify-center lg:mx-auto lg:my-auto gap-4 lg:gap-12">
        <div>
          <h3 className="text-slate-800 lg:text-xl font-bold leading-normal">
            ABOUT COMPANY
          </h3>
        </div>
        <div>
          <h1 className="text-slate-800 text-2xl lg:text-6xl font-bold leading-normal">
            ABOUT US
          </h1>
        </div>
        <div>
          <p className="text-[#737373] text-normal  leading-normal w-52 lg:w-auto">
            We know how large objects will act,
          </p>
          <p className="text-[#737373]  text-normal  leading-normal">
            but things on a small scale
          </p>
        </div>
        <div>
          <button className="bg-[#23A6F0] w-48 h-14 rounded-md text-white">
            Get Quote Now
          </button>
        </div>
      </div>
      <div className="relative flex-col justify-center items-center inline-flex">
        <img className="w-full z-1" src={about.src} alt={about.alt} />
        <div className="w-[70%] h-[75%] absolute bg-rose-100 rounded-full" />
        <div className="w-[3%] h-[3%] absolute left-[5%] bottom-[20%]  bg-violet-400 rounded-full" />
        <div className="w-[10%] h-[10%] absolute left-[15%] top-[10%] bg-rose-100 rounded-full" />
        <div className="w-[3%] h-[3%] absolute right-[20%] top-[20%]  bg-violet-400 rounded-full" />
        <div className="w-[7%] h-[7.5%] absolute right-[5%] top-[30%] bg-rose-100 rounded-full" />
      </div>
    </div>
  );
};

export default AboutUs;
