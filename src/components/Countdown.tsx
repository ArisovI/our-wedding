import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import FlipUnit from "./FlipUnit";
import "./Countdown.css";

const WEDDING_DATE = new Date("2026-08-01T00:00:00+05:00").getTime();

const getTimeLeft = () => {
  const diff = Math.max(WEDDING_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const { t } = useLanguage();

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: [string, number][] = [
    [t.units.days, timeLeft.days],
    [t.units.hours, timeLeft.hours],
    [t.units.minutes, timeLeft.minutes],
    [t.units.seconds, timeLeft.seconds],
  ];

  return (
    <div className="countdown">
      {units.map(([label, value]) => (
        <FlipUnit key={label} value={value} label={label} />
      ))}
    </div>
  );
};

export default Countdown;
