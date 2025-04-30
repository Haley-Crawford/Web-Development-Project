import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar';
import { TopBar } from './components/Dashboard/TopBar/TopBar'
import { PlaybackControls } from './components/Dashboard/PlaybackControls/PlaybackControls'
import { ArtistPage } from './components/Artist Page/ArtistPage'
import { Search } from './components/Dashboard/TopBar/Search/Search.jsx'
import { ChatBot } from './components/Chatbot/Chatbot.jsx';
import { SignUp } from './components/Sign Up/SignUp.jsx';
import { Dashboard } from './components/Dashboard/Dashboard.jsx';
import Modal from 'react-modal';
import { Playlist } from './components/Playlist/Playlist.jsx'
import { AuthProvider } from './AuthProvider.jsx';
import { LogIn } from './components/Sign Up/LogIn.jsx'
import { Favorites } from './components/Favorites.jsx'


function App() {

  const audioRef = useRef(new Audio());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [track, setTrack] = useState({});
  const [trackQueue, setTrackQueue] = useState([]);
  const [prevTracks, setPrevTracks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [chatDisplay, setChatDisplay] = useState(false)
  const [elapsedTime, setElapsedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [auth, setAuth] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [filterWord, setFilterWord] = useState('tracks');
  const [showLogIn, setShowLogIn] = useState(false)
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [currArtist, setCurrArtist] = useState(null)

  const apiKey = process.env.REACT_APP_JAMENDO_KEY;


  const apiSearch = async () => {
    const url = `https://api.jamendo.com/v3.0/${filterWord}/?client_id=${apiKey}&format=jsonpretty&limit=10&namesearch=${encodeURIComponent(searchInput)}`;
    
    try{

      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`API request failed with status ${response.status}`);
      };

      const data = await response.json();
      setSearchResults(data.results);
      

    }catch (err){
      console.log(err);
    }
  };

  const toggleChat = () => {
    setChatDisplay(prev => !prev)
  }

  const toggleAuth = () => {
    setShowAuth(true)
  }

  const logInToggle = () => {
    setShowLogIn(true)
  }

  useEffect(() => {

    if(isSearching == true){

      apiSearch();
      
      console.log(`search for ${searchInput} with filter ${filterWord}`)

      setTimeout(() => {
        setIsSearching(false);
      }, 2000)
    }

  }, [isSearching])

  useEffect(() => {
    setIsSearching(true) 
  }, [filterWord])

  // Load favorite songs from local storage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteSongs'));
    if (savedFavorites) {
      setFavoriteSongs(savedFavorites);
    }
  }, []);

   // Whenever likedSongs state changes, update local storage
  useEffect(() => {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
  }, [favoriteSongs]);

  // useEffect(() => {
  //   localStorage.setItem('songs', JSON.stringify(songs));
  // }, [songs]);

  // useEffect(() => {
  //   const savedSongs = JSON.parse(localStorage.getItem('songs'));
  //   if (savedSongs) {
  //     setSongs(savedSongs);
  //   }
  // }, []);


  return (
    <AuthProvider>
      <BrowserRouter>
        <SignUp
          isOpen={showAuth}
          onClose={() => setShowAuth(false)}
          logInToggle={logInToggle}
        />
        <LogIn 
          isOpen={showLogIn}
          onClose={() => setShowLogIn(false)}
          signUpToggle={toggleAuth}
        />
        <div className='app'>
          <Sidebar logInToggle={logInToggle} /> 
          <div className='mainContent'>
            <TopBar 
              setIsSearching={setIsSearching}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              showDropdown={showDropdown} 
              setShowDropdown={setShowDropdown}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            setFilterWord={setFilterWord}
              toggleAuth={toggleAuth} 
              logInToggle={logInToggle}
            />
            <main className='contentArea'>
              <Routes>
                <Route path='/' element={
                  <Dashboard 
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                  />
                }/>
                <Route path='/artist' element={
                  <ArtistPage artist={currArtist}/>
                }/>
                <Route path='/favorites' element={
                  <Favorites audioRef={audioRef} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} setTrack={setTrack} trackQueue={trackQueue} setTrackQueue={setTrackQueue}/>
                }/>
                <Route 
                  path='/search' 
                  element={
                    <Search 
                      searchResults={searchResults} 
                      setSearchResults={setSearchResults} 
                      audioRef={audioRef}
                      audioPlaying={audioPlaying}
                      setAudioPlaying={setAudioPlaying}
                      setTrack={setTrack}
                      trackQueue={trackQueue}
                      setTrackQueue={setTrackQueue}
                      filterWord={filterWord}
                      isSearching={isSearching}
                      setFavoriteSongs={setFavoriteSongs}
                      setCurrArtist={setCurrArtist}
                    />
                  } 
                />
                <Route path='/playlist' element={
                  <Playlist 
                    songs={favoriteSongs}
                    setSongs={setFavoriteSongs}
                  />
                }/>
              </Routes>

              <ChatBot isVisible={chatDisplay}/>
            </ main>
            <PlaybackControls 
              audioRef={audioRef}
              isPlaying={audioPlaying} 
              setIsPlaying={setAudioPlaying}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              totalSongs={5}
              toggleChat={toggleChat}
              track={track}
              setTrack={setTrack}
              trackQueue={trackQueue}
              setTrackQueue={setTrackQueue}
              prevTracks={prevTracks}
              setPrevTracks={setPrevTracks}
              elapsedTime={elapsedTime}
              setElapsedTime={setElapsedTime}
              duration={duration}
              setDuration={setDuration}
              isAuth={auth}
              toggleAuth={toggleAuth}
            />
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
