import React, { useState } from 'react';

import styles from './ArtistPage.module.css'
import { Artist } from './Artist/Artist.jsx'
import { SongCard } from './Song Card/SongCard.jsx';



export function ArtistPage({ artist, songs, setSongs, favoriteSongs, updateFavorites }) {

    return (                
        <main className={styles.contentArea}>
            <section className={styles.artistSection}>
                <Artist 
                    artist={artist}
                    songs={songs} 
                    setSongs={setSongs}
                    favoriteSongs={favoriteSongs} 
                    updateFavorites={updateFavorites}
                    title='Popular Songs'
                />
            </section>
            <section className={styles.songCard} >
                <SongCard/>
            </section>
        </main>
    )
}