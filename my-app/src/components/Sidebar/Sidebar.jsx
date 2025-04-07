import React from 'react';
import { Home, Library, Plus } from 'lucide-react';
import styles from './Sidebar.module.css';

// interface Playlist {
//   id: number;
//   name: string;
//   imageUrl: string;
// }

// interface SidebarProps {
//   playlists: Playlist[];
// }

export function Sidebar() {

  const playlists = [
    { id: 1, name: 'Favorite Songs', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=200&h=200' },
    { id: 2, name: 'Rock Classics', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=200&h=200' },
    { id: 3, name: 'Chill Vibes', imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&q=80&w=200&h=200' },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.logo}>
          <Home className={styles.homeIcon} />
          <span className={styles.appName}>Music App</span>
        </div>
        
        <div className={styles.librarySection}>
          <div className={styles.libraryHeader}>
            <Library className={styles.libraryIcon} />
            <span>Your Library</span>
          </div>
          <button className={styles.createPlaylist}>
            <Plus className={styles.plusIcon} />
            <span>Create Playlist</span>
          </button>
        </div>
      </div>

      <div className={styles.playlistContainer}>
        <div className={styles.playlistList}>
          {playlists.map((playlist) => (
            <div key={playlist.id} className={styles.playlistItem}>
              <img src={playlist.imageUrl} alt={playlist.name} className={styles.playlistImage} />
              <span className={styles.playlistName}>{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}