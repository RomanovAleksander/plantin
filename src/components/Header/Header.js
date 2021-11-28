import logo from '../../assets/logo.svg';
import search from '../../assets/header/search_input_small.svg';
import avatar from '../../assets/header/avatar.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <a className={styles.navItem} href="#">Discover</a>
          <a className={styles.navItem} href="#">My Plants</a>
          <a className={styles.navItem} href="#">Diseases</a>
          <a className={styles.navItem} href="#">Blog</a>
          <a className={styles.navItem} href="#">FAQ</a>
          <a className={styles.navItem} href="#">Contact Us</a>
        </nav>
      </div>
      <div className={styles.headerItem}>
        <button className={styles.btn}>
          <img src={search} alt="Search"/>
        </button>
        <button className={styles.btn}>
          <img src={avatar} alt="Avatar"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
