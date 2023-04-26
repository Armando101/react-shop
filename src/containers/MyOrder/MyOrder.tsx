import { Link } from "react-router-dom";
import { OrderItem } from "../../components/OrderItem/OrderItem";
import arrow from "../../icons/arrow.svg";
import styles from "./MyOrder.module.scss";

export const MyOrder = () => {
  return (
    <aside className={styles.myOrder}>
      <div className={styles.titleContainer}>
        <img src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles.myOrderContent}>
        <OrderItem />
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <Link to="/checkout" className={`${styles.primaryButton}`}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};
