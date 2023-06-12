import styles from "./navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.container}>
      <button className={styles.prev}>Previous step</button>
      <button className={styles.next}>Next step</button>
    </div>
  );
}
