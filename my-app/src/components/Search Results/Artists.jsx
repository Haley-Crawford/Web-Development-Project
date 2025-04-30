import React from 'react'
import styles from './Artists.module.css'
import { Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Artists = ({ artists, setCurrArtist }) => {

    const nav = useNavigate()

    const handleClick = (artist) => {
        console.log(artist)
        setCurrArtist(artist)
        nav('/artist')
    }

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Artist Results</h1>
          <div className={styles.artistList}>
            {artists.map((artist) => (
              <div key={artist.id} className={styles.artistCard}>
                <button onClick={() => {handleClick(artist.name)}}>
                    <img src={artist.image} alt={artist.name} className={styles.img}/>
                </button>
                <h2>{artist.name.length > 12 ? artist.name.slice(0, 15) + '...' : artist.name}</h2>
                <div className={styles.info}>
                    <p>Founded: {artist.joindate.slice(0,4)}</p>
                    <a href={artist.website} target='_blank' rel='noreferrer' className={styles.artistLink}><Globe/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}