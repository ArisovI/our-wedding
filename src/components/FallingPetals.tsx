import type { CSSProperties } from "react";
import "./FallingPetals.css";

const PETAL_COUNT = 16;
const SYMBOLS = ["❀", "✿", "❁"];

const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  duration: 12 + Math.random() * 10,
  delay: Math.random() * -18,
  size: 12 + Math.random() * 12,
  drift: (Math.random() - 0.5) * 140,
  rotate: 180 + Math.random() * 360,
  symbol: SYMBOLS[i % SYMBOLS.length],
}));

const FallingPetals = () => (
  <div className="falling-petals" aria-hidden="true">
    {petals.map((p) => (
      <span
        key={p.id}
        className="falling-petals__petal"
        style={
          {
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
            "--drift": `${p.drift}px`,
            "--rotate": `${p.rotate}deg`,
          } as CSSProperties
        }
      >
        {p.symbol}
      </span>
    ))}
  </div>
);

export default FallingPetals;
