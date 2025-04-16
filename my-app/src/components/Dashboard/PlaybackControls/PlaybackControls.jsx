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
  setPrevTracks
}) {

  const [isLiked, setIsLiked] = useState(false)

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
            <span className={styles.time}>0:00</span>
            <div className={styles.progress}>
              <div className={styles.progressFill}></div>
            </div>
            <span className={styles.time}>3:45</span>
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