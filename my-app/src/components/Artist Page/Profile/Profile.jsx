import React from 'react'
import styles from './Profile.module.css'


export function Profile() {
    return (   
        <div className={styles.profile}>
            <img src='https://picsum.photos/250' alt='' className={styles.img} />
            <h1 className={styles.name}>Artist Name</h1>
        </div>
    )
}