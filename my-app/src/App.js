import './App.css';
import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar';
import { TopBar } from './components/Dashboard/TopBar/TopBar'
import { SongCarousel } from './components/Dashboard/SongCarousel/SongCarousel'
import { PlaybackControls } from './components/Dashboard/PlaybackControls/PlaybackControls'
import { ArtistPage } from './components/Artist Page/ArtistPage'
import { Search } from './components/Search.jsx'
import { Favorites } from './components/Favorites.jsx';
import { Songs } from './components/Artist Page/Songs/Songs.jsx';
import { Artist } from './components/Artist Page/Artist/Artist.jsx';

function App() {

  const audioRef = useRef(new Audio());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [trackObject, setTrack] = useState({});
  const [trackQueue, setTrackQueue] = useState([]);
  const [prevTracks, setPrevTracks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const [songs, setSongs] = useState([
        {id: 1, name: `Song 1`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 2, name: `Song 2`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 3, name: `Song 3`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 4, name: `Song 4`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false},
        {id: 5, name: `Song 5`, album_name: 'Album Name', releasedate: new Date().getFullYear(), isLiked: false}
    ])

  const savedFavorites = JSON.parse(localStorage.getItem('favoriteSongs')) || [];
  const [favoriteSongs, setFavoriteSongs] = useState(savedFavorites);

  const updateFavorites = (songs) => {
    const newFavorites = songs.filter(song => song.isLiked)
    setFavoriteSongs(newFavorites)
  }

  const apiKey = process.env.REACT_APP_JAMENDO_KEY;


  const apiSearch = async () => {
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

  useEffect(() => {

    if(isSearching == true){

      apiSearch();
      
      console.log(`search for ${searchInput}`)

      setIsSearching(false);
    }

  }, [isSearching])

   // Whenever likedSongs state changes, update localStorage
   useEffect(() => {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
  }, [favoriteSongs]);

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  useEffect(() => {
    const savedSongs = JSON.parse(localStorage.getItem('songs'));
    if (savedSongs) {
      setSongs(savedSongs);
    }
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteSongs'));
    if (savedFavorites) {
      setFavoriteSongs(savedFavorites);
    }
  }, []);

  return (
    
    <BrowserRouter>
      <div className='app'>
        <Sidebar /> 
        <div className='mainContent'>
          <TopBar 
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            showDropdown={showDropdown} 
            setShowDropdown={setShowDropdown} 
          />
          <main className='contentArea'>
            <Routes>
              <Route 
                path='/artist' 
                element={
                  <SongCarousel 
                    currentIndex={currentSongIndex}
                    setCurrentIndex={setCurrentSongIndex}
                  />
                }
              />
              <Route 
                path='/'
                element={
                  <ArtistPage 
                    songs={songs}
                    setSongs={setSongs}
                    favoriteSongs={favoriteSongs}
                    updateFavorites={updateFavorites} 
                  />
                }
              />
              <Route 
                path='/search' 
                element={
                  <Search 
                    songs={songs} // <-- ADD this
                    setSongs={setSongs} // <-- ADD this
                    searchResults={searchResults} 
                    setSearchResults={setSearchResults} 
                    favoriteSongs={favoriteSongs}
                    updateFavorites={updateFavorites}
                  />
                } 
              />
              <Route 
                path='/favorites'
                element={
                  <Songs
                    songs={songs.filter(song => song.isLiked)}
                    setSongs={setSongs}
                    favoriteSongs={favoriteSongs}
                    updateFavorites={updateFavorites}
                    title='Favorites'
                  />
                }
              />
            </Routes>
          </ main>
          <PlaybackControls 
            audioRef={audioRef}
            isPlaying={audioPlaying} 
            setIsPlaying={setAudioPlaying}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            totalSongs={5}
            favoriteSongs={favoriteSongs}
            updateFavorites={updateFavorites}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
