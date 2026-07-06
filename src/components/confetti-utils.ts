export interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotate: number;
  color: string;
  drift: number;
}

const COLORS = ["#f3b6c6", "#ffffff", "#d98aa2", "#c9a66b"];

export const createConfettiBurst = (burstId: number): ConfettiPiece[] =>
  Array.from({ length: 40 }, (_, i) => ({
    id: burstId * 1000 + i,
    x: Math.random() * 100,
    delay: Math.random() * 0.3,
    duration: 1.6 + Math.random() * 1,
    rotate: Math.random() * 720 - 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    drift: (Math.random() - 0.5) * 200,
  }));
