import styles from "./MyAccount.module.scss";

export const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles.container}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <p className={styles.value}>Camila Yokoo</p>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <p className={styles.value}>camilayokoo@gmail.com</p>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <p className={styles.value}>*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className={`${styles["secondary-button"]} ${styles["login-button"]}`}
          />
        </form>
      </div>
    </div>
  );
};
