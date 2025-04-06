import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart } from "lucide-react";
import "./SongBar.css";

export default function SongBar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [liked, setLiked] = useState(false);
    const [progress, setProgress] = useState(0);
    const duration = 240; // Song duration in seconds
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
          intervalRef.current = setInterval(() => {
            setProgress((prev) => {
              if (prev < duration) return prev + 1;
              clearInterval(intervalRef.current);
              return duration;
            });
          }, 1000);
        } else {
          clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
      }, [isPlaying]);
    
      const progressPercent = (progress / duration) * 100;

    return (
        <div className="music-player">
          <button className="icon-button">
            <Shuffle className="icon gold" />
          </button>
          <button className="icon-button">
            <SkipBack className="icon gold" />
          </button>
          <button className="icon-button" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <Pause className="icon gold" />
            ) : (
              <Play className="icon gold" />
            )}
          </button>
          <button className="icon-button">
            <SkipForward className="icon gold" />
          </button>
          <button className="icon-button">
            <Repeat className="icon gold" />
          </button>
          <button className="icon-button" onClick={() => setLiked(!liked)}>
            <Heart className={liked ? "icon gold" : "icon gray"} />
          </button>
          <div className="song-cover">
            <img src="/path-to-your-cover.jpg" alt="Song Cover" className="cover-image" />
          </div>
          <div className="progress-bar" />
          <div className="volume-control">
            <span className="volume-icon">🔈</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="volume-slider"
            />
            <span className="volume-icon">🔊</span>
          </div>
        </div>
    );
}    
