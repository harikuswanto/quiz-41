import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.container}>
      <h1>Get a project quote</h1>
      <p>
        Please fill the form below to receive a quote for your project. Feel
        free to add as much detail as needed.
      </p>
    </header>
  );
}
