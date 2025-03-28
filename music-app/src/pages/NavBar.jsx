import React, { useState } from 'react';
import './components.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <div className="playlist">
                <span className="playlist-title">Playlists</span>
                <button className="dropdown-icon" onClick={toggleDropdown}>
                    <RiArrowDropDownLine size={22} />
                </button>
                {isDropdownOpen && (
                    <div className="playlist-content">
                        <a href="#">Favorites</a>
                        <a href="#">Playlist 1</a>
                        <a href="#">Playlist 2</a>
                        <a href="#">Playlist 3</a>
                    </div>
                )}
            </div>
            <a href="#">Artists</a>
            <a href="#">Albums</a>
        </div>
    );
}

export default NavBar;





