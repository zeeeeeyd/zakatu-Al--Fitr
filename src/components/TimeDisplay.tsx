import { useState, useEffect } from "react";
import { TimeDisplayProps } from "../types";

export function TimeDisplay({ language, translations }: TimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4 border border-emerald-500 dark:bg-gray-800 rounded-lg shadow-md">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {translations.currentTime}:
      </p>
      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
        {currentTime.toLocaleTimeString(language === "ar" ? "ar-EG" : "en-US")}
      </p>
      <hr className="my-2 border-gray-300 dark:border-gray-600" />
      <p className="text-md font-medium text-gray-700 dark:text-gray-300">
        {translations.deadlineMessage}
      </p>
      <blockquote className="text-sm italic text-gray-600 dark:text-gray-400 mt-2">
        {translations.hadith}
      </blockquote>
    </div>
  );
}
