import React from 'react'
import { Global, css } from '@emotion/react'
//import { Heart, Like } from './Icons'

const my_styles = css
    `
        *, *:before, *:after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .album-list {
            background-color: pink;
            border-radius: 10px;
            padding: 3px;
            display: flex;
            justify-content: space-around;
        }
        
        .album-img-div {
            width: 100px;
            height: 100px;
        }

        .album-img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    `

function generateAlbum(n) {
    let albums = []

    for (let _ = 0; _ < n; _++) {
        albums.push(
            <div className='album'>
                <div className='album-img-div'>
                    <img src='https://picsum.photos/35' alt='' className='album-img'/>
                </div>
            </div>
        )
    }

    return albums
}

export default function AlbumsComponent() {
    const albums = generateAlbum(7)
    return (
        <>
            <Global styles={my_styles} />
            <div className='album-container'>
            <p className='title'>Albums</p>
                <div className='album-list'>
                    {albums}
                </div>
            </div>
        </>
    )
}