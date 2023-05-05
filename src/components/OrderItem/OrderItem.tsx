import styles from "./OrderItem.module.scss";
import closeIcon from "../../icons/icon_close.png";
import { Product } from "../../interfaces/products.interface";

export const OrderItem = ({ order }: { order: Product }) => {
  const image = order.images ? order.images[0] : "";

  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={image} alt={order.title} />
      </figure>
      <p>{order.title}</p>
      <p>{order.price}</p>
      <img src={closeIcon} alt="close" />
    </div>
  );
};
