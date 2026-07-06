import { useEffect, useRef, useState } from "react";
import "./FlipUnit.css";

interface FlipUnitProps {
  value: number;
  label: string;
}

const pad = (n: number) => String(Math.max(n, 0)).padStart(2, "0");

const FlipUnit = ({ value, label }: FlipUnitProps) => {
  const prevRef = useRef(value);
  const [renderedPrev, setRenderedPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prevRef.current === value) return;
    setRenderedPrev(prevRef.current);
    prevRef.current = value;
    setFlipping(true);
    const id = window.setTimeout(() => setFlipping(false), 640);
    return () => window.clearTimeout(id);
  }, [value]);

  const bottomValue = flipping ? renderedPrev : value;

  return (
    <div className="flip-unit">
      <div className="flip-unit__card">
        <div className="flip-unit__row flip-unit__row--top">
          <span className="flip-unit__digit">{pad(value)}</span>
        </div>
        <div className="flip-unit__row flip-unit__row--bottom">
          <span className="flip-unit__digit">{pad(bottomValue)}</span>
        </div>

        {flipping && (
          <>
            <div className="flip-unit__row flip-unit__leaf flip-unit__leaf--top">
              <span className="flip-unit__digit">{pad(renderedPrev)}</span>
            </div>
            <div className="flip-unit__row flip-unit__leaf flip-unit__leaf--bottom">
              <span className="flip-unit__digit">{pad(value)}</span>
            </div>
          </>
        )}

        <div className="flip-unit__hinge" aria-hidden="true" />
      </div>
      <span className="flip-unit__label">{label}</span>
    </div>
  );
};

export default FlipUnit;
