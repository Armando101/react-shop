import styles from "./Header.module.scss";
import menu from "../../icons/icon_menu.svg";
import shopping from "../../icons/icon_shopping_cart.svg";
import { useContext, useState } from "react";
import { Menu } from "../Menu/Menu";
import { AppContext } from "../../context/AppContext";
import { MyOrder } from "../../containers/MyOrder/MyOrder";
import { MenuDesktop } from "../Menu/MenuDesktop";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const itemsAdded = state.cart.length;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.nav}>
      <img src={menu} alt="menu" className={styles.menu} />
      <MenuDesktop />
      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={handleToggle}>
            armando.rivera@example.com
          </li>
          {itemsAdded && (
            <li
              className={styles["navbar-shopping-cart"]}
              onClick={() => setToggleOrders(!toggleOrders)}
            >
              <img src={shopping} alt="shopping cart" />
              <div>{itemsAdded}</div>
            </li>
          )}
        </ul>
      </div>

      {toggle && <Menu />}
      {toggleOrders && (
        <MyOrder
          setToggleOrders={setToggleOrders}
          toggleOrders={toggleOrders}
        />
      )}
    </nav>
  );
};
