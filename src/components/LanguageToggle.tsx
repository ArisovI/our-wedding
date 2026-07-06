import { useLanguage } from "../i18n/useLanguage";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label="Язык / Til">
      <button
        type="button"
        className={`language-toggle__btn${lang === "ru" ? " language-toggle__btn--active" : ""}`}
        onClick={() => setLang("ru")}
      >
        РУС
      </button>
      <button
        type="button"
        className={`language-toggle__btn${lang === "kaa" ? " language-toggle__btn--active" : ""}`}
        onClick={() => setLang("kaa")}
      >
        ҚҚ
      </button>
    </div>
  );
};

export default LanguageToggle;
