import { useEffect, useState } from "react";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import styles from "./ProductList.module.scss";
import axios from "axios";
import { Product } from "../../interfaces/products.interface";

const API = " https://api.escuelajs.co/api/v1/products";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios<Product[]>(API)).data;
      setProducts(response);
    };
    fetchData();
  }, []);

  return (
    <section className={styles["main-container"]}>
      <div className={styles.ProductList}>
        {products.map(({ id, title, price, images }) => (
          <ProductItem key={id} images={images} title={title} price={price} />
        ))}
      </div>
    </section>
  );
};
