import { useState } from 'react';
import { Calculator as CalculatorIcon, Users, Scale, Share2 } from 'lucide-react';
import { type FoodType, type ZakatCalculation, type Translation, FOOD_WEIGHTS } from '../types';

const SAA_WEIGHT_KG= 2.75;

interface CalculatorProps {
  language: string;
  translations: Translation;
}

export function Calculator({ language, translations }: CalculatorProps) {
  const [calculation, setCalculation] = useState<ZakatCalculation>({
    numberOfPeople: 1,
    foodType: 'wheat',
    totalWeight: SAA_WEIGHT_KG,
  });

  const handlePeopleChange = (value: number) => {
    setCalculation({
      ...calculation,
      numberOfPeople: value,
      totalWeight: value * SAA_WEIGHT_KG,
    });
  };

  const handleFoodTypeChange = (type: FoodType) => {
    setCalculation({
      ...calculation,
      foodType: type,
      totalWeight: calculation.numberOfPeople * FOOD_WEIGHTS[type] / 1000, 
    });
  };
  

  const handleShare = () => {
    const message = `${translations.requiredZakat}: ${calculation.totalWeight.toFixed(2)} ${translations.unit} ${translations.of} ${translations.foods[calculation.foodType]}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-2 mb-6">
        <CalculatorIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {translations.subtitle}
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-2">
            <Users className="w-5 h-5" />
            {translations.numberOfPeople}
          </label>
          <input
            type="number"
            min="1"
            value={calculation.numberOfPeople}
            onChange={(e) => handlePeopleChange(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-2">
            <Scale className="w-5 h-5" />
            {translations.foodType}
          </label>
          <select
            value={calculation.foodType}
            onChange={(e) => handleFoodTypeChange(e.target.value as FoodType)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          >
            {Object.entries(translations.foods).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-emerald-800 dark:text-emerald-200 mb-2">
            {translations.requiredZakat}
          </h3>
          <p className="text-emerald-700 dark:text-emerald-300">
            {calculation.totalWeight.toFixed(2)} {translations.unit} {translations.of} {translations.foods[calculation.foodType]}
          </p>
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
            {translations.baseMessage}
          </p>
        </div>

        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 
                   text-white py-2 px-4 rounded-md transition-colors"
        >
          <Share2 className="w-5 h-5" />
          {translations.shareVia}
        </button>
      </div>
    </div>
  );
}