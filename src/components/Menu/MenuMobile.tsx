import styles from "./MenuMoblie.module.scss";

export const MenuMobile = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className={styles.email}>
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className={styles["sign-out"]}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};
