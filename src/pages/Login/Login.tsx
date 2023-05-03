import { useRef } from "react";
import styles from "./login.module.scss";
import logo from "../../icons/logo_yard_sale.svg";

export const Login = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const formData = new FormData(form.current as unknown as HTMLFormElement);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className={styles.Login}>
      <div className={styles["Login-container"]}>
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="armando@example.com"
            className={`${styles.input} ${styles["input-email"]}`}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={`${styles.input} ${styles["input-password"]}`}
          />
          <button
            onClick={(event) => handleSubmit(event as unknown as Event)}
            className={`${styles["primary-button"]} ${styles["login-button"]}"`}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button
          className={`${styles["secondary-button"]} ${styles["signup-button"]}`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
