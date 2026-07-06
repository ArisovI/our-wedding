import { createContext } from "react";
import type { Lang, Translation } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | null>(
  null,
);
