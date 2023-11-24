import img from "../assets/header/slide.jpg";
import men from "../assets/HomePage/men.jpeg";
import women from "../assets/HomePage/women.jpeg";
import accessories from "../assets/HomePage/accessories.jpeg";
import kids from "../assets/HomePage/kids.jpeg";
export const Headerrepo = {
  number: "(225) 555-0118",
  email: "michelle.rivera@example.com",
  follow: "Follow Us and get a chance to win 80% off",
  navlink: [
    ["Home", "/"],
    ["Shop", "/shopping"],
    ["About", "/"],
    ["Blog", "/"],
    ["Contact", "/"],
    ["Pages", "/"],
  ],

  Bandage: "Bandage",
};

export const carousel = {
  slides: [
    {
      src: img,
      alt: "Image carousel",
    },
    {
      src: img,
      alt: "Image carousel",
    },
  ],
};

export const shopCard = {
  men: "MEN",
  menImg: men,

  women: "WOMEN",
  womenImg: women,

  acces: "ACCESSORIES",
  accesImg: accessories,

  kids: "KIDS",
  kidsImg: kids,
};
