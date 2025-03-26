import React from 'react';
import { Global, css } from '@emotion/react'
import ArtistComponent from './artist info.jsx'
import SongsComponent from './artist page - songs.jsx';
import AlbumsComponent from './artist page - albums.jsx';

const my_styles = css
    `
        .container {
            display: grid;
            width: 100vw;
            height: 100vh;  
            grid-template-areas:
                'nav tools'
                'nav artist'
                'nav songs'
                'nav albums' 
                'controls controls';
            grid-template-rows: 7% 25% 38% 23% 7%;
            grid-template-columns: 25% 1fr;
        }

        nav {
            grid-area: nav;
            background-color:rgb(66, 97, 247);
        }

        .tools {
            grid-area: tools;
            background-color: #ffa08c;
        }

        .artist-container {
            grid-area: artist;
            background-color: #ffff64;
            padding: 15px;
        }

        .song-container {
            grid-area: songs;
            background-color: #8cffa0;
            padding: 10px;
            display: flex;
            flex-direction: column;
            row-gap: 5px;
        }

        .album-container {
            grid-area: albums;
             background-color:rgb(138, 72, 183);
        }

        .controls {
            grid-area: controls;
             background-color:rgb(106, 106, 106);
        }
    `

export default function ArtistPage() {
    return (
        <>
            <Global styles={my_styles} />
            <div className='container'>
                <nav>NavBar</nav>
                <div className='tools'>Tools Div</div>
                <ArtistComponent/>
                <SongsComponent />
                <AlbumsComponent />
                {/* <div className='albums'>Albums Div</div> */}
                <div className='controls'>Controls Div</div>
            </div>
        </>
    )
}