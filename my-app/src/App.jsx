//import logo from './logo.svg'

import './App.css'
import Albums from './components/Artist Page/Albums/Albums.jsx'
import Songs from './components/Artist Page/Songs/Songs.jsx'
import ArtistPage from './components/Artist Page/ArtistPage.jsx'
import Search from './components/Search.jsx';
import Soundbar from './components/Soundbar.jsx';
import { useRef, useState } from 'react'

function App() {
  const audioRef = useRef(new Audio());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [trackObject, setTrack] = useState({});
  const [trackQueue, setTrackQueue] = useState([]);


  return (
    <>
      <Search audioRef={audioRef} trackQueue={trackQueue} setTrackQueue={setTrackQueue} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} setTrack={setTrack} />
      <ArtistPage />
      <Soundbar audioReference={audioRef} isPlaying={audioPlaying} setIsPlaying={setAudioPlaying} audioTrack={trackObject} songQueue={trackQueue} setTrackQueue={setTrackQueue} setTrack={setTrack}/>
    </>
  )
}

export default App;
