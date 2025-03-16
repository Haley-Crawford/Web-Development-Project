import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { HeartBroken } from '@mui/icons-material'

const my_styles = css
    `
        .image {
            height: 200px;
            width: 200px;
            background-color: chartreuse;
            border-radius: 10px;
        }
    `

function createImage() {
    return [
        <div className='image'>This is a paragraph!</div>
    ]
}

function like() {
    return [
        <button>
            <HeartBroken />
        </button>
    ]
}

function info() {
    const image = createImage()
    const likeSong = like()
    //const followArtist = follow()
    return (
        <>
            <Global styles={my_styles} />
            <div>
            {image}
            {likeSong}
            {/*{followArtist} */}
            </div>
        </>
    )
}

export default info