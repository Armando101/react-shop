import { useContext } from "react";
import cartIcon from "../../icons/bt_add_to_cart.svg";
import bt_added_to_cart from "../../icons/bt_added_to_cart.svg";
import styles from "./ProductItem.module.scss";
import { Product } from "../../interfaces/products.interface";
import { AppContext } from "../../context/AppContext";

export const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useContext(AppContext);

  const image = product.images ? product.images[0] : "";

  const handleCart = (item: Product) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <img src={image} alt={product.title} />
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={product.added ? bt_added_to_cart : cartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};
