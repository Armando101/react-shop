import styles from "./Orders.module.scss";

export const Orders = () => {
  return (
    <div className={styles.Orders}>
      <div className={styles["Orders-container"]}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles["Orders-content"]}></div>
      </div>
    </div>
  );
};
