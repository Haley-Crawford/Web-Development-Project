import React, { useState, useEffect, useRef } from 'react';
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, ListMusic, Volume2, Heart } from 'lucide-react';
import styles from './PlaybackControls.module.css';

// interface PlaybackControlsProps {
//   isPlaying: boolean;
//   setIsPlaying: (playing: boolean) => void;
//   currentSongIndex: number;
//   setCurrentSongIndex: (index: number) => void;
//   totalSongs: number;
// }

export function PlaybackControls({ 
  audioRef,
  isPlaying, 
  setIsPlaying, 
  currentSongIndex, 
  setCurrentSongIndex,
  totalSongs 
}) {

  const [isLiked, setIsLiked] = useState(false)

  const handlePrevious = () => {
    setCurrentSongIndex(prev => (prev === 0 ? totalSongs - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSongIndex(prev => (prev === totalSongs - 1 ? 0 : prev + 1));
  };

  const handlePlayPause = () => {

    if(isPlaying){

        audioRef.current.pause();
        setIsPlaying(false);

    }else {

        audioRef.current.play();
        setIsPlaying(true);
    };

  };

  const handleLike = () => {
    setIsLiked(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Currently Playing */}
        <div className={styles.nowPlaying}>
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="Now Playing" 
            className={styles.albumArt}
          />
          <div className={styles.songInfo}>
            <h3 className={styles.songTitle}>Song Title</h3>
            <p className={styles.artistName}>Artist Name</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className={styles.controls}>
          <div className={styles.buttons}>
            <button className={styles.controlButton}>
              <Shuffle className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton} onClick={handlePrevious}>
              <SkipBack className={styles.controlIcon} />
            </button>
            <button 
              className={styles.playButton}
              onClick={handlePlayPause}
              // onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className={styles.playIcon} />
              ) : (
                <Play className={`${styles.playIcon} ${styles.playIconOffset}`} />
              )}
            </button>
            <button className={styles.controlButton} onClick={handleNext}>
              <SkipForward className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton}>
              <Repeat className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton} onClick={handleLike}>
              <Heart className={`${styles.controlIcon} ${isLiked ? styles.like : ''}`} />
            </button>
          </div>
          <div className={styles.progressBar}>
            <span className={styles.time}>0:00</span>
            <div className={styles.progress}>
              <div className={styles.progressFill}></div>
            </div>
            <span className={styles.time}>3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className={styles.volume}>
          <button className={styles.controlButton}>
            <ListMusic className={styles.controlIcon} />
          </button>
          <button className={styles.controlButton}>
            <Volume2 className={styles.controlIcon} />
          </button>
          <div className={styles.volumeBar}>
            <div className={styles.volumeFill}></div>
          </div>
        </div>
      </div>
    </div>
  );
}