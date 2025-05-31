import styles from './Header.module.css';
import logo from '../../assets/logo.jpg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Sanghaya Buskers Logo" className={styles.logo} />
      <h1 className={styles.title}>Sanghaya Buskers</h1>
      <p className={styles.subtitle}>Music with Honor, Harmony, and Heart</p>
    </header>
  );
}; 