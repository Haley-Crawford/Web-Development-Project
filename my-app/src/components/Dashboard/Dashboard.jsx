import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from './TopBar/TopBar';
import { PlaybackControls } from './PlaybackControls/PlaybackControls';
import { SongCarousel } from './SongCarousel/SongCarousel';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // const playlists = [
  //   { id: 1, name: 'Favorite Songs', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200' },
  //   { id: 2, name: 'Rock Classics', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=200&h=200' },
  //   { id: 3, name: 'Chill Vibes', imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=200&h=200' },
  // ];

  return (
    <div className={styles.app}>
      <Sidebar />
      
      <div className={styles.mainContent}>
        <TopBar 
          showDropdown={showDropdown} 
          setShowDropdown={setShowDropdown} 
        />
        
        <main className={styles.contentArea}>
          <h1 className={styles.welcomeText}>Welcome Back</h1>
          <SongCarousel 
            currentIndex={currentSongIndex}
            setCurrentIndex={setCurrentSongIndex}
            isPlaying={isPlaying}
          />
        </main>

        <PlaybackControls 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          totalSongs={5}
        />
      </div>
    </div>
  );
}

export default Dashboard