import { Link } from "react-router-dom";
import styles from "./RecoveryPassword.module.scss";
import logo from "../../icons/logo_yard_sale.svg";
import email from "../../icons/email.svg";

export const RecoveryPassword = () => {
  return (
    <div className={styles.login}>
      <div className={styles["form-container"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className={styles["email-image"]}>
          <img src={email} alt="email" />
        </div>
        <button
          className={`${styles["primary-button"]} ${styles["login-button"]}`}
        >
          Login
        </button>
        <div className={styles.resend}>
          <p>Didn't receive the email?</p>

          <Link to="/">Resend</Link>
        </div>
      </div>
    </div>
  );
};
