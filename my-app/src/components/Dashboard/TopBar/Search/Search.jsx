import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Songs } from '../../../Artist Page/Songs/Songs'
import { Albums } from '../../../Search Results/Albums'
import { Artists } from '../../../Search Results/Artists'
import styles from './Search.module.css'
import gif from '../../../../assets/banana.gif'

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

export function Search({
  searchResults,
  setSearchResults, 
  audioRef, 
  audioPlaying, 
  setAudioPlaying, 
  setTrack, 
  trackQueue, 
  setTrackQueue, 
  filterWord, 
  isSearching,
  setFavoriteSongs,
  setCurrArtist
  }) {

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {

    setSearchInput(e.target.value);

  };

  const handleSongPlay = (trackOb) => {

    setTrack(trackOb)

    if(audioPlaying){

      audioRef.current.pause();
    };

    audioRef.current.src = trackOb.audio;
    audioRef.current.play();
    setAudioPlaying(true);

  };

  const handleQueue = (trackOb) => {

    if(trackQueue.length < 10){

      setTrackQueue(prevQueue => [...prevQueue, trackOb]);
      console.log(`new queue `)

    }else {

      console.log('Queue too big');
    }

  };

  return (
      <div className={styles.results} id='searchResults'>
        {isSearching 
        ? <div className={styles.bouncing_dots}>
            <span className={styles.bouncing_dot}>.</span>
            <span className={styles.bouncing_dot}>.</span>
            <span className={styles.bouncing_dot}>.</span>
            <span className={styles.bouncing_dot}>.</span>
          </div>
        : searchResults.length > 1 
          ? filterWord === 'tracks' 
            ? (<Songs 
                songs={searchResults} 
                setSongs={setSearchResults} 
                audioRef={audioRef}
                audioPlaying={audioPlaying}
                setAudioPlaying={setAudioPlaying}
                setTrack={setTrack}
                trackQueue={trackQueue}
                setTrackQueue={setTrackQueue}
                setFavoriteSongs={setFavoriteSongs}
                style={{height: "100%"}}
            />)
            : filterWord === 'artists'
              ? (<Artists 
                  artists={searchResults}
                  setCurrArtist={setCurrArtist}
                  style={{height: '100%'}}
                />)
              : filterWord === 'albums'
                ? (<Albums 
                    albums={searchResults}
                    style={{height: '100%'}}
                  />)
                : null
          : <div className={styles.notFound}>
            <img src={gif} alt='' className={styles.img}/>
            <h1 className={styles.msg}>Uh Oh...</h1>
            <p className={styles.txt}>We don't have that in our database</p>
          </div>
        }
      </div>
  );
}