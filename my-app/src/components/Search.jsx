import React, {useState, useRef} from "react"
import { Songs } from './Artist Page/Songs/Songs'

const apiKey = process.env.REACT_APP_JAMENDO_KEY;

export function Search({songs, setSongs, searchResults, setSearchResults, favoriteSongs, updateFavorites}) {
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

  const mergeSongIntoList = (list, songToMerge) => {
    const exists = list.some(song => song.id === songToMerge.id);
    return exists
      ? list.map(song => song.id === songToMerge.id ? songToMerge : song)
      : [...list, songToMerge];
  }

  // Handle song like/unlike
  const handleLike = (songId) => {
    const updatedSongs = songs.map(song => {
      if (song.id === songId) {
        song.isLiked = !song.isLiked;
      }
      return song;
    });
    setSongs(updatedSongs); // Update the global state
    updateFavorites(updatedSongs); // Update favorites list
  }


  return (
      <div id="searchResults">
        {searchResults 
          ? <Songs 
              songs={searchResults} 
              setSongs={(newResults) => {
                setSearchResults(newResults);
  
                // Sync liked/unliked songs into global song list
                newResults.forEach((newSong) => {
                  setSongs(prev => mergeSongIntoList(prev, newSong));
                });
              }} 
              style={{height: "100%"}}
              title='Results'
              favoriteSongs={favoriteSongs}
              updateFavorites={updateFavorites}
              onLike={handleLike}
            />
          : <div style={{color:"white"}}>loading...</div>}
      </div>
  );
}