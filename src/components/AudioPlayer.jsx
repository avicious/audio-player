import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";
import cover from "../assets/cover.jpg";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const sliderStyle = {
    background: `linear-gradient(to right, #3b82f6 ${progressPercent}%, rgba(255, 255, 255, 0.2) ${progressPercent}%)`,
  };

  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatDuration = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.card}>
      <img src={cover} alt="audio player" />

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <input
        type="range"
        step="0.1"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className={styles.range}
        style={sliderStyle}
      />

      <div className={styles.duration}>
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      <button className={styles.playBtn} onClick={togglePlay}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>
  );
};

export default AudioPlayer;
