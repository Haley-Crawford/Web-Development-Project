import React, { useState, useEffect, useRef} from 'react';
import { Search, User, ChevronDown, Settings, LogOut } from 'lucide-react';
import styles from './TopBar.module.css';


export function TopBar({ showDropdown, setShowDropdown }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for songs, artists, or playlists"
            className={styles.searchInput}
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