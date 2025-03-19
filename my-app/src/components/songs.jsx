import React from 'react'
import { Global, css } from '@emotion/react'
import { Heart, Like } from './Icons'
import styled from '@emotion/styled'
import { HeartBroken, PlusOne } from '@mui/icons-material'

const my_styles = css
    `
        *, *:before, *:after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .song-list {
            background-color: lightgrey;
            border-radius: 10px;
            padding: 3px;
        }

        .title {
            font-weight: bold;
            font-size: 2rem;
            margin-left: 10px;
        }

        .song-name {
            font-weight: 500;
            font-size: 1.3rem;
        }

        .song {
            display: flex;
            margin: 10px;
        }

        .img-div {
            flex-basis: 10%;
            display: flex;
            justify-content: center;
        } 

        img {
            border-radius: 10px;
        }
            
        .song-info {
            flex-basis: 70%;
        }

        .song-choices {
            flex-basis: 20%;
            display: flex;
            justify-content: flex-end;
        }

        button {
            background: transparent;
            border: none;
        }

        button > * {
            height: 70%;
            width: 70%;
        }
    `

function generateSong(n) {
    let songs = []

    for (let i = 0; i < n; i++) {
        songs.push(
            <div className='song'>
                <div className='img-div'>
                    <img src='https://picsum.photos/35' alt='' className='song-img'/>
                </div>
                <div className='song-info'>
                    <p className='song-name'>Song Name</p>
                    <p className='album-info'>Album Name • Mar 2025</p>
                </div>
                <div className='song-choices'>
                    <button className='song-like'>
                        <Like />
                    </button>
                    <button className='song-favorite'>
                        <Heart />
                    </button>
                </div>
            </div>
        )
    }

    return songs
}


export default function SongsComponent() {
    const songs = generateSong(3)
    return (
        <>
            <Global styles={my_styles} />
            <div className='song-container'>
                <div className='song-list'>
                    <p className='title'>Popular Songs</p>
                    {songs}
                </div>
            </div>
        </>
    )

}