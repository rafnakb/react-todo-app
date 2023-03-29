import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="To do list logo" />
      <p className={styles.preTitle}>to</p>
      <p className={styles.lastTitle}>do</p>
    </header>
  );
}