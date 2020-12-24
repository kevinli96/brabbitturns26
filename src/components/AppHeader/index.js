import { Link } from 'react-router-dom';
import logo from '../../media/initials_white.svg';
import React from 'react';
import styles from './AppHeader.module.css';
import { useHistory } from 'react-router-dom';

export default function AppHeader() {
  const history = useHistory();

  function goHome() {
    history.push('/');
  }

  return (
    <div className={styles.mainHeader}>
      <div className={styles.leftContent}>
        <img className={styles.logo} onClick={goHome} src={logo} alt="logo" />
      </div>
      <div className={styles.navLinkContainer}>
        <Link className={styles.navLink} to="/photos">
          Photos
        </Link>
        <Link className={styles.navLink} to="/videos">
          Vlogs
        </Link>
        <Link className={styles.navLink} to="/writings">
          Writings
        </Link>
      </div>
    </div>
  );
}
