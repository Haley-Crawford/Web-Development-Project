import React, { useState } from 'react';
import { SongCarousel } from './SongCarousel/SongCarousel';
import { Category } from './Category/Category';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (        
    <main className={styles.contentArea}>
      <h1 className={styles.welcomeText}>Welcome Back</h1>
      <SongCarousel 
        currentIndex={currentSongIndex}
        setCurrentIndex={setCurrentSongIndex}
        isPlaying={isPlaying}
      />
      <Category />
    </main>)
}