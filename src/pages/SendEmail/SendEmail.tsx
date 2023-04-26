import { Link } from "react-router-dom";
import styles from "./SendEmail.module.scss";
import image from "../../icons/logo_yard_sale.svg";
import emailImage from "../../icons/email.svg";

export const SendEmail = () => (
  <div className={styles.SendEmail}>
    <div className={styles["form-container"]}>
      <img src={image} alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Email has been sent!</h1>
      <p className={styles.subtitle}>
        Please check your inbox for instructions on how to reset the password
      </p>
      <div className={styles["email-image"]}>
        <img src={emailImage} alt="email" />
      </div>
      <button
        className={`${styles["primary-button"]} ${styles["login-button"]}`}
      >
        Login
      </button>
      <p className={styles.resend}>
        <span>Didn't receive the email?</span>
        <Link to="/" className={styles.link}>
          Resend
        </Link>
      </p>
    </div>
  </div>
);
