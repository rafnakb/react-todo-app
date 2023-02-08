import styles from './Header.module.css';

export function Header() {
  return (
    <head className={styles.header}>
      <img src="src/assets/rocket.svg" alt="To do list logo" />
      <p className={styles.preTitle}>to</p>
      <p className={styles.lastTitle}>do</p>
    </head>
  );
}