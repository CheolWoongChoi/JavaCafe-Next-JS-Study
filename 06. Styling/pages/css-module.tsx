import styles from "../styles/css-module.module.css";

export default function CSSModulePage() {
  console.log(styles);

  return (
    <main>
      <div className={styles.homepage}>
        <h1 className={styles.title}> Welcome to the CSS Modules example </h1>
      </div>
      <div>
        <button className={styles["button-default"]}>Default</button>
        <button className={styles["button-success"]}>Success</button>
        <button className={styles["button-danger"]}>Danger</button>
      </div>
    </main>
  );
}
