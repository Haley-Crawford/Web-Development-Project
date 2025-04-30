import React, { useState } from 'react';

import styles from './ArtistPage.module.css'
import { Artist } from './Artist/Artist.jsx'
import { SongCard } from './Song Card/SongCard.jsx';



export function ArtistPage({ artist, favoriteSongs, setFavoriteSongs }) {
    console.log(artist)
    const [currSong, setCurrSong] = useState(null)
    const [toggleSong, setToggleSong] = useState(false)
    const [songs, setSongs] = useState([artist[0].tracks])

    const handleToggle = (i) => {
        if (currSong == i) {
            setToggleSong(!toggleSong)
        } else {
            setToggleSong(true)
            setCurrSong(i)
        }
    }

    return (                
        <main className={styles.contentArea}>
            <section className={styles.artistSection}>
                <Artist 
                    artist={artist}
                    songs={songs} 
                    setSongs={setSongs}
                    favoriteSongs={favoriteSongs}
                    setFavoriteSongs={setFavoriteSongs} 
                    handleToggle={handleToggle}
                    title='Popular Songs'
                />
            </section>
            {toggleSong && (
                <section className={styles.songCard} >
                    <SongCard/>
                </section>
            )}
            
        </main>
    )
}