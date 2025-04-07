import React, { useState } from 'react';
//import './components.css';
import styles from './NavBar.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        //<div className={styles.nav} >Hello NavBar!</div>
        // <div className={styles.container}></div>
        <div className={styles.container}>
            <div className={styles.navbar}>
                <a href='#'>Home</a>
                <a href='#'>Categories</a>
                <div className={styles.playlist}>
                    <span className={styles.playlist_title}>Playlists</span>
                    <button className={styles.dropdown_icon} onClick={toggleDropdown}>
                        <RiArrowDropDownLine size={22} />
                    </button>
                    {isDropdownOpen && (
                        <div className={styles.playlist_content}>
                            <a href='#'>Favorites</a>
                            <a href='#'>Playlist 1</a>
                            <a href='#'>Playlist 2</a>
                            <a href='#'>Playlist 3</a>
                        </div>
                    )}
                </div>
                <a href='#'>Artists</a>
                <a href='#'>Albums</a>
            </div>
        </div>
    )
}