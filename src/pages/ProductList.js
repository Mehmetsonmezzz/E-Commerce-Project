import ProductCards from "../components/ProductList/ProductCards";
import ShopBanner from "../components/ProductList/ShopBanner";
import ShopCategory from "../components/ProductList/ShopCategory";
import Client from "../components/ProductList/Client";

const ProductList = () => {
  return (
    <div>
      <ShopBanner />
      <ShopCategory />
      <ProductCards />
      <Client />
    </div>
  );
};

export default ProductList;
