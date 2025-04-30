import React from 'react';
import { Play } from 'lucide-react';
import styles from './TrendingSongs.module.css';

export const AudioCard = ({ image, title, artist }) => {
  return (
    <div className={styles.audioCard}>
        <button>
            <img src={image} alt={`${title} cover`} className={styles.audioImage} />
            <Play className={styles.play}/> 
        </button>
        <div className={styles.audioInfo}>
            <h3 className={styles.audioTitle}>{title}</h3>
            <p className={styles.audioArtist}>{artist}</p>
        </div>
    </div>
  );
};