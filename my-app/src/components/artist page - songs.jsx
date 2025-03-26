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
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            overflow: auto;
            height: 80%;
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
            column-gap: 10px;
        }

        .img-div {
            display: flex;
            justify-content: center;
            width: 50px;
        } 

        .song-img {
            border-radius: 10px;
            width: 100%;
        }

        .song-choices {
            margin-left: 5px;
            display: flex;
            justify-content: flex-end;
        }

        .choice-btn {
            background: transparent;
            border: none;
        }

        .choice-btn > * {
            height: 70%;
            width: 70%;
        }
    `

function generateSong(n) {
    let songs = []

    for (let _ = 0; _ < n; _++) {
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
                    <button className='song-like choice-btn'>
                        <Like />
                    </button>
                    <button className='song-favorite choice-btn'>
                        <Heart />
                    </button>
                </div>
            </div>
        )
    }

    return songs
}


export default function SongsComponent() {
    const songs = generateSong(12)
    return (
        <>
            <Global styles={my_styles} />
            <div className='song-container'>
                <p className='title'>Popular Songs</p>
                <div className='song-list'>    
                    {songs}
                </div>
            </div>
        </>
    )

}