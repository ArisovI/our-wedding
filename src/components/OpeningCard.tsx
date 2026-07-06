import { useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import "./OpeningCard.css";

interface OpeningCardProps {
  onOpened: () => void;
}

const OpeningCard = ({ onOpened }: OpeningCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { t } = useLanguage();

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    window.setTimeout(() => {
      setIsHidden(true);
      onOpened();
    }, 900);
  };

  return (
    <div
      className={`opening-cover${isOpen ? " opening-cover--open" : ""}${isHidden ? " opening-cover--hidden" : ""}`}
    >
      <button
        type="button"
        className="opening-cover__panel opening-cover__panel--left"
        onClick={handleOpen}
        aria-label="Открыть приглашение"
      >
        <span className="opening-cover__ornament" aria-hidden="true">
          ❀
        </span>
      </button>
      <button
        type="button"
        className="opening-cover__panel opening-cover__panel--right"
        onClick={handleOpen}
        aria-label="Открыть приглашение"
      >
        <span className="opening-cover__ornament" aria-hidden="true">
          ❀
        </span>
      </button>

      <div className="opening-cover__content">
        <p className="opening-cover__eyebrow">{t.tagline}</p>
        <h1 className="opening-cover__names">{t.namesDisplay}</h1>
        <p className="opening-cover__date">{t.dateShort}</p>
        <button
          type="button"
          className="opening-cover__cta"
          onClick={handleOpen}
        >
          {t.openCta}
        </button>
      </div>
    </div>
  );
};

export default OpeningCard;
