import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, ChevronDown, Settings, LogOut, Filter } from 'lucide-react';
import styles from './TopBar.module.css';


export function TopBar({ showFilter, setShowFilter, showDropdown, setShowDropdown, setIsSearching, searchInput, setSearchInput, setFilterWord }) {
  const nav = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  };

  const checkBox = (e) => {
    const checkboxes = document.getElementsByName('check')
    Array.from(checkboxes).forEach((box) => {
      if (box != e.target) box.checked = false
    })
    setFilterWord(e.target.id)
  }

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
            placeholder='Search for songs, artists, or albums'
            value={searchInput}
            onChange={handleChange}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                setIsSearching(true);
                nav('/search');
              }
            }}
          />
          <Filter className={styles.filterIcon} style={{cursor: 'pointer'}} onClick={() => setShowFilter(!showFilter)}/>
            {showFilter && (
              <div className={styles.filterDropdown} >

                <div className={styles.flex_dropDown}>
                  <input type='checkbox' name='check' id='tracks' onClick={checkBox} className={styles.filterChoice}/>
                  <label htmlFor='tracks'>Songs</label>
                </div>

                <div className={styles.flex_dropDown}>
                  <input type='checkbox' name='check' id='artists' onClick={checkBox} className={styles.filterChoice}/>
                  <label htmlFor='artists'>Artists</label>
                </div>

                <div className={styles.flex_dropDown}>
                  <input type='checkbox' name='check' id='albums' onClick={checkBox} className={styles.filterChoice}/>
                  <label htmlFor='albums'>Albums</label>
                </div>

              </div>
            )}
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