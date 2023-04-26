import arrowImage from "../../icons/arrow.svg";
import styles from "./Order.module.scss";

export const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={arrowImage} alt="arrow" />
    </div>
  );
};
