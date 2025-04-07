import React from 'react'
import { IconContext } from "react-icons";
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Heart, Like } from './Icons'
import { FaHeart } from 'react-icons/fa'

const my_styles = css
    `
        *, *:before, *:after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .artist-container {
            display: flex;
            justify-content: space-between;
        }
        
        .artist-choices {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .artist-img-div {
            width: 40%;
            background-color: chartreuse;
            border-radius: 10px;
        }

        .artist-img {
            height: 100%;
        }

        .artist-like {
            background-color: red;
            border-radius: 10px;
        }

        .artist-follow {
            background-color: lightblue;
            border-radius: 10px;
        }

        button {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            display: grid;
            align-items: center;
            justify-content: center;
        }

        .artist-info {
            width: 30%;
            background-color: violet;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

        .artist-name {
            flex-basis: 30%;
        }

        .artist-info-text {
            flex-basis: 70%;
        }
    `

function createImage() {
    return [
        <div className='artist-img-div'>Artist Image
            <img src='https://picsum.photos/150' alt='' className='artist-img'/>
        </div>
    ]
}

function like() {
    return [
        <div className='artist-like'>Click here to like!
            <button>
                <Heart />
            </button>
        </div>
    ]
}

function follow() {
    return [
        <div className='artist-follow'>Click here to follow!
            <button>
                <Like />
            </button>
        </div>
    ]
}

function info() {
    return [
        <div className='artist-info'>
            <p className='artist-name'>Artist Name</p>
            <p className='artist-info-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    ]
}

function ArtistComponent() {
    const image = createImage()
    const likeSong = like()
    const followArtist = follow()
    const artistInfo = info()
    return (
        <>
            <Global styles={my_styles} />
            <IconContext.Provider value={{ color: 'black'}}>   
                <div className='artist-container'>
                    {image}
                    <div className='artist-choices'>          
                        {likeSong}
                        {followArtist}
                    </div>
                    {artistInfo}
                </div>
            </IconContext.Provider>
        </>
    )
}

export default ArtistComponent