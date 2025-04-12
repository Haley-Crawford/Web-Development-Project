import React, { useState, useEffect, useRef } from 'react';
import styles from './SongCarousel.module.css';

export const originalSongs = [
  {
    id: 1,
    title: "Summer Nights",
    artist: "Dream Wave",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    title: "Electric Dreams",
    artist: "Neon Pulse",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    title: "Midnight Drive",
    artist: "Urban Echo",
    imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 4,
    title: "Ocean Breeze",
    artist: "Coastal Rhythm",
    imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 5,
    title: "City Lights",
    artist: "Metro Beat",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export function SongCarousel({ currentIndex, setCurrentIndex }) {
  //const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedSongs, setDisplayedSongs] = useState([]);
  const timeoutRef = useRef(null);
  const transitionRef = useRef(true);

  useEffect(() => {
    // Initialize with duplicated songs for continuous scrolling
    const duplicatedSongs = [...originalSongs, ...originalSongs.map(song => ({
      ...song,
      id: song.id + originalSongs.length
    }))];
    setDisplayedSongs(duplicatedSongs);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (!displayedSongs.length) return;
    
    resetTimeout();
    
    timeoutRef.current = window.setTimeout(() => {
      if (currentIndex >= displayedSongs.length - 1) {
        // Reset to the beginning without animation
        transitionRef.current = false;
        setCurrentIndex(0);
        setTimeout(() => {
          transitionRef.current = true;
        }, 50);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, setCurrentIndex, displayedSongs.length]); //isPlaying, setCurrentIndex

  const getCardClassName = (index) => {
    let className = styles.songCard;
    if (index === currentIndex) {
      className += ` ${styles.active}`;
    }
    return className;
  };

  if (!displayedSongs.length) return null;

  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.welcomeText}>Welcome Back</h1>
      <div 
        className={styles.carousel}
        style={{
          transform: `translateX(-${currentIndex * 240}px)`,
          transition: transitionRef.current ? 'transform 0.5s ease-in-out' : 'none'
        }}
      >
        {displayedSongs.map((song, index) => (
          <div 
            key={song.id}
            className={getCardClassName(index)}
          >
            <img
              src={song.imageUrl}
              alt={song.title}
              className={styles.songImage}
            />
            <div className={styles.songInfo}>
              <h3 className={styles.songTitle}>{song.title}</h3>
              <p className={styles.artistName}>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}