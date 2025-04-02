import React, {useState} from "react"
import Soundbar from "./Soundbar.jsx"


const apiKey = process.env.REACT_APP_JAMENDO_KEY;

function Search({audioRef, trackQueue, setTrackQueue, audioPlaying, setAudioPlaying, setTrack}) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {

    setSearchInput(e.target.value);

  };

  const handleSearchClick = async (e) => {
    console.log(`searching for ${searchInput}`)
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

    setTrack(trackOb);
    setTrackQueue(prevQueue => {
      const newQueue = [...prevQueue];
      newQueue[0] = trackOb;

      return newQueue;
    })

    if(audioPlaying){

      audioRef.current.pause();
    };

    audioRef.current.src = trackOb.audio;
    audioRef.current.play();
    setAudioPlaying(true);

  };

  const handleQueue = (trackOb) => {
    console.log(`queue: ${trackQueue.map(track => {return track.name})}`)

    if(trackQueue.length < 10){

      setTrackQueue(prevQueue => {
        const newQueue = [...prevQueue];
        newQueue.push(trackOb);
      });
      console.log(`new queue ${trackQueue}`)

    }else {

      console.log("Queue too big");
    }

  };


  return (
    <>
      <div id="searchDiv">
        <input id="searchBar" value={searchInput} onChange={handleInputChange}></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      
      <div id="searchResults">
        {searchResults.map((track) => (
          <div key={track.name + "|" + track.artist_id}>
            <span>{track.name} by {track.artist_name} <button onClick={() => handleSongPlay(track)}>Play</button> <button onClick={() => handleQueue(track)}>Queue</button></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
