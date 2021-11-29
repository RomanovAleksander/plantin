import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import search from '../../assets/header/search_input_small.svg';
import avatar from '../../assets/header/avatar.svg';
import menu from '../../assets/header/menu.svg';
import styles from './Header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const focusSearchInput = () => {
    const element = document.querySelector('#search');
    if (element !== null) element.focus();
  }

  const toggleMenu = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
          <a className={styles.navItem} href="#">Discover</a>
          <a className={styles.navItem} href="#">My Plants</a>
          <a className={styles.navItem} href="#">Diseases</a>
          <a className={styles.navItem} href="#">Blog</a>
          <a className={styles.navItem} href="#">FAQ</a>
          <a className={styles.navItem} href="#">Contact Us</a>
        </nav>
      </div>
      <div className={styles.headerItem}>
        <button className={styles.btn} onClick={focusSearchInput}>
          <img src={search} alt="Search"/>
        </button>
        <button className={`${styles.avatar} ${styles.btn}`}>
          <img src={avatar} alt="Avatar"/>
        </button>
        <button className={`${styles.menuBtn} ${styles.btn}`}
                onClick={toggleMenu}
        >
          <img src={menu} alt="Menu"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
