import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import styles from './Search.module.css'
import { Songs } from '../../../Artist Page/Songs/Songs'
import gif from '../../../../assets/banana.gif'

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

export function Search({searchResults, setSearchResults}) {
  const [searchInput, setSearchInput] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [trackObject, setTrack] = useState({});
  const audioRef = useRef(new Audio());
  const [trackQueue, setTrackQueue] = useState([]);

  const handleInputChange = (e) => {

    setSearchInput(e.target.value);

  };

  const handleSearchClick = async (e) => {
    console.log("nothing")
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
      <div id='searchResults'>
        {searchResults.length > 1 
        ? <Songs 
            songs={searchResults} 
            setSongs={setSearchResults} 
            style={{height: "100%"}}
          />
        : <div className={styles.notFound}>
            <img src={gif} alt='' className={styles.img}/>
            <h1 className={styles.msg}>Uh Oh...</h1>
            <p className={styles.txt}>We don't have that in our database</p>
          </div>
        }
      </div>
  );
}