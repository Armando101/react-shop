import styles from "./Header.module.scss";
import menu from "../../icons/icon_menu.svg";
import shopping from "../../icons/icon_shopping_cart.svg";
import { useContext, useState } from "react";
import { Menu } from "../Menu/Menu";
import { AppContext } from "../../context/AppContext";
import { MyOrder } from "../../containers/MyOrder/MyOrder";
import { MenuDesktop } from "../Menu/MenuDesktop";
import { MenuMobile } from "../Menu/MenuMobile";
import logo from "../../icons/logo_yard_sale.svg";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { state } = useContext(AppContext);
  const itemsAdded = state.cart.length;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles["menu-logo"]}>
        <img
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          src={menu}
          alt="menu"
          className={styles.menu}
        />
        <img
          onClick={() => handleToggle()}
          src={logo}
          alt="logo"
          className={styles.logo}
        />
      </div>

      <MenuDesktop />
      <div className={styles["mobile-menu"]}>
        {toggleMobileMenu && <MenuMobile></MenuMobile>}
      </div>
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
