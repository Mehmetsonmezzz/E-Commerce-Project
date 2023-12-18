import Carousel from "../components/HomePage/Carousel";
import ShopCard from "../components/HomePage/ShopCard";
import SecondCarousel from "../components/HomePage/SecondCarousel";
import Fluid from "../components/HomePage/Fluid";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import ProductCards from "../components/ProductList/ProductCards";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ShopCard />
      <div className="text-center mt-6">
        <p className=" text-sm font-bold text-[#737373]">Featured Products</p>
        <h1 className="text-[#252B42] text-2xl font-bold mb-3 mt-3">
          BESTSELLER PRODUCTS
        </h1>
        <p className=" text-sm font-normal text-[#737373] mb-3">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <ProductCards />

      <SecondCarousel />
      <Fluid />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
