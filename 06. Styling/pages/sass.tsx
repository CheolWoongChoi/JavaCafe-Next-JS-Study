import styles from "../styles/main.module.scss";

export default function SassPage() {
  return (
    <main>
      <div className={styles.homepage}>
        <h1 className={styles.title}> Welcome to the CSS Modules example </h1>
      </div>
      <div>
        <button className={`${styles["button-default"]}`}>Default</button>
        <button
          className={`${styles["button-default"]} ${styles["button-success"]}`}
        >
          Success
        </button>
        <button
          className={`${styles["button-default"]} ${styles["button-danger"]} `}
        >
          Danger
        </button>
      </div>
    </main>
  );
}
