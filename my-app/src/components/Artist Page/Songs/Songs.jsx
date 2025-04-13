import React, { useState } from 'react'
import { FaRegHeart as Heart } from 'react-icons/fa'
import styles from './Songs.module.css'



function GenerateSong(n) {

    // const [isLiked, setIsLiked] = useState(null)

    

    // const handleLike = (index) => {
    //     setIsLiked(index)
    //     handleAddSong(index)
    // }

    

    //let songs = []

    // for (let i = 0; i < n; i++) {
    //     songs.push(
    //         <div className={styles.song} key={}>
    //             <div className={styles.img_div}>
    //                 <img src='https://picsum.photos/40' alt='' className={styles.song_img}/>
    //             </div>
    //             <div className={styles.song_info}>
    //                 <p className={styles.song_name}>Song Name</p>
    //                 <p className={styles.album_info}>Album Name • {new Date().getMonth()} {new Date().getFullYear()}</p>
    //             </div>
    //             <button className={styles.btn} onClick={() => handleAddSong()}>
    //                 <Heart className={`${styles.icon} ${likedSongs.includes(i) ? styles.like : ''}`}/>
    //             </button>
    //         </div>
    //     )
    // }

    //return songs
}


export function Songs() {

    const [songs, setSongs] = useState([
        {id: 1, title: `Song 1`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 2, title: `Song 2`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 3, title: `Song 3`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 4, title: `Song 4`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
        {id: 5, title: `Song 5`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false}
    ])

    
    //const [likedSongs, setLikedSongs] = useState([])


    const handleLike = (id) => {
        const updatedSongs = songs.map(song => song.id === id ? { ...song, isLiked: !song.isLiked } : song)

        setSongs(updatedSongs)
        // setLikedSongs([...songs, song])
        // console.log(likedSongs)
    }
    //const songs = GenerateSong(5)
    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>Popular Songs</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => (
                    <li className={styles.song} key={song.id}>
                        <div className={styles.img_div}>
                            <img src='https://picsum.photos/40' alt='' className={styles.song_img}/>
                        </div>
                        <div className={styles.song_info}>
                            <p className={styles.song_name}>{song.title}</p>
                            <p className={styles.album_info}>{song.album} • {new Date().getMonth()} {song.release}</p>
                        </div>
                        <button className={styles.btn} onClick={() => handleLike(song.id)}>
                            <Heart className={`${styles.icon} ${song.isLiked ? styles.like : ''}`}/>
                        </button>
                    </li>
                ))}
            </ol>
            <p>See more</p>
        </div>
    )

}