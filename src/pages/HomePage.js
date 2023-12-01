import Carousel from "../components/HomePage/Carousel";
import ProductCard from "../components/HomePage/ProductCard";
import ShopCard from "../components/HomePage/ShopCard";
import SecondCarousel from "../components/HomePage/SecondCarousel";
import Fluid from "../components/HomePage/Fluid";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

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
