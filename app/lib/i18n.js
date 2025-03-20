import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getSavedLanguage } from "../../utils/languageStorage"; // დარწმუნდი, რომ ეს სწორად არის

import enTranslation from "../../public/locales/en/common.json";
import geTranslation from "../../public/locales/ge/common.json";

// რადგან localStorage არ მუშაობს სერვერზე, ნაგულისხმევი ენა ვიყენოთ
const selectedLanguage =
  (typeof window !== "undefined" && getSavedLanguage()) || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ge: { translation: geTranslation },
  },
  lng: selectedLanguage, // Load the saved language immediately
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
