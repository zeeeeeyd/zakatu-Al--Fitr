import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <div className="flex items-center gap-2">
        <Languages className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {language === "en" ? "العربية" : "English"}
        </span>
      </div>
    </button>
  );
}
