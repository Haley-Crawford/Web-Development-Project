import React, {useState, useRef} from "react"


const apiKey = process.env.REACT_APP_JAMENDO_KEY;

function Search({searchResults}) {
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

      console.log("Queue too big");
    }

  };


  return (
      <div id="searchResults">
        {searchResults ? searchResults.map((track) => (
          <div key={track.name + "|" + track.artist_id}>
            <span>{track.name} by {track.artist_name} <button onClick={() => handleSongPlay(track)}>Play</button> <button>Queue</button></span>
          </div>
        )): <div style={{color:"white"}}>loading...</div>}
      </div>
  );
}

export default Search;
