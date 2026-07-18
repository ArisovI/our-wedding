import { useRef, useState } from "react";
import "./App.css";
import OpeningCard from "../components/OpeningCard";
import Invitation from "../components/Invitation";
import LanguageToggle from "../components/LanguageToggle";
import MusicToggle from "../components/MusicToggle";
import FallingPetals from "../components/FallingPetals";
import Confetti from "../components/Confetti";
import { createConfettiBurst, type ConfettiPiece } from "../components/confetti-utils";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import Preloader from "../components/Preloader";
import { LanguageProvider } from "../i18n/LanguageContext";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicUnavailable, setMusicUnavailable] = useState(false);

  const playMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setMusicUnavailable(true));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      playMusic();
    }
  };

  const handleOpened = () => {
    setIsOpen(true);
    setConfettiPieces(createConfettiBurst(Date.now()));
    playMusic();
  };

  return (
    <LanguageProvider>
      <div className="app">
        <Preloader />
        <CustomCursor />
        <FallingPetals />
        <ScrollProgress />
        <LanguageToggle />
        <audio ref={audioRef} src="/music.mp3" loop preload="none" />
        <MusicToggle
          isPlaying={isPlaying}
          unavailable={musicUnavailable}
          onToggle={toggleMusic}
        />
        <Confetti pieces={confettiPieces} />
        {!isOpen && <OpeningCard onOpened={handleOpened} />}
        {isOpen && <Invitation />}
      </div>
    </LanguageProvider>
  );
};

export default App;
