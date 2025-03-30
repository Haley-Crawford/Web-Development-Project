import React, {useState, useRef} from "react"
import './App.css';
import Soundbar from "./Soundbar.jsx"

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [trackObject, setTrack] = useState({});
  const audioRef = useRef(new Audio());
  const [trackQueue, setTrackQueue] = useState([]);

  const handleInputChange = (e) => {

    setSearchInput(e.target.value);

  };

  const handleSearchClick = async (e) => {
    const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${apiKey}&format=jsonpretty&limit=5&search=${encodeURIComponent(searchInput)}`;
    try{

      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`API request failed with status ${response.status}`);
      };

      const data = await response.json();
      console.log(data.results);
      setSearchResults(data.results);
      

    }catch (err){
      console.log(err);
    }

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
    <div className="App">
      <div id="searchDiv">
        <input id="searchBar" value={searchInput} onChange={handleInputChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      
      <div id="searchResults">
        {searchResults.map((track) => (
          <div key={track.name + "|" + track.artist_id}>
            <span>{track.name} by {track.artist_name} <button onClick={() => handleSongPlay(track)}>Play</button> <button>Queue</button></span>
          </div>
        ))}
      </div>
      <Soundbar audioReference={audioRef} isPlaying={audioPlaying} setIsPlaying={setAudioPlaying} audioTrack={trackObject}></Soundbar>
    </div>
  );
}

export default App;
