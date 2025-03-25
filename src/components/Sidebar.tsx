import { motion, AnimatePresence } from 'framer-motion';
import { X, Scroll } from 'lucide-react';
import type { SidebarProps } from '../types';

export function Sidebar({ isOpen, onClose, hadiths, onHadithSelect }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Scroll className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Hadith Collection
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {hadiths.map(hadith => (
                  <div
                    key={hadith.id}
                    onClick={() => onHadithSelect(hadith)}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer
                             hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      {hadith.narrator}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {hadith.englishText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}