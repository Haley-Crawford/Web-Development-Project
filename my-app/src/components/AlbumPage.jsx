import React from 'react';
import AlbumPage from '../../../albumPage';

const componentsData = {
  results: [
    {
      id: "104336",
      name: "Season One",
      releasedate: "2011-12-29",
      artist_id: "376782",
      artist_name: "WE ARE FM",
      image: "https://usercontent.jamendo.com?type=album&id=104336&width=300",
      zip: "https://storage.jamendo.com/download/a104336/mp32/",
      shorturl: "https://jamen.do/l/a104336",
      shareurl: "https://www.jamendo.com/list/a104336",
      zip_allowed: true
    },
    {
      id: "124067",
      name: "Season One: Instrumental",
      releasedate: "2013-08-01",
      artist_id: "376782",
      artist_name: "WE ARE FM",
      image: "https://usercontent.jamendo.com?type=album&id=124067&width=300",
      zip: "https://storage.jamendo.com/download/a124067/mp32/",
      shorturl: "https://jamen.do/l/a124067",
      shareurl: "https://www.jamendo.com/list/a124067",
      zip_allowed: true
    }
  ]
};

const Component = () => {
  return (
    <div>
      {componentsData.results.map((album) => (
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

export default AlbumPage;