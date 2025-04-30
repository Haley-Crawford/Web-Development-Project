import React from 'react';
import styles from './Albums.module.css'
import { Download, Info, Share2 } from 'lucide-react';

export const Albums = ({ albums }) => {

  if (!Array.isArray(albums)) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Album Results</h1>
      <div className={styles.albumList}>
        {albums.map((album) => (
          <div key={album.id} className={styles.albumCard}>
            <img src={album.image} alt={album.name} className={styles.img}/>
            <h2>{album.name.length > 12 ? album.name.slice(0, 15) + '...' : album.name}</h2>
            <p>Artist: {album.artist_name}</p>
            <p>Release Date: {album.releasedate}</p>
            <div className={styles.choices}>
              {album.zip_allowed && (
                <a href={album.zip} download>
                  <Download/>
                </a>
              )}
              <a href={album.shorturl} target="_blank" rel="noopener noreferrer">
                <Info/>
              </a>
              <a href={album.shareurl} target="_blank" rel="noopener noreferrer">
                <Share2/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};