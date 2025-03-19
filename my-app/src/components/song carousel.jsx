import React from 'react';
import { Global, css } from '@emotion/react'
//import './stylesApp.css';  // Import your CSS file (if separate)

const my_styles = css
    `
        .banner {
            width: 100%;
            height: 100vh;
            text-align: center;
            overflow: hidden;
            position: relative;
        }

        .banner .slider {
            position: absolute;
            width: 200px;
            height: 250px;
            top: 10%;
            left: calc(50% - 100px);
            transform-style: preserve-3d;
            transform: perspective(1000px);
            animation: autoRun 50s linear infinite;
            z-index: 2;
        }

        @keyframes autoRun {
            from {
                transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            } to {
                transform: perspective(1000px) rotateX(0deg) rotateY(360deg);
            }
        }

        .banner .slider .item {
            position: absolute;
            inset: 0 0 0 0;
            transform: 
                rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
                translateZ(550px);
        }

        .banner .slider .item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 1023px) {
            .banner .slider {
                width: 160px;
                height: 200px;
                left: calc(50% - 80px);
            }
            .banner .slider .item {
                transform: 
                    rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
                    translateZ(300px);
            }
        }

        @media screen and (max-width: 767px) {
            .banner .slider {
                width: 100px;
                height: 150px;
                left: calc(50% - 50px);
            }
            .banner .slider .item {
                transform: 
                    rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
                    translateZ(180px);
            }
        }

    `

function addImage(n) {
    let images = []

    for (let i = 0; i < n; i++) {
        images.push(
            <div className='item' style={{ '--position': i }}>
                <img src='https://picsum.photos/200' alt='' />
            </div>
        )  
    }
    return images 
}

export default function() {
    const images = addImage(10)
    //Todo: scroll
    //Todo: arrow functions
    //Todo: stop focused image for x seconds and animate
    return (
        <>
        <Global styles={my_styles} />
        <div className='banner'>
        <div className='slider' style={{ '--quantity': 10 }}>
            {images}
        </div>
        </div>
        </>
    )
}
