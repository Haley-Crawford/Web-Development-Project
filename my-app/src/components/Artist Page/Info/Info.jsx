import React, { useState } from 'react'
import styles from './Info.module.css'
import { FaRegHeart as Heart, FaPlusCircle as Like } from 'react-icons/fa'
import { Play, Shuffle } from 'lucide-react'


export function Info() {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }

    return (   
        <div className={styles.container} >
            <div className={styles.choices} >          
                <button className={styles.play}>
                    <Play className={styles.playIcon} />
                </button>
                <button className={styles.shuffle}>
                    <Shuffle className={styles.shuffleIcon} />
                </button>
                <button className={`${styles.follow} ${isFollowing ? styles.followOn : ''}`} onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
            </div>
        </div>
    )
}
