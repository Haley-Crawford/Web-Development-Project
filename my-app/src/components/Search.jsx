import React, {useState, useRef} from "react"
import { Songs } from './Artist Page/Songs/Songs'

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

function Search({searchResults, setSearchResults, audioRef, audioPlaying, setAudioPlaying, setTrack, trackQueue, setTrackQueue}) {
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

      console.log("Queue too big");
    }

  };


  return (
      <div id="searchResults">
        {searchResults ? <Songs songs={searchResults} setSongs={setSearchResults} audioRef={audioRef} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} setTrack={setTrack} trackQueue={trackQueue} setTrackQueue={setTrackQueue} style={{height: "100%"}}/>: <div style={{color:"white"}}>loading...</div>}
      </div>
  );
}

export default Search;
