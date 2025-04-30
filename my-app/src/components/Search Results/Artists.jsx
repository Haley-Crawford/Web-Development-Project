import React from 'react'
import styles from './Artists.module.css'
import { Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Artists = ({ artists, setFilterWord, setCurrArtist }) => {

    const nav = useNavigate()

    const handleClick = (artist) => {
        setCurrArtist(artist)
        setFilterWord('artists/tracks')
        nav('/artist')
    }

    if (!Array.isArray(artists)) return null

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Artist Results</h1>
          <div className={styles.artistList}>
            {artists.map((artist) => (
              <div key={artist.id} className={styles.artistCard}>
                <button onClick={() => {handleClick(artist.name)}}>
                    <img src={artist.image || 'https://picsum.photos/301/201' } alt={artist.name} className={styles.img}/>
                </button>
                <h2>{artist.name.length > 12 ? artist.name.slice(0,12) + '...' : artist.name}</h2>
                <div className={styles.info}>
                    <p>Founded: {artist.joindate ? artist.joindate.slice(0,4) : 'Unknown'}</p>
                    <a href={artist.website} target='_blank' rel='noreferrer' className={styles.artistLink}><Globe/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}