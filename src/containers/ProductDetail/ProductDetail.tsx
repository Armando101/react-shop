import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import styles from "./ProductDetail.module.scss";
import close from "../../icons/icon_close.png";

export const ProductDetail = () => {
  return (
    <aside className={styles.productDetail}>
      <div className={styles.productDetailClose}>
        <img src={close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
