import React from 'react'
//import { Heart, Like } from './Icons'
import styles from './Albums.module.css'

function generateAlbum(n) {
    let albums = []

    for (let _ = 0; _ < n; _++) {
        albums.push(
            // <div className={styles.album_flex}>
                <div className={styles.album_img_div}>
                    <img src='https://picsum.photos/35' alt='' className={styles.album_img}/>
                </div>
            // </div>
        )
    }

    return albums
}

export default function AlbumsComponent() {
    const albums = generateAlbum(7)
    return (
        <>
            <div className={styles.album_container}>
                <p className={styles.title}>Albums</p>
                <div className={styles.album_list}>
                    {albums}
                </div>
            </div>
        </>
    )
}