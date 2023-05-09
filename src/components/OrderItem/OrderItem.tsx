import styles from "./OrderItem.module.scss";
import closeIcon from "../../icons/icon_close.png";
import { Product } from "../../interfaces/products.interface";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const OrderItem = ({
  produduct,
  indexValue,
}: {
  produduct: Product;
  indexValue: number;
}) => {
  const image = produduct.images ? produduct.images[0] : "";
  const { removeToCart } = useContext(AppContext);

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={image} alt={produduct.title} />
      </figure>
      <p>{produduct.title}</p>
      <p>{produduct.price}</p>
      <img
        className={styles.closeIcon}
        src={closeIcon}
        onClick={() => removeToCart(indexValue)}
        alt="close"
      />
    </div>
  );
};
