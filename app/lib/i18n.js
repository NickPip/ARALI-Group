import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../public/locales/en/common.json";
import geTranslation from "../public/locales/ge/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ge: { translation: geTranslation },
  },
  lng: "en", // ნაგულისხმევი ენა
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
