import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिन्दी" },
  { code: "ar", label: "Arabic" },
];

function LanguagesSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <h2>Languages</h2>
      {Languages.map((lng) => {
        const isActive = lng.code === i18n.language;
        return (
          <div
            key={lng.code}
            className="flex gap-6 flex-col py-2 justify-between w-full h-full"
          >
            <button
              className={`w-32 h-12 rounded-lg shadow-md text-white transition-all ${
                isActive
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-400 hover:bg-red-600"
              }`}
              onClick={() => handleLanguageChange(lng.code)}
            >
              {lng.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default LanguagesSelector;
