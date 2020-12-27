import { NavLink } from 'react-router-dom';
import logo from '../../media/initials_black.svg';
import React from 'react';
import styles from './AppHeader.module.css';
import { useHistory } from 'react-router-dom';

export default function AppHeader() {
  const history = useHistory();

  function goHome() {
    history.push('/');
  }

  function isActive(page) {
    return (match, location) => {
      console.log(location, page);
      return page === location.pathname;
    };
  }

  return (
    <div className={styles.mainHeader}>
      <div className={styles.leftContent}>
        <img className={styles.logo} onClick={goHome} src={logo} alt="logo" />
      </div>
      <div className={styles.navLinkContainer}>
        <NavLink
          activeClassName={styles.activeNavLink}
          isActive={isActive('/about')}
          className={styles.navLink}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          activeClassName={styles.activeNavLink}
          isActive={isActive('/photos')}
          className={styles.navLink}
          to="/photos"
        >
          Photos
        </NavLink>
        <NavLink
          activeClassName={styles.activeNavLink}
          isActive={isActive('/videos')}
          className={styles.navLink}
          to="/videos"
        >
          Vlogs
        </NavLink>
      </div>
    </div>
  );
}
