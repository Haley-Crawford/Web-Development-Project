import React, { useEffect, useRef, useState } from 'react'

import { originalSongs as albums } from '../../Dashboard/SongCarousel/SongCarousel';

import styles from './Albums.module.css';


export function Albums() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [displayedAlbums, setDisplayedAlbums] = useState([]);
    const timeoutRef = useRef(null);
    const transitionRef = useRef(true);

    useEffect(() => {
    // Initialize with duplicated songs for continuous scrolling
        const duplicatedAlbums = [...albums, ...albums.map(album => ({
        ...album,
        id: album.id + albums.length
        }))];
        setDisplayedAlbums(duplicatedAlbums);
    }, []);

    const resetTimeout = () => {
        if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (!displayedAlbums.length) return; //|| !isPlaying
        
        resetTimeout();
        
        timeoutRef.current = window.setTimeout(() => {
        if (currentIndex >= albums.length - 1) {
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
    }, [currentIndex, displayedAlbums.length]); //isPlaying, setCurrentIndex

    const getCardClassName = (index) => {
        let className = styles.albumCard;
        if (index === currentIndex) {
        className += ` ${styles.active}`;
        }
        return className;
    };

    if (!displayedAlbums.length) return null;

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
                    {displayedAlbums.map((album, index) => (
                        <div 
                            key={album.id}
                            className={getCardClassName(index)}
                        >
                            <img
                            src={album.imageUrl}
                            alt={album.title}
                            className={styles.albumImage}
                            />
                            <div className={styles.albumInfo}>
                                <h3 className={styles.albumTitle}>{album.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}