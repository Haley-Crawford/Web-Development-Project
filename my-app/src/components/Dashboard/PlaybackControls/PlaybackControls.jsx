import React, { useState, useEffect, useRef } from 'react';
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, ListMusic, Volume2, Heart } from 'lucide-react';
import styles from './PlaybackControls.module.css';

// interface PlaybackControlsProps {
//   isPlaying: boolean;
//   setIsPlaying: (playing: boolean) => void;
//   currentSongIndex: number;
//   setCurrentSongIndex: (index: number) => void;
//   totalSongs: number;
// }

export function PlaybackControls({ 
  audioRef,
  isPlaying, 
  setIsPlaying, 
  currentSongIndex, 
  setCurrentSongIndex,
  totalSongs, 
  track,
  setTrack,
  trackQueue,
  setTrackQueue,
  prevTracks,
  setPrevTracks,
  elapsedTime,
  setElapsedTime,
  duration,
  setDuration

}) {
  const [songEnded, setSongEnded] = useState(false);
  const [progress, setProgress] = useState(0.0);
  const progressBarRef = useRef(null);

  useEffect(() => {

    const aud = audioRef.current;
    setElapsedTime("0:00");
    const seconds = track.duration % 60
    const minutes = Math.floor(track.duration / 60)
    setDuration(`${minutes}:${seconds < 10? `0${seconds}`: seconds}`);

    const updateTime = () => {
      if(isPlaying){
        
        const aud = audioRef.current;
        const totalSeconds = aud.currentTime
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = Math.floor(totalSeconds % 60)
        const newProgress = (totalSeconds / aud.duration).toFixed(4) * 100
        
        setElapsedTime(`${minutes}:${seconds < 10? `0${seconds}`: seconds}`)
        setProgress(newProgress)
      }
    }
    aud.addEventListener("timeupdate", updateTime);
    aud.addEventListener("ended", handleEnd);

    return () => {
      aud.removeEventListener("timeupdate", updateTime)
      aud.removeEventListener("ended", handleEnd)
    }

  }, [track])

  useEffect(() => {
    if(songEnded == true){
      handleNext()
    }

  }, [songEnded])

  const [isLiked, setIsLiked] = useState(false)

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio.duration) return;
    console.log("clicked");
    
    const progressBar = progressBarRef.current;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const seekPercentage = (clickPosition / progressBarWidth);
    const seekTime = audio.duration * seekPercentage;
    
    audio.currentTime = seekTime;
    setProgress(seekPercentage * 100);
  };

  const handleEnd = () => {
    const curQueue = trackQueue
    console.log(`song ended cur queue ${curQueue.map(item => item.name)}`)
    setSongEnded(true)
  }

  const handlePrevious = () => {
    
    const curStack = prevTracks;
    const wasPlaying = isPlaying;
    const ref = audioRef.current;

    if(curStack && curStack.length > 0){

      if(wasPlaying){

        setIsPlaying(false);
        ref.pause();
      };

      const backSong = curStack[0];
      
      setPrevTracks(prevStack =>{
        const newStack = prevStack.slice(1);
        return newStack;
      });
      ref.src = backSong.audio;
      ref.play();
      setTrack(backSong);
      setIsPlaying(true);

    }else{

      setPrevTracks([]);
      console.log("no songs to go back");
      
    }

  };

  const handleNext = () => {
    
    const curQueue = trackQueue;
    const curStack = prevTracks;
    const wasPlaying = isPlaying;
    const ref = audioRef.current;
    if(curQueue.length <= 1){

      console.log("no more songs");

      if(wasPlaying){

        setIsPlaying(false);
        ref.pause();

      };

      if(curQueue.length = 1){

        const curSong = curQueue[0];
        setPrevTracks((prevTracks) => {
          const newStack = [...prevTracks, curSong];
          return newStack;
        });

        console.log(`new stack: ${[curSong, ...curStack].map(item => item.name)}`)
        
      };

      setTrack({});
      setTrackQueue([]);


    }else{

      const curSong = curQueue[0];
      const nextSong = curQueue[1];
      if(wasPlaying){

        ref.pause();
        setIsPlaying(false);
      };

      setTrack(nextSong);
      setTrackQueue(prevQueue => {
        const newQueue = prevQueue.slice(1);
        return newQueue;
      });
      setPrevTracks((prevTracks) => {
        const newStack = [curSong, ...prevTracks];
        return newStack;
      });

      ref.src = nextSong.audio;
      ref.play();
      setIsPlaying(true);

      console.log(`new song: ${nextSong.name}`);
      console.log(`new queue: ${curQueue.map(item => item.name).slice(1)}`)
      console.log(`new stack: ${[curSong, ...curStack].map(item => item.name)}`)


    }

  };

  const handlePlayPause = () => {

    if(isPlaying){

        audioRef.current.pause();
        setIsPlaying(false);

    }else {

        audioRef.current.play();
        setIsPlaying(true);
    };

  };

  const handleLike = () => {
    setIsLiked(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Currently Playing */}
        <div className={styles.nowPlaying}>
          <img 
            src={track? track.album_image :"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=100&h=100"}
            alt="Now Playing" 
            className={styles.albumArt}
          />
          <div className={styles.songInfo}>
            <h3 className={styles.songTitle}>{track? track.name: "Song Title"}</h3>
            <p className={styles.artistName}>{track? track.artist_name: "Artist Name"}</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className={styles.controls}>
          <div className={styles.buttons}>
            <button className={styles.controlButton}>
              <Shuffle className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton} onClick={handlePrevious}>
              <SkipBack className={styles.controlIcon} />
            </button>
            <button 
              className={styles.playButton}
              onClick={handlePlayPause}
              // onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className={styles.playIcon} />
              ) : (
                <Play className={`${styles.playIcon} ${styles.playIconOffset}`} />
              )}
            </button>
            <button className={styles.controlButton} onClick={handleNext}>
              <SkipForward className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton}>
              <Repeat className={styles.controlIcon} />
            </button>
            <button className={styles.controlButton} onClick={handleLike}>
              <Heart className={`${styles.controlIcon} ${isLiked ? styles.like : ''}`} />
            </button>
          </div>
          <div className={styles.progressBar}>
            <span className={styles.time}>{elapsedTime}</span>
            <div className={styles.progress} ref={progressBarRef} onClick={handleProgressClick} style={{cursor: "pointer"}}>
              <div className={styles.progressFill} style={{"width": `${progress}%`}}></div>
            </div>
            <span className={styles.time}>{duration}</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className={styles.volume}>
          <button className={styles.controlButton}>
            <ListMusic className={styles.controlIcon} />
          </button>
          <button className={styles.controlButton}>
            <Volume2 className={styles.controlIcon} />
          </button>
          <div className={styles.volumeBar}>
            <div className={styles.volumeFill}></div>
          </div>
        </div>
      </div>
    </div>
  );
}