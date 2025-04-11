import React, {useEffect, useState} from "react";
import "./Soundbar.module.css";

const Soundbar = ( {audioReference, isPlaying, setIsPlaying, audioTrack, songQueue} ) => {

   

    const handlePlayPause = () => {

        if(isPlaying){

            audioReference.current.pause();
            setIsPlaying(false);

        }else {

            audioReference.current.play();
            setIsPlaying(true);
        };

    };

    return (<>
        <div id="musicPlayer">
            <div id="playerControls">
                <button id="goBackButton">Go Back</button>
                <button id="playPauseButton" onClick={handlePlayPause}>{isPlaying ? "Pause": "Play"}</button>
                <button id="skipButton">Skip</button>
            </div>
            <div id="songInfo">
                <span id="currentSongName">{isPlaying? `${audioTrack.name}` : "No song playing"}</span> - <span id="currentArtistName"></span>
            </div>
            <div id="progressContainer">
                <input type="range" id="progressBar" value="0"></input>
            </div>
        </div>
    </>)
};

export default Soundbar;