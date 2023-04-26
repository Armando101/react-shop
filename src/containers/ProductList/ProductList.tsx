import { ProductItem } from "../../components/ProductItem/ProductItem";
import "./ProductList.module.scss";

export const ProductList = () => {
  return (
    <section className="main-container">
      <div className="ProductList">
        <ProductItem />
      </div>
    </section>
  );
};
