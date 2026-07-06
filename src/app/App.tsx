import { useState } from "react";
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
import { LanguageProvider } from "../i18n/LanguageContext";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const handleOpened = () => {
    setIsOpen(true);
    setConfettiPieces(createConfettiBurst(Date.now()));
  };

  return (
    <LanguageProvider>
      <div className="app">
        <CustomCursor />
        <FallingPetals />
        <ScrollProgress />
        <LanguageToggle />
        <MusicToggle />
        <Confetti pieces={confettiPieces} />
        {!isOpen && <OpeningCard onOpened={handleOpened} />}
        {isOpen && <Invitation />}
      </div>
    </LanguageProvider>
  );
};

export default App;
