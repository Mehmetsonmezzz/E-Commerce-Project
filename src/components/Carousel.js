import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { carousel } from "../Repository/repository";
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
      <div className="absolute text-white mr-[920px]">
        <div>
          <h1 className="font-medium text-xl leading-[24px] mt-12">
            SUMMER 2020
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-6xl leading-[80px] mt-12">
            NEW COLLECTİON
          </h1>
        </div>
        <div className="mt-12 text-xl">
          We know how large objects will act,
          <br /> but things on a small scale
        </div>
        <div>
          <button className="bg-[#2DC071] w-[221px] h-[62px] rounded-md	mt-12">
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
            className={slide === idx ? "slide" : "slide slide-hidden"}
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
