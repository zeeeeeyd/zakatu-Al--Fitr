import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';
import backgroundImage from '../assets/back.jpg';

export function LoadingScreen() {
  return (
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
        <div className="h-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Moon className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h1 className="text-4xl font-arabic text-white mb-4">
              زكاة الفطر طهرة للصائم
            </h1>
            <div className="flex justify-center space-x-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.4 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}