import React from 'react'

//import { Heart, Like } from '../../Icons'
import { FaHeart } from 'react-icons/fa'
import styles from './ArtistInfo.module.css'
import { FaRegHeart as Heart, FaPlusCircle as Like } from 'react-icons/fa'


function createImage() {
    return [
        <div className={styles.img_div} >
            <img src='https://picsum.photos/250' alt='' className={styles.img} />
        </div>
    ]
}

function like() {
    return [
        <div className={styles.like} >
            <p>Click here to like!</p>
            <button className={styles.btn} >
                <Heart className={styles.icon} />
            </button>
        </div>
    ]
}

function follow() {
    return [
        <div className={styles.follow} >
            <p>Click here to follow!</p>
            <button className={styles.btn} >
                <Like className={styles.icon} />
            </button>
        </div>
    ]
}

function info() {
    return [
        <div className={styles.info}>
            <p className={styles.name}>Artist Name</p>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    ]
}

export function ArtistInfo() {
    const image = createImage()
    const likeSong = like()
    const followArtist = follow()
    const artistInfo = info()
    return (   
        <div className={styles.container} >
            <div className={styles.wrapper}>
                {image}
                <div className={styles.choices} >          
                    {likeSong}
                    {followArtist}
                </div>
            </div>
            <div className={styles.info_div}>
                {artistInfo}
            </div>
        </div>
    )
}