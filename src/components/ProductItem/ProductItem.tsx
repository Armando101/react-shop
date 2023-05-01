import { useState } from "react";
import cartIcon from "../../icons/bt_add_to_cart.svg";
import styles from "./ProductItem.module.scss";
import { Product } from "../../interfaces/products.interface";

export const ProductItem = ({ images, title, price }: Partial<Product>) => {
  const [cart, setCart] = useState([]);
  const image = images ? images[0] : "";

  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className={styles.ProductItem}>
      <img src={image} alt={title} />
      <div className={styles["product-info"]}>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleCart}>
          <img src={cartIcon} alt="" />
        </figure>
        {cart}
      </div>
    </div>
  );
};
