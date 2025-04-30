import React from 'react'
import { Heart, CirclePlus } from 'lucide-react'
import styles from './Playlist.module.css'

export const Playlist = ({ songs, setSongs }) => {

    const handleLike = (id) => {
        const updatedSongs = songs.map(song => 
            song.id === id
            ? { ...song, isLiked: !song.isLiked } 
            : song
        )

        const filteredSongs = updatedSongs.filter((song) => song.isLiked)

        setSongs(filteredSongs)
    }


    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>Favorite Songs</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => 
                    <li className={styles.song} key={song.id}>
                        <div className={styles.img_div}>
                            <button style={{cursor: "pointer", background: 'none', border: 'none'}}>
                                <img src={song.album_image} alt='song image' className={styles.song_img} />
                            </button>
                        </div>
                        <div className={styles.song_info}>
                            <p className={styles.song_name}>{song.name}</p>
                            <p className={styles.album_info}>{song.artist_name} • {song.album_name} • {song.releasedate}</p>
                        </div>
                        <button className={styles.btn} style={{right: "50px"}}>
                            <CirclePlus className={styles.icon} style={{cursor: "pointer"}} />
                        </button>
                        <button className={styles.btn} onClick={() => handleLike(song.id)}>
                            <Heart className={`${styles.icon} ${song.isLiked ? styles.like : ''}`}/>
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}