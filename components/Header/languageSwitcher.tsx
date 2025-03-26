"use client";
import { useTranslation } from "react-i18next";
import { saveLanguage } from "../../utils/languageStorage";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ge" ? "en" : "ge";
    i18n.changeLanguage(newLang);
    saveLanguage(newLang);
  };

  const currentLabel = i18n.language === "ge" ? "ქართული" : "English";

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-800 shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
    >
      <FaGlobe className="text-base" />
      <span>{currentLabel}</span>
    </button>
  );
};

export default LanguageSwitcher;
