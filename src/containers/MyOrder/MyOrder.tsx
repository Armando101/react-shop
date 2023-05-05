import { Link } from "react-router-dom";
import { OrderItem } from "../../components/OrderItem/OrderItem";
import arrow from "../../icons/arrow.svg";
import styles from "./MyOrder.module.scss";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Product } from "../../interfaces/products.interface";

const totalPrice = (productList: Product[]) => {
  return productList.reduce((prev, curr) => prev + curr.price, 0);
};

export const MyOrder = () => {
  const { state } = useContext(AppContext);
  const productList = state.cart;

  return (
    <aside className={styles.MyOrder}>
      <div className={styles.titleContainer}>
        <img src={arrow} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles.myOrderContent}>
        {productList.map((product, index) => (
          <OrderItem
            key={`orderItem-${index}`}
            produduct={product}
            indexValue={index}
          />
        ))}

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>{totalPrice(productList)}</p>
        </div>
        <Link to="/checkout" className={`${styles.primaryButton}`}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};
