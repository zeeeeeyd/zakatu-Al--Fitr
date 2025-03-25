import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Share2 } from 'lucide-react';
import type { HadithCardProps } from '../types';
import { SocialShare } from './SocialShare';

export function HadithCard({ hadith, isExpanded = false, onClick }: HadithCardProps) {
  const [showShare, setShowShare] = React.useState(false);
  
  const cardVariants = {
    collapsed: { height: '12rem' },
    expanded: { height: 'auto' }
  };

  return (
    <motion.div
      layout
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer 
                 hover:shadow-xl transition-shadow relative overflow-hidden
                 border border-emerald-100 dark:border-emerald-900"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-700" />
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
          {hadith.narrator}
        </h3>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors">
            <Bookmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </button>
          <button 
            className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setShowShare(!showShare);
            }}
          >
            <Share2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </button>
        </div>
      </div>

      {showShare && (
        <div className="absolute right-6 top-16 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-xl z-10">
          <SocialShare
            url={window.location.href}
            title={`${hadith.englishText}\n\n${hadith.arabicText}`}
          />
        </div>
      )}

      <div className="space-y-4">
        <p className="text-right font-arabic text-lg leading-loose text-gray-800 dark:text-gray-200">
          {hadith.arabicText}
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            {hadith.englishText}
          </p>
          
          <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
            {hadith.reference}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}