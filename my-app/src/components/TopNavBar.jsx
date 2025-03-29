import React from "react";
import './components.css';
import SearchBar from "./SearchBar";

const TopNavBar = () => {
  return (
    <div className="top-navbar">
      <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
      <div className="app-name">
      <h1>Music App</h1>
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Profile</button>
        <button className="nav-button">Settings</button>
      </div>
    </div>
  );
};

export default TopNavBar;