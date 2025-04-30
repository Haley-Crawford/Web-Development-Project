import React from 'react'
import styles from './Profile.module.css'


export function Profile() {
    return (   
        <div className={styles.profile}>
            <img src='https://picsum.photos/250' alt='' className={styles.img} />
        </div>
    )
}