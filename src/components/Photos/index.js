import React from 'react';
import styles from './Photos.module.css';

const MAX_PHOTO_NUMBER = 51;

const allPhotos = Array.from(Array(MAX_PHOTO_NUMBER).keys())
  .filter((number) => {
    try {
      require(`../../media/${number}.jpg`);
      return true;
    } catch (err) {
      console.log(`${number}.jpg does not exist`);
      return false;
    }
  })
  .map((number) => {
    return {
      title: 'Test title',
      src: require(`../../media/${number}.jpg`).default,
    };
  });

export default function Photos() {
  return (
    <div className={styles.photoContainer}>
      <ul className={styles.photoList}>
        {allPhotos.map((photo, index) => {
          const { title, src } = photo;
          return (
            <li key={index} className={styles.photoListItem}>
              <img alt={title} className={styles.photo} src={src} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
