"use client";
import { useTranslation } from "react-i18next";
import { saveLanguage } from "../../utils/languageStorage";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      saveLanguage(lang);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`rounded px-3 py-1 ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ge")}
        className={`rounded px-3 py-1 ${
          i18n.language === "ge" ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        GE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
