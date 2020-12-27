import { allPhotos } from './constants';
import classnames from 'classnames';
import React from 'react';
import styles from './Photos.module.css';
import ImageFadeIn from 'react-image-fade-in';

export default function Photos() {
  return (
    <div className={styles.photoContainer}>
      <ul className={styles.photoList}>
        {allPhotos.map((photo, index) => {
          const { title, description, src } = photo;
          return (
            <li key={index} className={styles.photoListItem}>
              <div className={styles.content}>
                <div className={styles.contentOverlay}></div>
                <ImageFadeIn
                  className={classnames(styles.photo, styles.contentImage)}
                  src={src}
                  opacityTransition={1}
                />

                <div className={classnames(styles.contentDetails, styles.fadeInTop)}>
                  {title && <h3>{title}</h3>}
                  {description && <p>{description}</p>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
