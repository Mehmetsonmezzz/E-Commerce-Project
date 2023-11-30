import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import ShopCard from "../components/ShopCard";
import SecondCarousel from "../components/SecondCarousel";
import Fluid from "../components/Fluid";
import FeaturedPosts from "../components/FeaturedPosts";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ShopCard />
      <ProductCard />
      <SecondCarousel />
      <Fluid />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
