import React from 'react'
import styles from './SongCard.module.css'
import { Play } from 'lucide-react'

export function SongCard() {
    return (
        <div className={styles.container}>
            <img src='https://picsum.photos/450' alt='' className={styles.img}/>
            <p className={styles.name}>Song Name</p>
            <div className={styles.credits}>
                <strong>Credits</strong><br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Delectus veniam omnis ducimus optio nam nobis ratione voluptatum quam perferendis, 
                explicabo sunt laudantium architecto eos aut harum, reprehenderit distinctio sed laboriosam?
            </div>
            <div className={styles.queued}>
                <strong><p>Next in queue</p></strong><br/>
                <div className={styles.queuedSong}>
                    <img src='https://picsum.photos/60' alt='' className={styles.queueImg} />
                    <Play className={styles.play} />
                    <div className={styles.queueInfo}>
                        <p>Song Name</p>
                        <p className={styles.queueArtist} >Artist Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}