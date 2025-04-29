import React from 'react';

export const Albums = ({ albums }) => {

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          <img src={album.image} alt={album.name} />
          <h2>{album.name}</h2>
          <p>Artist: {album.artist_name}</p>
          <p>Release Date: {album.releasedate}</p>
          {album.zip_allowed && (
            <a href={album.zip} download>
              Download Album
            </a>
          )}
          <a href={album.shorturl} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
          <a href={album.shareurl} target="_blank" rel="noopener noreferrer">
            Share
          </a>
        </div>
      ))}
    </div>
  );
};