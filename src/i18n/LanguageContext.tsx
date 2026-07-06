import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { translations, type Lang } from "./translations";
import { LanguageContext } from "./language-context";

const STORAGE_KEY = "invitation-lang";

const getInitialLang = (): Lang => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "kaa" ? "kaa" : "ru";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
