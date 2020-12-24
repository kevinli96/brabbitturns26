import { Link } from 'react-router-dom';
import logo from '../../svg/shutter_logo.svg';
import React from 'react';
import styles from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.leftContent}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.title}>Brandon Leung</span>
      </div>
      <div className={styles.navLinkContainer}>
        <Link className={styles.navLink} to="/about">
          About
        </Link>
        <Link className={styles.navLink} to="/photos">
          Photos
        </Link>
        <Link className={styles.navLink} to="/videos">
          Vlogs
        </Link>
      </div>
    </div>
  );
}
