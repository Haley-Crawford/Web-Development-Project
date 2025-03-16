import React from 'react'
import { Global, css } from '@emotion/react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
//import styled from '@emotion/styled'

const GlobalStyles = css
    `
        // *, *:before, *:after {
        //     padding: 0;
        //     margin: 0;
        //     box-sizing: border-box;
        //     text-transform: uppercase;
        // }

        // .carousel {
        //     display: flex;
        //     flex-direction: row;
        // }

        // .song {
        //     width: 50px;
        //     height: 100px;
        //     background-color: gray;
        // }

        // img {
        //     width: 50px;
        //     height: 50px;
        // }

        @keyframes tonext {
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
}

@keyframes tostart {
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
}

@keyframes snap {
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
}

body {
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  font-family: 'Lato', sans-serif;
}

* {
  box-sizing: border-box;
  scrollbar-color: transparent transparent; /* thumb and track color */
  scrollbar-width: 0px;
}

*::-webkit-scrollbar {
  width: 0;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: transparent;
  border: none;
}

* {
  -ms-overflow-style: none;
}

ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel {
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
}

.carousel-viewport {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.slide {
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
}

.slide:nth-child(even) {
  background-color: #99f;
}

.slide:before {
  content: counter(item);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-40%,70px);
  color: #fff;
  font-size: 2em;
}

.snapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
}

@media (hover: hover) {
  .snapper {
    animation-name: tonext, snap;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }

  .slide:last-child .snapper {
    animation-name: tostart, snap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .snapper {
    animation-name: none;
  }
}

.carousel:hover .snapper,
.carousel:focus-within .snapper {
  animation-name: none;
}

.carousel::before,
.carousel::after,
.prev,
.next {
  position: absolute;
  top: 0;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 0;
  outline: 0;
}

.carousel::before,
.prev {
  left: -1rem;
}

.carousel::after,
.next {
  right: -1rem;
}

.carousel::before,
.carousel::after {
  content: '';
  z-index: 1;
  background-color: #333;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  font-size: 2.5rem;
  line-height: 4rem;
  text-align: center;
  pointer-events: none;
}

.carousel::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

.carousel::after {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}
    `

function createItem(n) {

    let items = []
    
    for (let i = 1; i < n; i++) {

        const prev = (i === 1) ? 'slide' + (n - 1) : 'slide' + (i - 1)
        const next = (i === n - 1) ? 'slide1' : 'slide' + (i + 1)

        items.push(
            <li id={`slide${i}`} tabIndex='0' className='slide'>
                <div className='snapper'>
                    <a href={`#${prev}`} className='prev'></a>
                    <a href={`#${next}`} className='next'></a>
                </div>
            </li>
        )
    }

    return items

}

function songCarousel() {

    const items = createItem(10)
    
    return (
        <>
        <Global styles={GlobalStyles} />
        <section className='carousel'>
        <ol className='carousel-viewport'>
            {items}
        </ol>
        </section>       
        </>
    )
}


export default songCarousel