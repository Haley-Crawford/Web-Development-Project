import React from 'react'
import { Global, css } from '@emotion/react'
import { FaRegHeart as Heart, FaPlusCircle as Like } from 'react-icons/fa'
import styled from '@emotion/styled'
import { HeartBroken, PlusOne } from '@mui/icons-material'
import styles from './Songs.module.css'



function generateSong(n) {
    let songs = []

    for (let _ = 0; _ < n; _++) {
        songs.push(
            <div className={styles.song}>
                <div className={styles.img_div}>
                    <img src='https://picsum.photos/40' alt='' className={styles.song_img}/>
                </div>
                <div className={styles.song_info}>
                    <p className={styles.song_name}>Song Name</p>
                    <p className={styles.album_info}>Album Name • {new Date().getMonth()} {new Date().getFullYear()}</p>
                </div>
                <div className={styles.song_choices}>
                    <button className={`${styles.song_like} ${styles.choice_btn}`}>
                        <Like className={styles.icon} />
                    </button>
                    <button className={`${styles.song_favorite} ${styles.choice_btn}`}>
                        <Heart className={styles.icon} />
                    </button>
                </div>
            </div>
        )
    }

    return songs
}


export function Songs() {
    const songs = generateSong(12)
    return (
        <div className={styles.song_container}>
            <p className={styles.title}>Popular Songs</p>
            <div className={styles.song_list}>    
                {songs}
            </div>
        </div>
    )

}