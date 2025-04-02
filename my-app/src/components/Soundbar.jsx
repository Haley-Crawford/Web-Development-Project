import React, {useEffect, useState, useRef} from "react";
import "./Soundbar.css";

const Soundbar = ( {audioReference, isPlaying, setIsPlaying, audioTrack, songQueue} ) => {

    const [progress, setProgress] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    

    const progressBarRef = useRef(null);
    

    useEffect(() => {
        if (!audioReference.current) return;
      
        const updateProgress = () => {
          if (!isSeeking) {  // Only update if user isn't seeking
            const { currentTime, duration } = audioReference.current;
            setProgress((currentTime / duration) * 100 || 0);
          }
        };
      
        audioReference.current.addEventListener('timeupdate', updateProgress);
        return () => {
          audioReference.current?.removeEventListener('timeupdate', updateProgress);
        };
      }, [audioReference, isSeeking]);

    const handleMouseDown = () => {

        setIsSeeking(true);

    };

    const handleMouseUp = () => {

        setIsSeeking(false);

    };

    const handleSeek = (e) => {
        const progressBar = progressBarRef.current;
        const rect = progressBar.getBoundingClientRect();
        const seekPercent = (e.clientX - rect.left) / rect.width;
        const seekTime = seekPercent * audioReference.current.duration;
        
        audioReference.current.currentTime = seekTime;
        setProgress(seekPercent * 100);
    };

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
            <input ref={progressBarRef} type="range" value={progress} onClick={handleSeek} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} />
        </div>
    </>)
};

export default Soundbar;