import React, { useState, useEffect } from 'react'
import { Heart, CirclePlus, Play } from 'lucide-react'
import styles from './Songs.module.css'


export function Songs({ 
    songs, 
    setSongs,
    audioRef,
    audioPlaying,
    setAudioPlaying,
    setTrack,
    trackQueue,
    setTrackQueue,
    setFavoriteSongs,
    title,
    onLike
 }) {

    // const songs = [
    //     {
    //       id: 1,
    //       title: "Summer Nights",
    //       artist: "Dream Wave",
    //       imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400&h=400"
    //     },
    //     {
    //       id: 2,
    //       title: "Electric Dreams",
    //       artist: "Neon Pulse",
    //       imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400&h=400"
    //     },
    //     {
    //       id: 3,
    //       title: "Midnight Drive",
    //       artist: "Urban Echo",
    //       imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=400&h=400"
    //     },
    //     {
    //       id: 4,
    //       title: "Ocean Breeze",
    //       artist: "Coastal Rhythm",
    //       imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=400&h=400"
    //     },
    //     {
    //       id: 5,
    //       title: "City Lights",
    //       artist: "Metro Beat",
    //       imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400&h=400"
    //     }
    //   ];

    const handleLike = (id) => {
        const updatedSongs = songs.map(song => 
            song.id === id
            ? { ...song, isLiked: !song.isLiked } 
            : song
        )

        setSongs && setSongs(updatedSongs)

        const filteredSongs = updatedSongs.filter((song) => song.isLiked)

        setFavoriteSongs(filteredSongs)
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

    return (
        <div className={styles.song_container}>
            <h2 className={styles.title}>Song Results</h2>
            <ol className={styles.song_list}>    
                {songs.map((song) => 
                    <li className={styles.song} key={song.id}>
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
                        <button className={styles.btn} onClick={() => handleLike(song.id)}>
                            <Heart className={`${styles.icon} ${song.isLiked ? styles.like : ''}`}/>
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )

}