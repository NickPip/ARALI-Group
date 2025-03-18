"use client";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded px-3 py-1 ${
          i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("ge")}
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
