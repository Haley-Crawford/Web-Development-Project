import React, { useState, useEffect } from 'react'
import { Heart, CirclePlus, Play } from 'lucide-react'
import styles from './Songs.module.css'
import { SongLike } from './SongLike'


export function Songs({ 
    songs, 
    setSongs,
    audioRef,
    audioPlaying,
    setAudioPlaying,
    setTrack,
    trackQueue,
    setTrackQueue,
    favoriteSongs,
    setFavoriteSongs,
    title,
    onLike,
    toggleSong,
    handleToggle
 }) {

    const handleLike = (id) => {
        console.log(id)
        const updatedSongs = songs.map(song => 
            song.id === id
            ? { ...song, isLiked: !song.isLiked } 
            : song
        )

        setSongs(updatedSongs)

        const filteredSongs = updatedSongs.filter((song) => song.isLiked)

        setFavoriteSongs([...favoriteSongs, filteredSongs])
    }

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

    if (!Array.isArray(songs)) return null;

    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>{fav? "Favorited Songs": "Popular Songs"}</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => 
                    <li className={styles.song} key={song.id} onClick={() => handleToggle(song.id)}>
                        <div className={styles.img_div}>
                            <button style={{cursor: "pointer", background: 'none', border: 'none'}} className={styles.img_btn}>
                                <img src={song.album_image} alt='song image' className={styles.song_img} onClick={() => {handlePlay(song)}} />
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