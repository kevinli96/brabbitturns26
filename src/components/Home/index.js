import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <div className={styles.modalContent}>
          <div className={styles.title}>Happy 26th birthday Brandon!</div>
          <div className={styles.message}>
            2020 isn’t what any of us thought it would be, and though we can’t celebrate with you in person, we wanted
            to show you how much you mean to us. Here are some thoughts your friends through the years wanted to share
            with you today. We hope you have the best day, and though it’s not what you might have expected, that you
            enjoy this!
          </div>
        </div>
      </div>
    </div>
  );
}
