import { ProductItem } from "../../components/ProductItem/ProductItem";
import styles from "./ProductList.module.scss";
import { Product } from "../../interfaces/products.interface";
import { useGetData } from "../../hooks/useGetData";
import { endpoints } from "../../expoints";

const API = `${endpoints.baseUrl}${endpoints.products}`;

export const ProductList = () => {
  const [products, loading] = useGetData<Product[]>(API);

  return (
    <section className={styles["main-container"]}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className={styles.ProductList}>
          {products.map((product) => (
            <ProductItem key={`${product.id}`} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
