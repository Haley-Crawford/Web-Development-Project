import './App.css';
import React, { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar';
import { TopBar } from './components/Dashboard/TopBar/TopBar'
import { SongCarousel } from './components/Dashboard/SongCarousel/SongCarousel'
import { PlaybackControls } from './components/Dashboard/PlaybackControls/PlaybackControls'
import ArtistPage from './components/Artist Page/ArtistPage'

function App() {

  const audioRef = useRef(new Audio());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [trackObject, setTrack] = useState({});
  const [trackQueue, setTrackQueue] = useState([]);
  const [prevTracks, setPrevTracks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar /> 
        <div className='mainContent'>
          <TopBar 
            showDropdown={showDropdown} 
            setShowDropdown={setShowDropdown} 
          />
          <main className='contentArea'>
            <Routes>
              <Route path='/' element={
                <SongCarousel 
                  currentIndex={currentSongIndex}
                  setCurrentIndex={setCurrentSongIndex}
                />
              }/>
              <Route path='/artist' element={
                <ArtistPage />
              }/>
            </Routes>
          </ main>
          <PlaybackControls 
            audioRef={audioRef}
            isPlaying={audioPlaying} 
            setIsPlaying={setAudioPlaying}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            totalSongs={5}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
