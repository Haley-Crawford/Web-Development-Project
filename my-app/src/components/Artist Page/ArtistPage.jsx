import React, { useState } from 'react';

import styles from './ArtistPage.module.css'

import { Artist } from './Artist/Artist.jsx'

import { SongCard } from './Song Card/SongCard.jsx';



export function ArtistPage() {

    const [songs, setSongs] = useState([
        {id: 1, name: `Song 1`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 2, name: `Song 2`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 3, name: `Song 3`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 4, name: `Song 4`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 5, name: `Song 5`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false}
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