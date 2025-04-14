import React from 'react'
import styles from './SongCard.module.css'
import { Play } from 'lucide-react'
// import { Global, css } from '@emotion/react'
// import styled from '@emotion/styled'
// //import { Button } from '@mui/material'
// //import { FastRewind, Shuffle, FastForward } from '@mui/icons-material'
// import NextSong from '../assets/next-song.svg'
// import PrevSong from '../assets/prev-song.svg'
// import SongShuffle from '../assets/shuffle-icon.svg'
// import PauseSong from '../assets/pause-icon.svg'
// import LoopSong from '../assets/loop-icon.svg'

// const GlobalStyles = css
//     `
//         *, *:before, *:after {
//             padding: 0;
//             margin: 0;
//             box-sizing: border-box;
//         }

//         p {
//             margin-left: 25px;
//         }
//     `

// const Container = styled.div
//     `
//         position: relative;
//         width: 50vw;
//         height: 65vh;
//         background-color: lightgray;
//         border-radius: 15px;
//     `

// const Spacer = styled.div
//     `   
//         position: relative;
//         width: 100%;
//         height: 55%;
//     `

// const SongName = styled.p //Todo: ratio font-size
//     `
//         position: absolute;
//         bottom: 190px;
//         font-size: calc(25vw * 0.2);
//     `

// const ArtistName = styled.p //Todo: ratio font size
//     `
//         position: absolute;
//         bottom: 165px;
//         font-size: calc(25vw * 0.1);
//     `

// const Timer = styled.div //Todo: search for timer object
// `
//     position: absolute;
//     bottom: 95px;
//     right: 10%;
//     text-align: right;
//     font-size: 2vw;
// `    

// const ProgressBar = styled.div //Todo: switch to pre-designed css progress bar
//     `
//         position: absolute;
//         left: 10%;
//         bottom: 60px;
//         width: 80%;
//         height: 3%;
//         background-color: black;
//         border-radius: 15px;
//         margin: 10px 0;
//     `

// const Controls = styled.div
//     `
//         position: absolute;
//         bottom: 15px;
//         width: 100%;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//     `

// const Img = styled.img
//     `
//         height: 2rem;
//     `
// //const timerElement = document.getElementById('timer')

// export function SongCard() {
//     return (
//         <>
//             <Global styles={GlobalStyles} />
//             <Container>
//                 <Spacer></Spacer>
//                 <SongName>Song Name</SongName>
//                 <ArtistName>Artist</ArtistName>
//                 <Timer id='timer'>00:00</Timer>
//                 <ProgressBar id='progress'></ProgressBar>
//                 <Controls>
//                     <Img id='shuffle' src={SongShuffle} alt=''/>
//                     <Img id='prev' src={PrevSong} alt=''/>
//                     <Img id='pause' src={PauseSong} alt=''/>
//                     <Img id='next' src={NextSong} alt=''/>
//                     <Img id='loop' src={LoopSong} alt=''/>
//                 </Controls>
//             </Container>
//         </>
//     )
// }

export function SongCard() {
    return (
        <div className={styles.container}>
            <img src='https://picsum.photos/450' alt='' className={styles.img}/>
            <p className={styles.name}>Song Name</p>
            <div className={styles.credits}>
                <strong>Credits</strong><br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Delectus veniam omnis ducimus optio nam nobis ratione voluptatum quam perferendis, 
                explicabo sunt laudantium architecto eos aut harum, reprehenderit distinctio sed laboriosam?
            </div>
            <div className={styles.queued}>
                <strong><p>Next in queue</p></strong><br/>
                <div className={styles.queuedSong}>
                    <img src='https://picsum.photos/60' alt='' className={styles.queueImg} />
                    <Play className={styles.play} />
                    <div className={styles.queueInfo}>
                        <p>Song Name</p>
                        <p className={styles.queueArtist} >Artist Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}