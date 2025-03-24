import React, {useEffect, useState} from "react";
import "./Soundbar.css";

const Soundbar = () => {
    return (<>
        <div id="musicPlayer">
            <div id="playerControls">
                <button id="goBackButton">Go Back</button>
                <button id="playPauseButton">Play</button>
                <button id="skipButton">Skip</button>
            </div>
            <div id="songInfo">
                <span id="currentSongName">No song playing</span> - <span id="currentArtistName"></span>
            </div>
            <div id="progressContainer">
                <input type="range" id="progressBar" value="0"></input>
            </div>
        </div>
    </>)
};

export default Soundbar;