import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, ChevronDown, Settings, LogOut } from 'lucide-react';
import styles from './TopBar.module.css';


export function TopBar({ showDropdown, setShowDropdown, setIsSearching, searchInput, setSearchInput }) {
  const nav = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value)
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

        {showDropdown && (
          <div className={styles.dropdown}>
            <button className={styles.dropdownItem}>
              <Settings className={styles.dropdownIcon} />
              <span>Settings</span>
            </button>
            <button className={`${styles.dropdownItem} ${styles.logoutButton}`}>
              <LogOut className={styles.dropdownIcon} />
              <span>Log out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}