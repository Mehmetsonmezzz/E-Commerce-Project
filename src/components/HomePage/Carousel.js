import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { carousel } from "../../data/data";
import { useState } from "react";
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === carousel.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carousel.slides.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      <div className="absolute text-white lg:mr-[600px]">
        <div>
          <h1 className="font-medium text-lg lg:text-xl leading-[24px] lg:mt-12">
            SUMMER 2020
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-3xl lg:text-6xl leading-[80px] lg:mt-12">
            NEW COLLECTİON
          </h1>
        </div>
        <div className="lg:mt-12 lg:text-xl mb-6 lg:mb-0">
          We know how large objects will act,
          <br /> but things on a small scale
        </div>
        <div>
          <button className="bg-[#2DC071] w-[140px] lg:w-[221px] h-[62px] rounded-md	lg:mt-12 mb-20 lg:mb-0">
            Shop Now
          </button>
        </div>
      </div>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

      {carousel.slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide-hidden "}
          />
        );
      })}

      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {carousel.slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
