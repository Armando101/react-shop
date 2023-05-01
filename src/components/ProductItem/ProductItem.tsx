import { useState } from "react";
import cartIcon from "../../icons/bt_add_to_cart.svg";
import styles from "./ProductItem.module.scss";

export const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handleCart = () => {
    setCart([]);
  };

  return (
    <div className={styles.ProductItem}>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className={styles["product-info"]}>
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleCart}>
          <img src={cartIcon} alt="" />
        </figure>
        {cart}
      </div>
    </div>
  );
};
