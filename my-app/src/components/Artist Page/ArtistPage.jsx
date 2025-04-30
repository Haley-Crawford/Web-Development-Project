import React, { useState } from 'react';

import styles from './ArtistPage.module.css'
import { Artist } from './Artist/Artist.jsx'
import { SongCard } from './Song Card/SongCard.jsx';



export function ArtistPage({ artist, songs, setSongs, favoriteSongs, updateFavorites }) {

    const {tracks, ...rest} = artist[0]
    const [currSong, setCurrSong] = useState(null)

    //console.log(artist)

    return (                
        <main className={styles.contentArea}>
            <section className={styles.artistSection}>
                <Artist 
                    artist={artist}
                    songs={tracks.slice(0,5)} 
                    setSongs={setSongs}
                    favoriteSongs={favoriteSongs} 
                    updateFavorites={updateFavorites}
                    title='Popular Songs'
                />
            </section>
            {currSong && (
                <section className={styles.songCard} >
                    <SongCard/>
                </section>
            )}
            
        </main>
    )
}