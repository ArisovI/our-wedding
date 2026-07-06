import { useEffect, useState } from "react";
import "./Preloader.css";

const MIN_DURATION = 900;

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
      const elapsed = performance.now() - start;
      const wait = Math.max(MIN_DURATION - elapsed, 0);
      window.setTimeout(() => setHidden(true), wait);
    });
  }, []);

  if (removed) return null;

  return (
    <div
      className={`preloader${hidden ? " preloader--hidden" : ""}`}
      onTransitionEnd={() => {
        if (hidden) setRemoved(true);
      }}
      aria-hidden="true"
    >
      <div className="preloader__monogram">И&nbsp;&amp;&nbsp;У</div>
      <span className="preloader__flower">❀</span>
    </div>
  );
};

export default Preloader;
