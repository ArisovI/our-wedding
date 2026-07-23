import "./MusicToggle.css";

interface MusicToggleProps {
  isPlaying: boolean;
  unavailable: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ isPlaying, unavailable, onToggle }: MusicToggleProps) => {
  return (
    <div className="music-toggle">
      <button
        type="button"
        className={`music-toggle__btn${isPlaying ? " music-toggle__btn--playing" : ""}`}
        onClick={onToggle}
        aria-label={isPlaying ? "Выключить музыку" : "Включить музыку"}
        title={
          unavailable
            ? "Добавьте файл public/norm-music.m4a, чтобы включить музыку"
            : undefined
        }
      >
        {isPlaying ? "♪" : "♫"}
      </button>
    </div>
  );
};

export default MusicToggle;
