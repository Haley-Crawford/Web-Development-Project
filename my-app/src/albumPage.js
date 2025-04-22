import React from 'react';
import './albumPage.css';

const AlbumPage = () => {
    const album = {
        name: "Album Name",
        artist: "Artist",
        genre: "Genre",
        releaseDate: "Feb 2025",
        totalSongs: 18,
        totalDuration: "1 hr 20 min",
        coverImage: 'https://picsum.photos/250', // Add the album cover image URL here
        songs: [
            { name: "Song Name 1", duration: "1 min 20 sec" },
            { name: "Song Name 2", duration: "1 min 20 sec" },
            { name: "Song Name 3", duration: "1 min 20 sec" },
            { name: "Song Name 4", duration: "1 min 20 sec" },
            { name: "Song Name 5", duration: "1 min 20 sec" },
            { name: "Song Name 6", duration: "1 min 20 sec" },
            { name: "Song Name 7", duration: "1 min 20 sec" },
        ],
    };

    return (
        <div className="album-page">
            <header className="header">
                <div className="logo">HOME</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user-profile">Full Name</div>
            </header>
            <main className="album-info">
                <div className="album-details">
                    <img src={album.coverImage} alt={`${album.name} cover`} className="album-cover" /> {/* Display the album cover */}
                    <h2>{album.name}</h2>
                    <p>{album.artist}</p>
                    <p>{album.genre} • {album.releaseDate}</p>
                    <p>{album.totalSongs} songs • {album.totalDuration}</p>
                </div>
                <div className="song-list">
                    {album.songs.map((song, index) => (
                        <div key={index} className="song-item">
                            <div className="song-name">{song.name}</div>
                            <div className="song-duration">{song.duration}</div>
                            <button className="favorite-button">❤️</button>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="footer">
                <div className="now-playing">
                    <div className="current-song">Song Name</div>
                    <div className="current-artist">Artist</div>
                </div>
                <div className="controls">
                    <button>◀</button>
                    <button>▶</button>
                    <button>▶▶</button>
                </div>
            </footer>
        </div>
    );
};

export default AlbumPage;
