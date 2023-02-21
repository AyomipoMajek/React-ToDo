import styles from '../styles/Header.module.css';

const Header = () => (
  <header style={styles} className={styles.header}>
    <h1>todos</h1>
    <p>Items will persist in the browsers local storage</p>
  </header>
);
export default Header;