import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import styles from './Songs.module.css'


export function Songs({ songs, setSongs, updateFavorites, title, onLike }) {

    const handleLike = (id) => {
        const updatedSongs = songs.map(song => 
            song.id === id
            ? { ...song, isLiked: !song.isLiked } 
            : song
        )

        setSongs && setSongs(updatedSongs)

        updateFavorites(updatedSongs)
    }

    const displayedSongs = title === 'Favorites'
        ? songs.filter((song) => song.isLiked)
        : songs

    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>{title}</h2>
            <ol className={styles.song_list}>    
                {displayedSongs.map((song) => 
                    <li className={styles.song} key={song.id}>
                        <div className={styles.img_div}>
                            <img src={song.album_image} alt='song image' className={styles.song_img}/>
                        </div>
                        <div className={styles.song_info}>
                            <p className={styles.song_name}>{song.name}</p>
                            <p className={styles.album_info}>{song.album_name} • {song.releasedate}</p>
                        </div>
                        <button className={styles.btn} onClick={() => handleLike(song.id)}>
                            <Heart className={`${styles.icon} ${song.isLiked ? styles.like : ''}`}/>
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )

}