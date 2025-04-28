import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, ChevronDown, Settings, LogOut, LogIn } from 'lucide-react';
import styles from './TopBar.module.css';
import { useAuth } from '../../../AuthProvider'
import { auth } from '../../../firebase'
import { signOut } from 'firebase/auth'


export function TopBar({ showDropdown, setShowDropdown, setIsSearching, searchInput, setSearchInput, toggleAuth, logInToggle }) {
  const nav = useNavigate();
  const {currentUser} = useAuth();

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} style={{cursor: 'pointer'}} onClick={(e) => {
              
              setIsSearching(true);
              nav('/search');

            }}/>
          <input
            type='text'
            className={styles.searchInput}
            placeholder='Search for songs, artists, or playlists'
            value={searchInput}
            onChange={handleChange}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                setIsSearching(true);
                nav('/search');
              }
            }}
          />
        </div>
      </div>

      <div className={styles.profileContainer}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={styles.profileButton}
        >
          <div className={styles.userIcon}>
            <User className={styles.userIconInner} />
          </div>
          <ChevronDown className={styles.chevronIcon} />
        </button>

        {showDropdown && !currentUser && (
          <div className={styles.dropdown}>
            <button onClick={logInToggle} className={`${styles.dropdownItem} ${styles.logoutButton}`} style={{cursor: "pointer"}}>
              <LogIn className={styles.dropdownIcon} />
              <span>Log in / Sign up</span>
            </button>
          </div>
        )}
        {showDropdown && currentUser && (
          <div className={styles.dropdown}>
            <button className={`${styles.dropdownItem} ${styles.logoutButton}`} style={{cursor: "pointer"}} onClick={handleLogout}>
              <LogOut className={styles.dropdownIcon} />
              <span>Sign out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}