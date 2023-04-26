import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../icons/logo_yard_sale.svg";
import menu from "../../icons/icon_menu.svg";
import shopping from "../../icons/icon_shopping_cart.svg";

export const Header = () => (
  <nav className={styles.nav}>
    <img src={menu} alt="menu" className={styles.menu} />
    <div className={styles["navbar-left"]}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/">Clothes</Link>
        </li>
        <li>
          <Link to="/">Electronics</Link>
        </li>
        <li>
          <Link to="/">Furnitures</Link>
        </li>
        <li>
          <Link to="/">Toys</Link>
        </li>
        <li>
          <Link to="/">Others</Link>
        </li>
      </ul>
    </div>
    <div className={styles["navbar-right"]}>
      <ul>
        <li className={styles["navbar-email"]}>armando.rivera@example.com</li>
        <li className={styles["navbar-shopping-cart"]}>
          <img src={shopping} alt="shopping cart" />
          <div>2</div>
        </li>
      </ul>
    </div>
  </nav>
);
