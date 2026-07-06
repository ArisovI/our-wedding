import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)",
    ).matches;
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const now = performance.now();
      if (now - lastSpawn.current > 90) {
        lastSpawn.current = now;
        const container = trailRef.current;
        if (container) {
          const el = document.createElement("span");
          el.className = "custom-cursor__particle";
          el.style.left = `${e.clientX}px`;
          el.style.top = `${e.clientY}px`;
          el.textContent = Math.random() > 0.5 ? "❀" : "♥";
          container.appendChild(el);
          window.setTimeout(() => el.remove(), 700);
        }
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor__dot" aria-hidden="true" />
      <div ref={trailRef} className="custom-cursor__trail" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
