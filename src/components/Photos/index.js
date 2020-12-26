import { allPhotos } from './constants';
import React from 'react';
import styles from './Photos.module.css';

export default function Photos() {
  return (
    <div className={styles.photoContainer}>
      {allPhotos.map((photo) => {
        const { title, subtitle, src } = photo;

        return <img className={styles.photo} src={src} />;
      })}
    </div>
  );
}
