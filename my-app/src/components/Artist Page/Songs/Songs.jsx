import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import styles from './Songs.module.css'


export function Songs({ songs, setSongs }) {

    // const [songs, setSongs] = useState([
    //     {id: 1, title: `Song 1`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 2, title: `Song 2`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 3, title: `Song 3`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 4, title: `Song 4`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 5, title: `Song 5`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false}
    // ])

    const handleLike = (id) => {
        const updatedSongs = songs.map(song => song.id === id ? { ...song, isLiked: !song.isLiked } : song)
        setSongs(updatedSongs)
    }

    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>Popular Songs</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => 
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