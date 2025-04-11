import styles from './ArtistPage.module.css'

import { Songs } from './Songs/Songs.jsx'
import { Albums } from './Albums/Albums.jsx'
import NavBar from '../Nav Bar/NavBar.jsx'

import { Sidebar } from '../Sidebar/Sidebar.jsx';
import { PlaybackControls } from '../Dashboard/PlaybackControls/PlaybackControls.jsx';
import { SongCarousel } from '../Dashboard/SongCarousel/SongCarousel.jsx';
import { TopBar } from '../Dashboard/TopBar/TopBar.jsx';
import { ArtistInfo } from './Info/ArtistInfo.jsx'
import React, { useState } from 'react';



function ArtistPage() {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    return (
        <div className={styles.app}>
            <Sidebar />

            <div className={styles.mainContent}>
                <TopBar 
                    showDropdown={showDropdown} 
                    setShowDropdown={setShowDropdown} 
                />
                
                <main className={styles.contentArea}>
                    <ArtistInfo />
                    <div className={styles.artist_content} >
                        <Songs />
                        <Albums />
                    </div>
                    {/* <h1 className={styles.welcomeText}>Welcome Back</h1>
                    <SongCarousel 
                    currentIndex={currentSongIndex}
                    setCurrentIndex={setCurrentSongIndex}
                    isPlaying={isPlaying}
                    /> */}
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
    )
}

export default ArtistPage