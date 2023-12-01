import ProductCards from "../components/ProductList/ProductCards";
import ShopBanner from "../components/ProductList/ShopBanner";
import ShopCategory from "../components/ProductList/ShopCategory";

const ProductList = () => {
  return (
    <div>
      <ShopBanner />
      <ShopCategory />
      <ProductCards />
    </div>
  );
};

export default ProductList;
