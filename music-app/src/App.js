import React, { useState } from 'react';  
import './App.css';
import NavBar from './pages/NavBar'; 
import TopNavBar from "./pages/TopNavBar";
import MusicCarousel from './pages/MusicCarousel';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <TopNavBar />
        <div className="content-area">
		  <MusicCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
