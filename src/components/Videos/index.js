import { allVideos } from './constants';
import globalStyles from '../../App.css';
import React from 'react';
import styles from './Videos.module.css';

export default function Videos() {
  return (
    <div className={styles.videoContainer}>
      {allVideos.map((video) => {
        const { title, subtitle, src } = video;

        return (
          <div className={styles.video}>
            <div className={styles.videoTitle}>{title}</div>
            <div className={styles.videoSubtitle}>{subtitle}</div>
            <iframe
              width="420"
              height="236"
              src={src}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
