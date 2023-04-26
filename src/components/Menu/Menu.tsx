import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link to="/" className={styles.title}>
            My orders
          </Link>
        </li>
        <li>
          <Link to="/">My account</Link>
        </li>
        <li>
          <Link to="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};
