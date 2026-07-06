import type { CSSProperties } from "react";
import type { ConfettiPiece } from "./confetti-utils";
import "./Confetti.css";

interface ConfettiProps {
  pieces: ConfettiPiece[];
}

const Confetti = ({ pieces }: ConfettiProps) => {
  if (pieces.length === 0) return null;

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti__piece"
          style={
            {
              left: `${p.x}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              backgroundColor: p.color,
              "--rotate": `${p.rotate}deg`,
              "--drift": `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default Confetti;
