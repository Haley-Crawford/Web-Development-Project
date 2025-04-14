import React, { useState } from 'react';

import styles from './ArtistPage.module.css'

import { Artist } from './Artist/Artist.jsx'

import { SongCard } from './Song Card/SongCard.jsx';



export function ArtistPage() {

    const [songs, setSongs] = useState([
        {id: 1, title: `Song 1`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 2, title: `Song 2`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 3, title: `Song 3`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 4, title: `Song 4`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 5, title: `Song 5`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false}
    ])

    return (                
        <main className={styles.contentArea}>
            <section className={styles.artistSection}>
                <Artist songs={songs} setSongs={setSongs} />
            </section>
            <section className={styles.songCard} >
                <SongCard/>
            </section>
        </main>
    )
}