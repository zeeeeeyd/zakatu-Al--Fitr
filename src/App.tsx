import { useState, useEffect } from "react";
import { Menu, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HadithCard } from "./components/HadithCard";
import { Sidebar } from "./components/Sidebar";
import { Calculator } from "./components/Calculator";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeToggle } from "./components/ThemeToggle";
import { hadiths } from "./data/hadiths";
import { translations } from "./translations";
import type { Hadith } from "./types";
import { TimeDisplay } from "./components/TimeDisplay";

function App() {
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(hadiths[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const backgroundImages = [
    "https://unsplash.com/photos/blue-and-beige-concrete-mosque-kZ1zThg6G40",
    "https://unsplash.com/photos/a-group-of-lit-candles-sitting-on-top-of-a-table-_-DiVU6MXfA",
    "https://unsplash.com/photos/blue-book-beside-brown-wooden-stick-Dxi6KbpvUgA",
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <div
          className="min-h-screen bg-cover bg-fixed bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
        >
          <div className="min-h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <nav className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {translations[language].title}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <button
                    onClick={() => setLanguage((prev) => (prev === "en" ? "ar" : "en"))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Languages className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </nav>
            <div className="max-w-4xl mx-auto mt-8">
              <TimeDisplay language={language} translations={translations[language]} />
            </div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div layout className="space-y-6">
                  {selectedHadith && <HadithCard hadith={selectedHadith} isExpanded />}
                </motion.div>
                <div className="flex justify-center">
                  <Calculator language={language} translations={translations[language]} />
                </div>
              </div>
            </main>

            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              hadiths={hadiths}
              onHadithSelect={(hadith) => {
                setSelectedHadith(hadith);
                setIsSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
