import { Link } from "react-router-dom";
import styles from "./MenuDestkop.module.scss";

export const MenuDesktop = () => {
  return (
    <div className={styles["navbar-left"]}>
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
