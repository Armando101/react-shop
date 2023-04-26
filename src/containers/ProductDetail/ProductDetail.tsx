import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import "./ProductDetail.module.scss";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
