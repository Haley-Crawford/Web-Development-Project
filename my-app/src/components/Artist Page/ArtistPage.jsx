import styles from './ArtistPage.module.css'

import { Songs } from './Songs/Songs.jsx'
import { Albums } from './Albums/Albums.jsx'
import NavBar from '../Nav Bar/NavBar.jsx'

import { Sidebar } from '../Sidebar/Sidebar.jsx';
import { PlaybackControls } from '../Dashboard/PlaybackControls/PlaybackControls.jsx';
import { SongCarousel } from '../Dashboard/SongCarousel/SongCarousel.jsx';
import { TopBar } from '../Dashboard/TopBar/TopBar.jsx';
import { Artist } from './Artist/Artist.jsx'
import React, { useState } from 'react';
import { SongCard } from './Song Card/SongCard.jsx';



function ArtistPage() {
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    return (                
        <main className={styles.contentArea}>
            <section className={styles.artist}>
                <Artist />
            </section>
            <section className={styles.song_card}>
                <SongCard />
            </section>
        </main>
    )
}

export default ArtistPage