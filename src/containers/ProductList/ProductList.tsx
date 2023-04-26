import { ProductItem } from "../../components/ProductItem/ProductItem";
import styles from "./ProductList.module.scss";

export const ProductList = () => {
  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        <ProductItem />
      </div>
    </section>
  );
};
