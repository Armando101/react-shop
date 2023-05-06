import { Link } from "react-router-dom";
import logo from "../../icons/logo_yard_sale.svg";
import styles from "./MenuDestkop.module.scss";

export const MenuDesktop = () => {
  return (
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
  );
};
