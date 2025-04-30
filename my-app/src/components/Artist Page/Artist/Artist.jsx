import React, { useState, useEffect, useRef } from 'react'
import styles from './Artist.module.css'

import { Profile } from '../Profile/Profile'
import { Info } from '../Info/Info'
import { Songs } from '../Songs/Songs'
import { Albums } from '../Albums/Albums'



export function Artist({ songs, setSongs, title, handleToggle, favoriteSongs, setFavoriteSongs}) {
    const [color, setColor] = useState('#ffff')
    const [scrollRatio, setScrollRatio] = useState(0)
    const contentRef = useRef(null)

    const gradient = {
        background: `linear-gradient(${color}, black 80%)`
    }

    const profileStyle = {
        opacity: 1 - scrollRatio,
        //transform: `scale(${1 - scrollRatio * 0.2})`, // optional shrink effect
        height: `${100 - scrollRatio * 100}%`, // optional collapse effect
        transition: 'all 0.3s ease',
        overflow: 'hidden',
    };

    useEffect(() => {
        setColor('#' + Math. floor(Math. random()*16777215))
    }, []);

    useEffect(() => {
        const content = contentRef.current
        const handleScroll = () => {
            const scrollTop = content.scrollTop
            const maxScroll = 150
            const ratio = Math.min(scrollTop / maxScroll, 1)
            setScrollRatio(ratio)
        }

        content?.addEventListener('scroll', handleScroll)
        return () => content?.removeEventListener('scroll', handleScroll)
    }, [])


    return (   
        <div className={styles.container}>
            <section className={styles.profile}>
                <Profile />
            </section>
            <section 
                className={styles.content} 
                style={gradient} // ensure it's scrollable
            >
                <Info />
                <Songs 
                    songs={songs} 
                    setSongs={setSongs} 
                    favoriteSongs={favoriteSongs}
                    setFavoriteSongs={setFavoriteSongs}
                    title={title}
                    handleToggle={handleToggle}
                />
                <Albums />
            </section>
        </div>
    )
}