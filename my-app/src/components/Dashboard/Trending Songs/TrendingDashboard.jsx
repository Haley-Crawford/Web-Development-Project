import React from 'react';
import { AudioCard } from './TrendingSongs'; 
import styles from './TrendingDashboard.module.css';

export const AudioDashboard = () => {
    
    const musicList = [
        {
          title: 'Lost in Japan',
          artist: 'Shawn Mendes',
          image: 'https://picsum.photos/300/201' 
        },
        {
          title: 'Blinding Lights',
          artist: 'The Weeknd',
          image: 'https://picsum.photos/301/200'
        },
        {
          title: 'Levitating',
          artist: 'Dua Lipa',
          image: 'https://picsum.photos/300/202'
        },
        {
          title: 'As It Was',
          artist: 'Harry Styles',
          image: 'https://picsum.photos/302/200'
        },
        {
          title: 'Pink Pony Club',
          artist: 'Chapelle Roan',
          image: 'https://picsum.photos/301/201'
        }
      ];

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardTitle}>Now Trending</h2>
            <div className={styles.audioList}>
                {musicList.map((track, index) => (
                    <AudioCard
                    key={`trending ${index}`}
                    image={track.image}
                    title={track.title}
                    artist={track.artist}
                    />
                ))}
            </div>
        </div>
    );
};