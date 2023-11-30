import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import SecondCarousel from "../components/SecondCarousel";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ShopCard />
      <ProductCard />
      <SecondCarousel />
    </div>
  );
};

export default HomePage;
