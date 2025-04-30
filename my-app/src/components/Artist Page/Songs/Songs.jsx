import React, { useState, useEffect } from 'react'
import { Heart, CirclePlus, Play } from 'lucide-react'
import styles from './Songs.module.css'
import { SongLike } from './SongLike'


export function Songs({ songs, setSongs, audioRef, audioPlaying, setAudioPlaying, setTrack, trackQueue, setTrackQueue, fav }) {

    // const [songs, setSongs] = useState([
    //     {id: 1, title: `Song 1`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 2, title: `Song 2`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 3, title: `Song 3`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 4, title: `Song 4`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false},
    //     {id: 5, title: `Song 5`, album: 'Album Name', release: new Date().getFullYear(), isLiked: false}
    // ])


    const handlePlay = (song) => {
    
        const ref = audioRef.current;

        if(audioPlaying){

            ref.pause();
            ref.src = song.audio;
            setTrack(song);
            setTrackQueue(prevQueue => {
                const newQueue = [...prevQueue];
                newQueue[0] = song;
                return newQueue;
            })
            const newQueue = [...trackQueue];
            newQueue[0] = song;
            console.log(`new queue: ${newQueue.map(item => item.name)}`)
            ref.play();

        } else {

            ref.src = song.audio;
            setTrack(song)
            setTrackQueue([song])
            console.log(`new queue: ${[song.name]}`)
            ref.play();
            setAudioPlaying(true);
        }

    }

    const handleQueue = (song) => {

        const curQueue = trackQueue;
        if(curQueue.length < 10){

            setTrackQueue(prevQueue => [...prevQueue, song]);
            const newQueue = [...trackQueue, song]
            console.log(`new queue: ${newQueue.map(item => item.name)}`)
        }else {
            console.log("queue too long");
        }
    };
    if (!Array.isArray(songs)) return null;

    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>{fav? "Favorited Songs": "Popular Songs"}</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => 
                    <li className={styles.song} key={song.id}>
                        <div className={styles.img_div} onClick={() => {handlePlay(song)}}>
                            <button style={{cursor: "pointer", background: 'none', border: 'none'}} className={styles.img_btn}>
                                <img src={song.album_image} alt='song image' className={styles.song_img} />
                                <Play className={styles.play}/> 
                            </button>
                        </div>
                        <div className={styles.song_info}>
                            <p className={styles.song_name}>{song.name}</p>
                            <p className={styles.album_info}>{song.artist_name} • {song.album_name} • {song.releasedate}</p>
                        </div>
                        <button className={styles.btn} style={{right: "50px"}}>
                            <CirclePlus className={styles.icon} onClick={() => {handleQueue(song)}} style={{cursor: "pointer"}} />
                        </button>
                        <button className={styles.btn} style={{cursor: "pointer"}}>
                            <SongLike song={song} className={styles.icon} fav={fav} />
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )

}