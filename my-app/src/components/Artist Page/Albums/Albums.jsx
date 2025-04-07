import React, { useEffect, useRef, useState } from 'react'
//import { Heart, Like } from './Icons'

import { originalSongs } from '../../Dashboard/SongCarousel/SongCarousel';

//import { Heart, Like } from './Icons'
import styles from './Albums.module.css';

// const originalSongs = [
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

function generateAlbum(n) {
    let albums = []

    for (let _ = 0; _ < n; _++) {
        albums.push(
            // <div className={styles.album_flex}>
                <div className={styles.album_img_div}>
                    <img src='https://picsum.photos/100' alt='' className={styles.album_img}/>
                </div>
            // </div>
        )
    }

    return albums
}

export function Albums() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [displayedSongs, setDisplayedSongs] = useState([]);
    const timeoutRef = useRef(null);
    const transitionRef = useRef(true);
    //const albums = generateAlbum(7)

    useEffect(() => {
    // Initialize with duplicated songs for continuous scrolling
        const duplicatedSongs = [...originalSongs, ...originalSongs.map(song => ({
        ...song,
        id: song.id + originalSongs.length
        }))];
        setDisplayedSongs(duplicatedSongs);
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (!displayedSongs.length) return; //|| !isPlaying
        
        resetTimeout();
        
        timeoutRef.current = window.setTimeout(() => {
        if (currentIndex >= originalSongs.length - 1) {
            // Reset to the beginning without animation
            transitionRef.current = false;
            setCurrentIndex(0);
            setTimeout(() => {
            transitionRef.current = true;
            }, 50);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
        }, 2000);

        return () => {
        resetTimeout();
        };
    }, [currentIndex, displayedSongs.length]); //isPlaying, setCurrentIndex

    const getCardClassName = (index) => {
        let className = styles.songCard;
        if (index === currentIndex) {
        className += ` ${styles.active}`;
        }
        return className;
    };

    if (!displayedSongs.length) return null;

    return (
        <div className={styles.album_container}>
            <p className={styles.title}>Albums</p>
            <div className={styles.carousel_container}>
                <div 
                    className={styles.carousel}
                    style={{
                    transform: `translateX(-${currentIndex * 190}px)`,
                    transition: transitionRef.current ? 'transform 2s ease-in-out' : 'none'
                    }}
                >
                    {displayedSongs.map((song, index) => (
                        <div 
                            key={song.id}
                            className={getCardClassName(index)}
                        >
                            <img
                            src={song.imageUrl}
                            alt={song.title}
                            className={styles.songImage}
                            />
                            <div className={styles.songInfo}>
                            <h3 className={styles.songTitle}>{song.title}</h3>
                            {/* <p className={styles.artistName}>{song.artist}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}