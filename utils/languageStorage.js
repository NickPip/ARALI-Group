export const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "en"; // Default to English
  }
  return "en";
};

export const saveLanguage = (lang) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
};
