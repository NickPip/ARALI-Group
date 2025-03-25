"use client";
import { useTranslation } from "react-i18next";
import { saveLanguage } from "../../utils/languageStorage";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      saveLanguage(lang);
    }
    setOpen(false);
  };

  const currentLabel = i18n.language === "ge" ? "Georgian" : "English";

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-800 shadow hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >
        <FaGlobe className="text-base" />
        <span>{currentLabel}</span>
        <MdExpandMore className="text-lg" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-full min-w-[120px] rounded-md bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("ge")}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Georgian
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
