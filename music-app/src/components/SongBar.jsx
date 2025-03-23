import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  Shuffle,
  Repeat,
  PlayBack,
  Skip,
  Play,
  Pause,
} from "../components/heart";
import "./SongBar.css";

const SongBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio("your-song.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="song-bar">
      {/* Top Row - Heart, Shuffle, Repeat */}
      <div className="top-icons">
        <Heart />
        <Shuffle />
        <Repeat />
      </div>

      {/* Middle Controls - PlayBack, Play/Pause, Skip */}
      <div className="controls">
        <PlayBack />
        <button onClick={togglePlayPause} className="play-button">
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <Skip />
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <span className="time">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default SongBar;
