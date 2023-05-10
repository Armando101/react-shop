import { OrderItem } from "../../components/OrderItem/OrderItem";
import styles from "./Checkout.module.scss";

export const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles.CheckoutContainer}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles.CheckoutContent}>
          <div className={styles.Order}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem
          produduct={{ added: false, description: "", category: "", id: 0 }}
          indexValue={0}
        />
      </div>
    </div>
  );
};
