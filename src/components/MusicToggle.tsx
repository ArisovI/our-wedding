import { useRef, useState } from "react";
import "./MusicToggle.css";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setUnavailable(true));
  };

  return (
    <div className="music-toggle">
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button
        type="button"
        className={`music-toggle__btn${isPlaying ? " music-toggle__btn--playing" : ""}`}
        onClick={toggle}
        aria-label={isPlaying ? "Выключить музыку" : "Включить музыку"}
        title={
          unavailable
            ? "Добавьте файл public/music.mp3, чтобы включить музыку"
            : undefined
        }
      >
        {isPlaying ? "♪" : "♫"}
      </button>
    </div>
  );
};

export default MusicToggle;
